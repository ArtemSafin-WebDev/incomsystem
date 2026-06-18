# Incomsystem frontend

## Интеграция фильтров каталога/списка

Фильтры на странице пресс-центра собраны как обычная HTML-форма:

```html
<form class="press-center-page-news__filters js-press-center-filters" method="get">
```

Бэкенду или клиентскому интеграционному коду не нужно читать текст внутри
кастомного селекта. Источник правды — нативные поля формы:

- поиск: `input[type="search"][name="q"]`;
- одиночный селект: `input[type="radio"][name="category"]:checked`;
- множественный селект: `input[type="checkbox"][name="year"]:checked`;
- общий сброс: `button[type="reset"].js-press-center-filters-reset`;
- сброс отдельного селекта: `.select__reset[data-clear-select]`.

### Когда обновлять каталог

Слушайте события на форме через делегирование:

- `input` — пользователь вводит или очищает поисковую строку;
- `change` — выбран или снят пункт селекта;
- `reset` — нажата кнопка «Сбросить все фильтры».

Для `reset` читать значения нужно на следующем кадре, потому что браузер сначала
сбрасывает поля формы, а потом должны уйти новые параметры:

```js
const form = document.querySelector(".js-press-center-filters");

const getFilters = () => {
  const formData = new FormData(form);

  return {
    q: String(formData.get("q") || "").trim(),
    category: formData.get("category") || "",
    years: formData.getAll("year"),
  };
};

const updateCatalog = () => {
  const filters = getFilters();

  // Здесь отправляйте запрос на бэкенд или обновляйте список на клиенте.
  // Например: fetch(`/api/press-center?${new URLSearchParams(...)}`)
};

form.addEventListener("input", updateCatalog);
form.addEventListener("change", updateCatalog);
form.addEventListener("reset", () => {
  requestAnimationFrame(updateCatalog);
});
```

### Как работают селекты

Компонент `components/select` использует настоящие `radio` и `checkbox`.
Визуальная кнопка селекта только открывает dropdown и отображает выбранное
состояние.

Одиночный селект:

- выбор radio вызывает `change`;
- повторный клик по уже выбранной radio-опции снимает выбор;
- крестик внутри селекта очищает выбор и обновляет состояние компонента.

Множественный селект:

- `select.multiple: true` рендерит опции как `checkbox`;
- можно выбрать несколько значений с одинаковым `name`;
- кнопка «Применить фильтр» внутри dropdown только закрывает dropdown;
- обновление каталога можно делать сразу по `change`, либо ждать клик по
  «Применить фильтр», если в конкретной интеграции нужен отложенный сценарий.

Если опции селекта меняются динамически после ответа бэкенда, после изменения
DOM нужно отправить событие:

```js
document.dispatchEvent(new Event("select:update"));
```

Так компонент заново найдет вложенные input-элементы и пересчитает отображаемый
текст.

### Состояние кнопки сброса

Кнопка `.js-press-center-filters-reset` выключена, пока активных фильтров нет.
Активными считаются:

- непустая строка поиска;
- выбранный `radio`;
- хотя бы один выбранный `checkbox`.

Состояние кнопки обновляется автоматически текущим frontend-кодом при `input`,
`change`, клике по крестикам селектов и `reset`.
