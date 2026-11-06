/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import './index.css';

// ───────── Сторінка-приклад для всіх попередніх переглядів (українською)
const PAGE = `<h1>Кав'ярня «Ранок»</h1>
<p>Свіжа кава з 8:00. Ми в <a href="https://instagram.com">Instagram</a> — пишіть!</p>
<h2>Меню</h2>
<ul>
  <li>Капучино — 180 грн</li>
  <li>Лате — 200 грн</li>
  <li>Круасан — 120 грн</li>
</ul>
<img src="/assets/coffee.svg" alt="Чашка кави">`;

const FINAL_CSS = `/* фон і текст усієї сторінки */
body {
  background-color: #fdf6ec;
  color: #3b2f2f;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* заголовки */
h1, h2 {
  font-family: Georgia, serif;
  color: #6f4e37;
}

h1 {
  font-size: 44px;
  text-align: center;
}

/* пункти меню */
li {
  color: #b5651d;
  font-size: 18px;
}

/* посилання */
a {
  color: #b5651d;
  font-weight: bold;
  text-decoration: none;
}`;

// ───────── Покрокові живі демо: кожне правило вмикається по черзі
const LIVE: Record<string, { base: string; start: string; rules: [string, string, string, string?][] }> = {
  color: {
    base: '',
    start: 'Сторінка без CSS: білий фон, чорний текст, стандартний шрифт браузера. Тисніть «Наступний крок».',
    rules: [
      ['body {\n  background-color: #fdf6ec;\n}', '`body` — вся сторінка. `background-color` зробив фон кремовим.', 'background-color — колір фону'],
      ['p {\n  color: #6b5b53;\n}', '`p` — УСІ абзаци одразу. Селектор за тегом вибирає кожен такий тег на сторінці.', 'type selector — селектор типу'],
      ['h1, h2 {\n  color: #6f4e37;\n}', 'Через кому — одне правило одразу для `h1` та `h2`. Не потрібно дублювати код.', 'selector list — групування селекторів'],
      ['li {\n  color: #b5651d;\n}', '`li` — пункти списку. Маркери-крапки перефарбувалися разом із текстом.', 'color — колір тексту (foreground)'],
      ['a {\n  color: #b5651d;\n  background-color: #ffe2b8;\n}', 'Фон можна призначити будь-якому тегу, не лише всій сторінці: у посилання з\'явилося «підсвічування».', 'background — фон елемента'],
    ],
  },
  font: {
    base: 'body{background-color:#fdf6ec}p{color:#6b5b53}h1,h2{color:#6f4e37}li{color:#b5651d}a{color:#b5651d}',
    start: 'Кольори з попереднього демо вже підключені. Тепер змінюємо виключно шрифти.',
    rules: [
      ['body {\n  font-family: Arial, sans-serif;\n}', 'Шрифт для `body` — змінився шрифт УСІЄЇ сторінки, навіть у заголовків. `sans-serif` — запасний шрифт без зарубок.', 'font stack + fallback — список шрифтів із запасним'],
      ['h1 {\n  font-family: Georgia, serif;\n  font-size: 44px;\n  text-align: center;\n}', 'У `h1` власний шрифт із зарубками (`serif`), розмір `44px` та вирівнювання по центру.', 'serif / sans-serif — із зарубками / без зарубок'],
      ['h2 {\n  font-weight: normal;\n}', 'Заголовки жирні за замовчуванням. `normal` прибирає жирність, `bold` — додає.', 'font-weight — насиченість (вага) шрифту'],
      ['p {\n  font-size: 18px;\n  line-height: 1.6;\n}', '`line-height: 1.6` — висота рядка в 1.6 раза більша за розмір шрифту: тексту легко «дихати».', 'line-height — міжрядковий інтервал (інтерліньяж)'],
      ['li {\n  font-style: italic;\n}', '`font-style: italic` — курсивне накреслення.', 'font-style — накреслення шрифту'],
      ['a {\n  font-weight: bold;\n  text-decoration: none;\n}', '`text-decoration: none` прибирає стандартне підкреслення під посиланням.', 'text-decoration — оформлення тексту (підкреслення)'],
    ],
  },
  inherit: {
    base: '',
    start: 'Чиста сторінка. Задаємо стилі лише для одного тегу — body.',
    rules: [
      ['body {\n  color: #6f4e37;\n  font-family: Georgia, serif;\n}', 'Писали властивості лише для `body`, а змінилося ВСЕ всередині: `h1`, `p`, `li`. Дочірні елементи успадковують колір і шрифт від предка.', 'inheritance — успадкування (parent → child)'],
      ['/* а посилання залишилося синім! */', 'Посилання не успадкувало колір: у тегу `a` є власний колір від браузера. Стиль самого тегу пріоритетніший за успадкований.', 'user agent stylesheet — стилі браузера за замовчуванням', 'a'],
      ['a {\n  color: #b5651d;\n}', 'Щоб перефарбувати посилання — прописуємо правило конкретно для селектора `a`.', 'override — перевизначення стилю'],
      ['h1 {\n  font-family: Arial, sans-serif;\n}', 'Точно так само працює і наше власне правило: `h1` зі своїм шрифтом перевизначає значення від `body`.', 'override — власне правило сильніше за успадковане'],
    ],
  },
};

// ───────── Шрифти та іконки з інтернету
const GF_URL = 'https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Montserrat&display=swap';
const FA_URL = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css';

const WEB = {
  gfonts: {
    base: LIVE.font.base,
    page: () => PAGE,
    steps: [
      { html: '<head>\n  <title>Кав\'ярня «Ранок»</title>\n  <link rel="stylesheet" href="style.css">\n</head>', css: '/* кольори вже підключені — змінюємо лише шрифт */', label: 'Кольори вже є, а шрифт базовий, як на кожному комп\'ютері. Підключимо сучасний веб-шрифт з інтернету.' },
      { html: '<head>\n  <title>Кав\'ярня «Ранок»</title>\n  <link rel="stylesheet"\n    href="' + GF_URL + '">\n  <link rel="stylesheet" href="style.css">\n</head>', hh: [3, 4], css: '/* кольори вже підключені — змінюємо лише шрифт */', load: GF_URL, label: 'Скопіювали `<link>` з fonts.google.com і вставили в `head` вище style.css. Сторінка поки не змінилася: шрифт завантажився, але ми його ще не застосували.', term: 'web font — веб-шрифт' },
      { html: '<head>\n  <title>Кав\'ярня «Ранок»</title>\n  <link rel="stylesheet"\n    href="' + GF_URL + '">\n  <link rel="stylesheet" href="style.css">\n</head>', css: 'body {\n  font-family: "Montserrat", sans-serif;\n}', ch: [1, 2, 3], load: GF_URL, label: 'Назву шрифту пишемо у `font-family`, як Arial: буква в букву, в лапках. `sans-serif` — запасний шрифт, якщо інтернет повільний.', term: 'font-family — сімейство шрифту' },
      { html: '<head>\n  <title>Кав\'ярня «Ранок»</title>\n  <link rel="stylesheet"\n    href="' + GF_URL + '">\n  <link rel="stylesheet" href="style.css">\n</head>', css: 'body {\n  font-family: "Montserrat", sans-serif;\n}\n\nh1, h2 {\n  font-family: "Lora", serif;\n}', ch: [5, 6, 7], load: GF_URL, label: 'Для заголовків — другий шрифт, класичний із зарубками. Параметр `wght@700` у посиланні завантажив жирне накреслення.', term: 'font pairing — шрифтова пара' },
    ],
  },
  icons: {
    base: FINAL_CSS,
    page: (n: number) => PAGE
      .replace('<h1>', '<h1>' + (n >= 2 ? '<i class="fa-solid fa-mug-hot"></i> ' : ''))
      .replace('<p>Свіжа', '<p>' + (n >= 3 ? '<i class="fa-regular fa-clock"></i> ' : '') + 'Свіжа')
      .replace('">Instagram', '">' + (n >= 3 ? '<i class="fa-brands fa-instagram"></i> ' : '') + 'Instagram'),
    steps: [
      { html: '<!-- head -->\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1>Кав\'ярня «Ранок»</h1>\n<p>Свіжа кава з 8:00.\n   Ми в <a href="…">Instagram</a></p>', css: '/* стилі кав\'ярні — як раніше */', label: 'Додамо іконки: горнятко біля заголовка, годинник біля часу, логотип Instagram. Малювати графіку не потрібно — візьмемо готову іконкову бібліотеку.' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1>Кав\'ярня «Ранок»</h1>\n<p>Свіжа кава з 8:00.\n   Ми в <a href="…">Instagram</a></p>', hh: [2, 3], css: '/* стилі кав\'ярні — як раніше */', load: FA_URL, label: 'Підключили Font Awesome — також через тег `<link>`, з CDN (мережі доставки контенту). Іконок поки не видно: їх слід додати в HTML.', term: 'CDN — мережа доставки файлів' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1><i class="fa-solid fa-mug-hot"></i> Кав\'ярня «Ранок»</h1>\n<p>Свіжа кава з 8:00.\n   Ми в <a href="…">Instagram</a></p>', hh: [6], css: '/* стилі кав\'ярні — як раніше */', load: FA_URL, label: 'Іконка — це порожній тег `<i>`. Копіюємо його з fontawesome.com: `fa-solid` — набір, `fa-mug-hot` — ім\'я потрібної іконки.', term: 'icon font — іконковий шрифт' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1><i class="fa-solid fa-mug-hot"></i> Кав\'ярня «Ранок»</h1>\n<p><i class="fa-regular fa-clock"></i> Свіжа кава з 8:00.\n   Ми в <a href="…"><i class="fa-brands fa-instagram"></i> Instagram</a></p>', hh: [7, 8], css: '/* стилі кав\'ярні — як раніше */', load: FA_URL, label: '`fa-regular` — витончені контурні іконки, `fa-brands` — офіційні логотипи: Instagram, Telegram, WhatsApp.', term: 'brand icons — логотипи брендів' },
      { html: '<!-- head -->\n<link rel="stylesheet"\n  href="' + FA_URL + '">\n<link rel="stylesheet" href="style.css">\n<!-- body -->\n<h1><i class="fa-solid fa-mug-hot"></i> Кав\'ярня «Ранок»</h1>\n<p><i class="fa-regular fa-clock"></i> Свіжа кава з 8:00.\n   Ми в <a href="…"><i class="fa-brands fa-instagram"></i> Instagram</a></p>', css: 'i {\n  color: #b5651d;\n  font-size: 30px;\n}', ch: [1, 2, 3, 4], load: FA_URL, label: 'Іконка — це та сама «літера» шрифту. Тому `color` її фарбує, а `font-size` змінює розмір, як у звичайного тексту. Селектор `i` обирає всі іконки одразу.', term: 'color · font-size діють і на іконки' },
    ],
  },
};

// ───────── Слайди уроку (29 слайдів)
interface SlideItem {
  type: string;
  title: string;
  section: string;
  minutes: number;
  notes: string;
  label?: string;
  lead?: string;
  lang?: 'html' | 'css';
  file?: string;
  code?: string;
  question?: string;
  choices?: string[];
  correct?: number;
  explain?: string;
  demo?: 'color' | 'font' | 'inherit' | 'gfonts' | 'icons';
  items?: [string, string, string][];
  links?: [string, string][];
  practice?: 'joint' | 'solo';
  part?: 'concepts' | 'exceptions';
}

const slides: SlideItem[] = [
  { type: 'cover', title: 'Підключення CSS', section: 'Початок', minutes: 1, notes: 'Сьогодні сторінка з минулого заняття отримує візуальний дизайн. План на 90 хвилин: 5 — розминка і «до/після», 45 — теорія з живими демо (включаючи Google Fonts та Font Awesome), 25 — робимо разом, 12 — самостійно, 3 — шпаргалка. Усе зі слайдів учні побачать на практиці.' },
  { type: 'quiz', label: '02 / РОЗМИНКА', section: 'Розминка', title: 'Згадаймо <em>img</em>', lead: 'Матеріал попереднього уроку. Спочатку відповідь уголос, потім кнопка.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<h2>Наша кава</h2>\n<img src="img/coffee.jpg">\n<a href="menu.html">Меню</a>', question: 'Чого не вистачає картинці?', choices: ['alt — опису зображення', 'href — адреси посилання', 'закриваючого тегу </img>', 'Нічого, все написано правильно'], correct: 0,
    explain: '`img` — одиночний тег (void element), закривати його не потрібно. `src` — шлях до файлу, `alt` — обов\'язковий альтернативний текст, якщо картинка не завантажилася або для програм читання з екрана. Атрибут `href` належить посиланням `a`.', notes: 'Якщо плутають src та href — нагадайте: src = source («звідки взяти файл»), href = hypertext reference («куди перейти»). Сьогодні href знадобиться знову — у тезі link.' },
  { type: 'beforeafter', label: '03 / НАВІЩО', section: 'Навіщо CSS', title: 'HTML — <em>що</em>. CSS — <em>як</em> виглядає', lead: 'Ліворуч і праворуч — один і той самий index.html. Праворуч підключили лише один файл style.css.', minutes: 3, notes: 'Ліворуч — «так виглядає ваша робота з минулого уроку». Праворуч — те саме з CSS. Наголосіть: до кінця уроку кожен створить таку саму красу, і кожну властивість ми сьогодні розберемо.' },
  { type: 'tabs', label: '04 / ПІДКЛЮЧЕННЯ', section: 'Підключення', title: 'Три способи <em>підключити CSS</em>', lead: 'Усі три варіанти робочі. Але на реальних проєктах використовують виключно третій. Перемикайте вкладки.', minutes: 4, notes: 'Пройдіть усі три вкладки по черзі. Головне питання групі: «на сайті 20 сторінок — де доведеться змінювати колір заголовків?» Атрибут — на кожному тегу, style — на кожній сторінці, link — в одному центральному файлі.' },
  { type: 'theory', label: '05 / LINK', section: 'Підключення', title: 'Тег <em>link</em> — міст до файлу стилів', lead: 'Пишемо всередині head, поруч із title. Один раз — для кожної сторінки сайту.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<!DOCTYPE html>\n<html lang="uk">\n<head>\n  <meta charset="UTF-8">\n  <title>Кав\'ярня</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Кав\'ярня «Ранок»</h1>\n</body>\n</html>',
    items: [['rel="stylesheet"', 'Вказує браузеру: «цей файл є таблицею стилів». Без `rel` файл стилів не буде підключено.', 'stylesheet — таблиця стилів'], ['href="style.css"', 'Шлях до файлу — працює як `src` у картинки. Якщо файл у папці css → `href="css/style.css"`.', 'relative path — відносний шлях'], ['Одиночний тег', 'Як `img` — не має закриваючого тегу. Розміщується виключно всередині `head`.', 'external CSS — зовнішні стилі']], notes: 'Пов\'яжіть це з уроком 3: шлях у href працює так само, як шлях до зображення. У VS Code: введіть link і натисніть Tab — Emmet сам підставить rel та href.' },
  { type: 'anatomy', label: '06 / ПРАВИЛО', section: 'Синтаксис', title: 'З чого складається <em>CSS-правило</em>', lead: 'Тисніть «Наступний крок» — по черзі підсвітиться кожна складова частина.', minutes: 3, notes: 'Нехай учні хором називають частини: селектор, властивість, значення. Особливу увагу зверніть на крапку з комою — це помилка №1 у початківців.' },
  { type: 'quiz', label: '07 / ПЕРЕВІРКА', section: 'Синтаксис', title: 'Знайдіть <em>помилку</em>', lead: 'Заголовок не пофарбувався в червоний колір. Чому?', minutes: 1, lang: 'css', file: 'style.css',
    code: 'h1 {\n  color red;\n}', question: 'Що тут написано неправильно?', choices: ['Немає двокрапки після color', 'red обов\'язково брати в лапки', 'Потрібно писати .h1 з крапкою', 'Все вірно, помилки немає'], correct: 0,
    explain: 'Властивість (property) та значення (value) розділяються обов\'язковою двокрапкою: `color: red;` Браузер не покаже повідомлення про помилку — він просто мовчки проігнорує некоректний рядок (invalid declaration).', notes: '' },
  { type: 'theory', label: '08 / СЕЛЕКТОРИ', section: 'Синтаксис', title: 'Селектор за <em>тегом</em>', lead: 'Вказуємо ім\'я тегу без кутових дужок < > — і правило застосовується до всіх таких елементів на сторінці.', minutes: 3, lang: 'css', file: 'style.css',
    code: '/* усі абзаци сторінки */\np {\n  color: gray;\n}\n\n/* одне правило для h1 та h2 */\nh1, h2 {\n  color: navy;\n}\n\n/* усі пункти в ul та ol */\nli {\n  color: teal;\n}',
    items: [['За тегом', '`p { }` — стилізує кожен тег `p` на сторінці. Пишемо чисто ім\'я, без дужок `< >`.', 'type selector — селектор типу'], ['Через кому', '`h1, h2 { }` — групування: одне правило призначається одразу для кількох тегів.', 'selector list — групування'], ['Коментар', '`/* нотатка */` — коментар для людини. Браузер повністю пропускає його під час роботи.', 'CSS comment — коментар']], notes: 'Вибирати конкретний унікальний елемент (наприклад, лише один обраний абзац) ми навчимося за допомогою класів — це буде на наступних уроках. Сьогодні цілком вистачає селекторів за тегом.' },
  { type: 'color', label: '09 / КОЛІР', section: 'Колір і фон', title: 'Три способи <em>записати колір</em>', lead: 'Рухайте повзунки: один і той самий колір можна подати трьома різними форматами.', minutes: 4, notes: 'Спочатку розкажіть про назви (tomato, navy) — найпростіший вхід. Потім RGB: «скільки червоного, зеленого та синього від 0 до 255». HEX — ті самі три числа, але записані шістнадцятковим кодом. У макетах Figma майже завжди використовують саме HEX.' },
  { type: 'live', demo: 'color', label: '10 / КОЛІР', section: 'Колір і фон', title: '<em>color</em> та <em>background-color</em> — по кроках', lead: 'color — колір самого тексту. background-color — колір фону під ним. Ліворуч результат, праворуч — нове правило.', minutes: 4, notes: 'На кожному кроці запитуйте аудиторію до кліку: «що саме зараз зміниться?» Часта плутанина: хочуть перефарбувати літери, а пишуть background-color.' },
  { type: 'quiz', label: '11 / ПЕРЕВІРКА', section: 'Колір і фон', title: 'Куди <em>зник текст</em>?', lead: 'Текст фізично є в розмітці, але на екрані його не видно.', minutes: 1, lang: 'css', file: 'style.css',
    code: 'body {\n  background-color: #ffffff;\n}\n\np {\n  color: #ffffff;\n}', question: 'Чому абзац не видно?', choices: ['#ffffff — білий колір на білому фоні', 'Некоректний запис HEX-коду', 'Тег p не успадковує колір', 'Треба обов\'язково писати rgb()'], correct: 0,
    explain: '`#ffffff` — це білий колір. Білий текст на білому фоні присутній, але зливається. Текст і фон завжди повинні мати достатній контраст (contrast) для гарної читабельності.', notes: 'Попросіть виділити текст мишкою — він одразу «проявиться». Чудовий момент наголосити на контрастності та доступності сайту.' },
  { type: 'live', demo: 'font', label: '12 / ШРИФТ', section: 'Шрифт', title: 'Шрифт, розмір, <em>накреслення</em>', lead: 'Шість базових властивостей, які перетворюють «сирий» текст на професійний дизайн.', minutes: 4, notes: 'font-family завжди вказуємо із запасним шрифтом через кому. Якщо на пристрої немає Georgia, браузер обере доступний системний serif. Назви з пробілами беремо в лапки: "Times New Roman".' },
  { type: 'live', demo: 'inherit', label: '13 / УСПАДКУВАННЯ', section: 'Успадкування', title: 'Діти <em>успадковують</em> від батька', lead: 'Колір і шрифт тексту плавно переходять від body до всіх елементів усередині. Але бувають винятки.', minutes: 3, notes: 'Згадайте концепцію вкладеності з 2-го уроку: все всередині body — його «нащадки». Тому загальний шрифт і базовий колір задають один раз для body. Головний виняток — посилання a, у якого свій дефолтний стиль браузера.' },
  { type: 'theory', label: '14 / GOOGLE FONTS', section: 'Веб-шрифти', links: [['Відкрити Google Fonts ↗', 'https://fonts.google.com/?subset=cyrillic'], ['Шрифти з кирилицею', 'https://fonts.google.com/?subset=cyrillic&sort=popularity']], title: 'Google Fonts — <em>шрифти з інтернету</em>', lead: 'Безкоштовна онлайн-бібліотека із сотнями шрифтів. Підключення — один тег &lt;link&gt; та один рядок CSS.', minutes: 2, lang: 'css', file: 'style.css',
    code: '/* 1. fonts.google.com → обираємо шрифт\n   2. Get font → Get embed code\n   3. копіюємо <link> → в head,\n      вище за style.css\n   4. назву шрифту → у font-family */\n\nbody {\n  font-family: "Montserrat", sans-serif;\n}\n\nh1, h2 {\n  font-family: "Lora", serif;\n}',
    items: [['Веб-шрифт', 'Шрифт автоматично завантажується із серверів Google. У всіх відвідувачів він виглядає однаково, навіть якщо не встановлений на комп\'ютері.', 'web font — веб-шрифт'], ['Обов\'язково Cyrillic', 'Фільтр Language → Cyrillic. Без підтримки кирилиці українські літери залишаться стандартними.', 'subset — набір символів'], ['Назва — буква в букву', 'Копіюємо назву з сайту, в лапках: `"Montserrat"`. Запасний через кому — на випадок збою мережі.', 'fallback font — запасний шрифт']], notes: 'Відкрийте fonts.google.com наживо. Одразу покажіть фільтр Cyrillic. Поясніть, що Google надає три рядки (два preconnect — для прискорення завантаження).' },
  { type: 'web', demo: 'gfonts', label: '15 / GOOGLE FONTS', section: 'Веб-шрифти', title: 'Підключаємо <em>Google Fonts</em> — по кроках', lead: 'Зверху index.html, знизу style.css, праворуч результат. Два простих кроки: посилання в HTML та ім\'я у CSS.', minutes: 3, notes: 'На кроці 1 запитайте: «чому нічого не змінилося?» — шрифт завантажили, але ще не підключили у властивостях. На кроці 2 зверніть увагу: заголовки теж змінили шрифт завдяки успадкуванню від body.' },
  { type: 'quiz', label: '16 / ПЕРЕВІРКА', section: 'Веб-шрифти', title: 'Чому <em>шрифт не змінився</em>?', lead: 'Тег посилання на Google Fonts у head присутній, зв\'язок є, але відображається стандартний шрифт.', minutes: 1, lang: 'css', file: 'style.css',
    code: '/* у head підключено Google Fonts:\n   family=Montserrat */\n\nbody {\n  font-family: "Monserrat", sans-serif;\n}',
    question: 'Що саме пішло не так?', choices: ['Назву не можна писати в лапках', 'Описка в імені: Monserrat без літери t', 'Google Fonts діє лише на заголовки', 'sans-serif примусово перебив назву'], correct: 1,
    explain: 'Назва має бути точно буква в букву: `"Montserrat"`. Шрифту з помилкою браузер не знайшов у файлі та мовчки застосував запасний варіант `sans-serif`.', notes: 'Помилки у CSS візуально не видно — браузер просто бере запасний фолбек-варіант. Перевірка: F12 → Elements → Computed → font-family.' },
  { type: 'theory', label: '17 / ІКОНКИ', section: 'Іконки', links: [['Відкрити Font Awesome ↗', 'https://fontawesome.com/icons'], ['Лише безкоштовні', 'https://fontawesome.com/search?ic=free']], title: 'Font Awesome — <em>іконки шрифтом</em>', lead: 'Тисячі готових векторних іконок. Підключаємо бібліотеку один раз — і вставляємо іконки за допомогою тегу &lt;i&gt;.', minutes: 2, lang: 'html', file: 'index.html',
    code: '<!-- 1. fontawesome.com/icons → пошук\n     2. фільтр Free → обираємо іконку\n     3. скопіювали тег <i> → у свій HTML -->\n\n<i class="fa-solid fa-mug-hot"></i>\n<i class="fa-regular fa-heart"></i>\n<i class="fa-brands fa-instagram"></i>',
    items: [['Іконка — це символ шрифту', 'Кожна іконка насправді є гліфом спеціального шрифту. Тому її фарбують через `color` і масштабують через `font-size`.', 'icon font — іконковий шрифт'], ['Три набори', '`fa-solid` — суцільні залиті, `fa-regular` — тонкі контурні, `fa-brands` — офіційні логотипи. Беремо категорію Free.', 'free icons — безкоштовні іконки'], ['Тег i — порожній', 'Усередині нічого не пишемо. Значення `class` копіюємо як є — детальніше про класи поговоримо на наступних заняттях.', 'class — мітка елемента']], notes: 'Покажіть сайт fontawesome.com наживо, пошук «coffee», фільтр Free. Якщо замість іконки відображається порожній квадратик — перевірте тег link або назву класу.' },
  { type: 'iconfont', label: '18 / ІКОНКИ', section: 'Іконки', title: 'Як іконка взагалі може бути <em>шрифтом</em>?', lead: 'Шрифт — це не лише літери абетки, а таблиця векторних малюнків (гліфів). Який саме малюнок закріплено за кодом — визначає творець шрифту.', minutes: 2, notes: 'Поясніть наочно: файл шрифту — це таблиця «код символу → малюнок». В Arial за номером 0041 намальована літера A. Автори Font Awesome створили шрифт, де за кодами намальовані горнятко, серце, стрілки. Ліворуч іконка та літера ростуть абсолютно однаково, не втрачаючи чіткості.' },
  { type: 'web', demo: 'icons', label: '19 / ІКОНКИ', section: 'Іконки', title: 'Іконки на сторінці — <em>по кроках</em>', lead: 'Підключили бібліотеку через link → додали потрібні іконки в HTML → стилізували через CSS, як звичайний текст.', minutes: 3, notes: 'Головний висновок цього блоку: іконка підкоряється правилам тексту. Тому властивості color та font-size, які ми сьогодні вивчили, ідеально працюють і для оформлення іконок.' },
  { type: 'theory', label: '20 / КАСКАД', section: 'Каскад', title: 'Хто <em>переможе</em>?', lead: 'Якщо два правила змагаються за одну й ту саму властивість — перемагає нижнє. Інші властивості спокійно поєднуються.', minutes: 2, lang: 'css', file: 'style.css',
    code: 'p {\n  color: gray;\n  font-size: 18px;\n}\n\np {\n  color: navy;   /* нижче в коді — перемагає */\n}\n\n/* підсумок для p:\n   color: navy\n   font-size: 18px */',
    items: [['Нижче — головніше', 'За однакового селектора спрацьовує правило, записане пізніше за порядком у файлі.', 'source order — порядок у коді'], ['Властивості додаються', 'Властивість `font-size` з першого правила нікуди не зникла, а об\'єдналася з новим кольором.', 'cascade — каскад'], ['style="…" сильніший за файл', 'Інлайн-атрибут перебиває зовнішній файл — саме тому ми уникаємо інлайн-стилів.', 'inline styles — інлайн-стилі']], notes: 'Слово «каскад» — це перша літера у абревіатурі CSS (Cascading Style Sheets). Детальніше про вагу та специфічність селекторів поговоримо, коли вивчимо класи та id.' },
  { type: 'quiz', label: '21 / ПЕРЕВІРКА', section: 'Каскад', title: 'Яким буде <em>абзац</em>?', lead: 'Уважно проаналізуйте обидва CSS-правила.', minutes: 1, lang: 'css', file: 'style.css',
    code: 'p {\n  color: red;\n  font-size: 20px;\n}\n\np {\n  color: green;\n}', question: 'Як саме виглядатиме текст p?', choices: ['Червоний, 20px', 'Зелений, 20px', 'Зелений, базового розміру браузера'], correct: 1,
    explain: 'За властивість `color` сперечаються два правила — перемагає те, що нижче: `green`. Властивість `font-size` ніхто не перевизначав (override) — тому вона залишається `20px`.', notes: '' },
  { type: 'devtools', label: '22 / DEVTOOLS', section: 'DevTools', title: 'DevTools: <em>звідки взявся цей стиль?</em>', lead: 'F12 → Elements → Styles. Оберіть тег ліворуч, вмикайте та вимикайте властивості галочками.', minutes: 3, notes: 'Це інтерактивна копія реальної панелі Chrome DevTools. Покажіть: 1) у посилання колір body закреслений, бо в браузера є власний стиль; 2) зніміть галочку — стиль відключиться; 3) навчіть учнів завжди користуватися F12.' },
  { type: 'bugs', label: '23 / НАЛАГОДЖЕННЯ', section: 'Помилки', title: 'Чому <em>не працює</em>?', lead: 'Спочатку спробуйте пояснити причину вголос. Потім відкрийте блок виправлення.', minutes: 4, notes: 'З цими помилками на практиці зіткнеться кожен. Головний принцип: CSS ніколи не лається помилками — він просто мовчки ігнорує рядок. Тому відповіді шукаємо в DevTools.' },
  { type: 'practice', practice: 'joint', label: '24 / РАЗОМ', section: 'Практика', title: 'Разом: <em>вебсайт кав\'ярні</em>', lead: 'Каркас уже підготовлений у файлі. За ТЗ: title і контент — повторення, далі підключаємо CSS і фарбуємо крок за кроком.', minutes: 25, notes: 'Працюємо разом: VS Code ліворуч, браузер праворуч. Після кожного кроку: Ctrl+S → F5. Якщо стиль не підтягнувся — одразу відкриваємо DevTools (F12).' },
  { type: 'practice', practice: 'solo', label: '25 / САМОСТІЙНО', section: 'Практика', title: 'Самостійно: <em>улюблений фільм</em>', lead: 'Ті самі кроки, власна сторінка про фільм і темна тема. Підглядати в спільну роботу дозволяється.', minutes: 15, notes: 'Не підказуйте готовий код — ставте навідні запитання: «який селектор потрібен?», «яка властивість відповідає за фон?». Темна тема чудово закріплює розуміння різниці між color та background-color.' },
  { type: 'glossary', label: '26 / СЛОВНИК', section: 'Підсумок', title: 'Словник <em>веб-розробника</em>', lead: 'Як ці концепції називають у документації, на співбесідах і в професійній IT-команді.', minutes: 3, notes: 'Пройдіться по термінах: ви називаєте український відповідник — аудиторія хором англійський. Поясніть, що шукати відповіді в Google англійською («css inheritance») набагато ефективніше.' },
  { type: 'summary', part: 'concepts', label: '27 / ШПАРГАЛКА 1/2', section: 'Підсумок', title: 'Шпаргалка: <em>головні концепції</em>', lead: 'Квінтесенція всього уроку на одному екрані. Можна завантажити у форматі Markdown або зберегти в PDF.', minutes: 3, notes: 'Заохочуйте учнів завантажити пам\'ятку собі. Пройдіться по ключових блоках швидким оглядом.' },
  { type: 'summary', part: 'exceptions', label: '28 / ШПАРГАЛКА 2/2', section: 'Підсумок', title: 'Шпаргалка: <em>винятки та підводні камені</em>', lead: 'Саме ці нюанси найчастіше викликають помилки у домашньому завданні. Перевірте себе за чеклістом.', minutes: 2, notes: 'Запитайте кілька пунктів без підказки: «чому посилання за замовчуванням не слухає колір body?»' },
  { type: 'end', title: 'Готово', section: 'Підсумок', minutes: 1, notes: 'Домашнє завдання: сторінка кулінарного рецепта, окремий файл CSS у папці css/. Детальне ТЗ — у коментарях файлів проєкту.' },
];

const TABS = [
  { name: 'style="…"', title: 'Інлайн-стилі · inline styles', verdict: 'bad', text: 'Діє лише на один конкретний тег. Маємо 10 заголовків — доведеться 10 разів дублювати один і той самий код. HTML та оформлення перемішані.',
    files: [['index.html', 'html', '<h1 style="color: tomato;">Кав\'ярня</h1>\n<p>Свіжа кава</p>\n<h1>Меню</h1>']], html: '<h1>Кав\'ярня</h1>\n<p>Свіжа кава</p>\n<h1>Меню</h1>', css: '' },
  { name: '<style>', title: 'Внутрішні стилі · internal CSS', verdict: 'mid', text: 'Працює для всіх тегів на поточній сторінці. Але якщо на сайті 20 сторінок — на кожній доведеться тримати власну копію стилів.',
    files: [['index.html', 'html', '<head>\n  <style>\n    h1 { color: tomato; }\n    p { color: gray; }\n  </style>\n</head>\n<body>\n  <h1>Кав\'ярня</h1>\n  <p>Свіжа кава</p>\n  <h1>Меню</h1>\n</body>']], html: '<h1>Кав\'ярня</h1>\n<p>Свіжа кава</p>\n<h1>Меню</h1>', css: 'h1 { color: tomato; }\np { color: gray; }' },
  { name: '<link> + файл', title: 'Зовнішній файл · external CSS', verdict: 'good', text: 'Один спільний файл стилів на весь сайт. Змінили колір у ньому — він миттєво оновився на всіх сторінках одразу. Так робимо завжди.',
    files: [['index.html', 'html', '<head>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Кав\'ярня</h1>\n  <p>Свіжа кава</p>\n  <h1>Меню</h1>\n</body>'], ['style.css', 'css', 'h1 {\n  color: tomato;\n}\n\np {\n  color: gray;\n}']], html: '<h1>Кав\'ярня</h1>\n<p>Свіжа кава</p>\n<h1>Меню</h1>', css: 'h1 { color: tomato; }\np { color: gray; }' },
];

const ANATOMY: [string, string, string, string][] = [
  ['sel', 'Селектор', 'selector', 'КОГО стилізуємо. У цьому прикладі — всі заголовки першого рівня `h1`.'],
  ['brace', 'Фігурні дужки', 'declaration block', 'Блок оголошень: усе всередині `{ }` стосується вказаного селектора.'],
  ['prop', 'Властивість', 'property', 'ЩО саме змінюємо: колір, розмір, гарнітуру шрифту, фон…'],
  ['colon', 'Двокрапка', 'colon', 'Відокремлює назву властивості від її значення.'],
  ['val', 'Значення', 'value', 'ЯК саме змінюємо: конкретний колір `tomato`, розмір `40px`.'],
  ['semi', 'Крапка з комою', 'semicolon', 'Завершує оголошення. Якщо її пропустити — браузер не зрозуміє і наступний рядок.'],
  ['decl', 'Оголошення', 'declaration', 'Пара «властивість + значення». А вся конструкція цілком зветься правилом (rule).'],
];

const COLOR_PRESETS: [string, number, number, number][] = [
  ['tomato', 255, 99, 71],
  ['navy', 0, 0, 128],
  ['gold', 255, 215, 0],
  ['teal', 0, 128, 128],
  ['black', 0, 0, 0],
  ['white', 255, 255, 255],
  ['кава', 111, 78, 55],
];

// DevTools
const DEV_RULES = [
  { sel: 'body', decls: [['background-color', '#fdf6ec'], ['color', '#3b2f2f'], ['font-family', 'Georgia, serif']] },
  { sel: 'h1', decls: [['color', '#b5651d'], ['font-size', '44px']] },
  { sel: 'p', decls: [['line-height', '1.6']] },
  { sel: 'li', decls: [['font-style', 'italic']] },
  { sel: 'a', decls: [['color', '#b5651d'], ['text-decoration', 'none']] },
];
const DEV_UA: Record<string, [string, string][]> = {
  h1: [['font-size', '2em'], ['font-weight', 'bold']],
  h2: [['font-size', '1.5em'], ['font-weight', 'bold']],
  a: [['color', 'blue'], ['text-decoration', 'underline']],
};
const DEV_TREE: [string, number, string][] = [
  ['body', 0, '<body>'],
  ['h1', 1, '<h1>Кав\'ярня «Ранок»</h1>'],
  ['p', 1, '<p>Свіжа кава…</p>'],
  ['a', 2, '<a href="…">Instagram</a>'],
  ['h2', 1, '<h2>Меню</h2>'],
  ['ul', 1, '<ul>'],
  ['li', 2, '<li>Капучино…</li>'],
  ['img', 1, '<img src="…">'],
];
const INHERITED = ['color', 'font-family', 'font-size', 'font-style', 'font-weight', 'line-height', 'text-align'];

const BUGS = [
  { title: 'Немає крапки з комою', lang: 'css' as const, bad: 'h1 {\n  color: navy\n  font-size: 40px;\n}', good: 'h1 {\n  color: navy;\n  font-size: 40px;\n}', why: 'Без `;` браузер сприймає «navy font-size: 40px» як єдине значення властивості `color` — invalid value, обидві властивості повністю ігноруються.' },
  { title: 'Такої властивості немає', lang: 'css' as const, bad: 'p {\n  font-color: gray;\n  text-color: gray;\n}', good: 'p {\n  color: gray;\n}', why: 'Колір тексту задається просто ключовим словом `color`. Невідому властивість (unknown property) браузер мовчки пропускає (у DevTools з\'явиться жовтий значок).' },
  { title: 'Пробіл перед одиницею px', lang: 'css' as const, bad: 'h1 {\n  font-size: 40 px;\n}', good: 'h1 {\n  font-size: 40px;\n}', why: 'Число та одиниця вимірювання (unit) пишуться строго разом: `40px`. З пробілом це невалідний синтаксис, властивість не спрацює.' },
  { title: 'Стилі взагалі не підключилися', lang: 'html' as const, bad: '<!-- файл називається style.css -->\n<link rel="stylesheet" href="styles.css">', good: '<link rel="stylesheet" href="style.css">', why: 'Шлях у `href` має збігатися з фактичною назвою файлу літера в літеру. Зайва літера s у кінці — браузер повертає 404.' },
  { title: 'Посилання залишилося синім', lang: 'css' as const, bad: 'body {\n  color: white;\n  background-color: black;\n}\n/* текст білий, а посилання — синє */', good: 'body {\n  color: white;\n  background-color: black;\n}\n\na {\n  color: gold;\n}', why: 'У посилання є дефолтний синій колір із браузерних стилів (user agent stylesheet) — він сильніший за успадкований від `body`. Потрібно вказати правило окремо для селектора `a`.' },
  { title: 'Крапка перед назвою тегу', lang: 'css' as const, bad: '.h1 {\n  color: tomato;\n}', good: 'h1 {\n  color: tomato;\n}', why: 'Крапка означає селектор класу: `.h1` шукає елементи з атрибутом `class="h1"`. Для звичайного тегу використовуємо селектор типу без крапки — просто `h1`.' },
];

const PRACTICE = {
  joint: {
    caption: 'materials/joint · 25 хвилин', zip: '/materials/joint.zip', spec: '/materials/view.html?p=joint', title: 'Кав\'ярня «Ранок»', files: 'index.html · style.css · img/',
    tasks: [
      ['Вкладка', '<title>', 'каркас уже у файлі'],
      ['Контент', '<h1> <p> <img> <ul> <a>', 'урок 3'],
      ['Підключити CSS', '<link rel="stylesheet">', 'НОВЕ: link'],
      ['Фон і текст', 'background-color: …;', 'НОВЕ: колір'],
      ['Шрифт сторінки', 'font-family: …;', 'НОВЕ: успадкування'],
      ['Заголовки', 'h1, h2 { }', 'НОВЕ: групування, каскад'],
      ['Списки і посилання', 'li { } a { }', 'НОВЕ: окремий колір для a'],
      ['Перевірка', 'F12 → Styles', 'НОВЕ: DevTools'],
    ],
  },
  solo: {
    caption: 'materials/solo · 15 хвилин', zip: '/materials/solo.zip', spec: '/materials/view.html?p=solo', title: 'Улюблений фільм', files: 'index.html · style.css · img/',
    tasks: [
      ['Вкладка', '<title>', 'каркас уже у файлі'],
      ['Контент', '<h1> <p> <img> <ul> <a>', 'як у кав\'ярні'],
      ['Підключити CSS', '<link rel="stylesheet">', 'як у кав\'ярні'],
      ['Темна тема', 'background-color: …;', 'темний фон — світлий текст'],
      ['Шрифт', 'font-family: …;', 'із запасним шрифтом'],
      ['Заголовки', 'h1, h2 { }', 'через кому'],
      ['Списки і посилання', 'li { } a { }', 'посилання не синє'],
      ['Бонус', 'rgb() #hex tomato', 'усі три формати'],
    ],
  },
};

const GLOSSARY: [string, string, string, string][] = [
  ['Таблиця стилів', 'stylesheet', '«стилі», «цееска»', '<link rel="stylesheet">'],
  ['Правило', 'rule / ruleset', '«правило»', 'h1 { color: red; }'],
  ['Селектор', 'selector', '«селектор»', 'h1, h2'],
  ['Селектор типу', 'type selector', '«за тегом»', 'p { }'],
  ['Оголошення', 'declaration', '«рядок стилю»', 'color: red;'],
  ['Властивість · значення', 'property · value', '«проперті», «значення»', 'font-size: 18px;'],
  ['Зовнішні · інлайн-стилі', 'external · inline CSS', '«винести у файл», «інлайн»', 'style="color: red;"'],
  ['Успадкування', 'inheritance', '«успадковується від батька»', 'body { color: navy; }'],
  ['Каскад', 'cascade · source order', '«перебиває», «перевизначити»', 'p { } … p { }'],
  ['Стилі браузера', 'user agent stylesheet', '«дефолтні стилі»', 'a { color: blue; }'],
  ['Запасний шрифт', 'fallback font', '«фолбек»', 'Georgia, serif'],
  ['Міжрядковий інтервал', 'line-height', '«лайн-хайт», «інтерліньяж»', 'line-height: 1.6;'],
  ['Контрастність', 'contrast', '«текст погано читається»', 'color: #fff;'],
  ['Веб-шрифт', 'web font · Google Fonts', '«гугл-фонтс», «підключити шрифт»', 'font-family: "Lora";'],
  ['Іконковий шрифт', 'icon font · Font Awesome', '«фонт авесом»', 'fa-star'],
  ['Інструменти розробника', 'DevTools', '«девтулзи», «інспектор»', 'F12'],
];

const SUMMARY: [string, string[]][] = [
  ['Підключення <em>external CSS</em>', ['У head: <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>.', 'href — шлях до файлу, як src у img: <code>css/style.css</code>.', 'Один файл стилів на весь сайт. Інлайн <code>style="…"</code> та <code>&lt;style&gt;</code> — не використовуємо.']],
  ['Правило <em>rule</em>', ['<code>селектор { властивість: значення; }</code>', 'Властивість і значення — через <b>двокрапку</b>, в кінці обов\'язково <b>крапка з комою</b>.', 'Коментар для пояснень: <code>/* … */</code>.']],
  ['Селектори <em>selectors</em>', ['За тегом: <code>p { }</code> — усі абзаци сторінки.', 'Група: <code>h1, h2 { }</code> — одне правило для декількох тегів.', 'Назва тегу пишеться без кутових дужок і без крапки: <code>p</code>, не <code>&lt;p&gt;</code> і не <code>.p</code>.']],
  ['Колір і фон <em>color · background</em>', ['<code>color</code> — колір тексту. <code>background-color</code> — колір фону.', 'Формати запису кольору: <code>tomato</code> <code>#ff6347</code> <code>rgb(255, 99, 71)</code>', 'Текст і фон обов\'язково мають бути контрастними.']],
  ['Шрифт <em>typography</em>', ['<code>font-family: Georgia, serif;</code> — завжди вказуємо запасний.', 'Google Fonts: <code>&lt;link&gt;</code> у head + назва шрифту у <code>font-family</code>.', 'Font Awesome: іконки — це гліфи шрифту, їх легко змінюють <code>color</code> та <code>font-size</code>.']],
  ['Успадкування та каскад <em>inheritance · cascade</em>', ['Колір і шрифт від body автоматично успадковують усі внутрішні теги.', 'Суперечка за одну властивість: перемагає <b>нижнє за порядком</b> правило. Інші властивості об\'єднуються.', 'Стиль не працює? F12 → Elements → Styles.']],
];

const EXCEPTIONS = [
  'Посилання не бере колір від body: у тегу <code>a</code> є власний синій колір за замовчуванням від браузера. Пишемо окремо <code>a { color: … }</code>.',
  'Заголовки не беруть розмір і жирність від body: у <code>h1–h6</code> є власні вбудовані стилі. Змінюємо правилом для h1, h2…',
  'Забули <code>;</code> — ламається не лише поточний рядок, а й наступне оголошення після нього.',
  'CSS не показує повідомлень про помилки: некоректна властивість чи значення просто ігнорується браузером. Шукайте причину в DevTools.',
  'Число й одиниця вимірювання пишуться разом: <code>40px</code>, не <code>40 px</code>. У <code>line-height</code> можна вказувати чистий множник: <code>1.6</code>.',
  'Назва шрифту, що містить пробіли, береться в лапки: <code>"Times New Roman"</code>.',
  'Крапка перед словом — це селектор класу: <code>.h1</code> ≠ <code>h1</code>. Для стандартного тегу крапка не потрібна.',
  'Якщо файл у підпапці: <code>href="css/style.css"</code>. Назва повинна збігатися літера в літеру.',
  'Атрибут <code>style="…"</code> в HTML сильніший за зовнішній файл стилів — саме тому ми його не використовуємо.',
  'Не бачите змін на сторінці? Збережіть файл (Ctrl+S) і оновіть сторінку в браузері (F5).',
];

const GLYPHS: [string, string, string, string][] = [
  ['A', 'Inter', 'U+0041', 'буква'],
  ['Ж', 'Inter', 'U+0416', 'буква'],
  ['7', 'Inter', 'U+0037', 'цифра'],
  ['fa-solid fa-mug-hot', 'Font Awesome', 'U+F7B6', 'іконка'],
  ['fa-solid fa-heart', 'Font Awesome', 'U+F004', 'іконка'],
  ['fa-brands fa-instagram', 'Font Awesome', 'U+F16D', 'іконка'],
];

const IF_COLORS = ['#b5651d', 'tomato', 'teal', '#7b45d6', '#2f62c9'];

// ───────── Допоміжні функції та підсвітка синтаксису
const stage = document.getElementById('stage') as HTMLElement;
interface StoreState {
  step?: number;
  answer?: number;
  tab?: number;
  r?: number;
  g?: number;
  b?: number;
  size?: number;
  color?: number;
  el?: string;
  off?: Record<string, boolean>;
  msg?: string;
  bug?: number;
  open?: Record<number, boolean>;
  remaining?: number;
  running?: boolean;
}

const store: Record<number, StoreState> = Object.create(null);
let current = 0;
let toastTimeout: NodeJS.Timeout | number;

const esc = (s: unknown): string =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[c] || c));

const state = (): StoreState => store[current] || (store[current] = { step: 0 });
const removeTags = (s: unknown): string => String(s ?? '').replace(/<[^>]*>/g, '');
const tok = (t: string, cls: string): string =>
  t ? '<span class="token ' + cls + '">' + esc(t) + '</span>' : '';

const NAMED = ['tomato', 'navy', 'gold', 'teal', 'black', 'white', 'gray', 'red', 'green', 'blue', 'orange'];

function hlVal(v: string): string {
  return v
    .split(/(rgb\([^)]*\)|"[^"]*"|#[0-9a-fA-F]{3,8}\b|\d*\.?\d+(?:px|em|%)?|[A-Za-z-]+)/)
    .map((t) => {
      if (!t) return '';
      const isColor = /^#[0-9a-fA-F]{3,8}$/.test(t) || /^rgb\(/.test(t) || NAMED.includes(t);
      if (isColor) return '<i class="sw" style="background:' + esc(t) + '"></i>' + tok(t, /^[a-z]/.test(t) && !/^rgb/.test(t) ? 'string' : 'number');
      if (/^"/.test(t)) return tok(t, 'string');
      if (/^[\d.]/.test(t)) return tok(t, 'number');
      if (/^[A-Za-z-]+$/.test(t)) return tok(t, 'string');
      return esc(t);
    })
    .join('');
}

function hlCSS(line: string): string {
  const ci = line.indexOf('/*');
  let rest = ci >= 0 ? line.slice(0, ci) : line;
  const comment = ci >= 0 ? line.slice(ci) : '';
  let html = '';
  const bi = rest.indexOf('{');
  if (bi >= 0) {
    html += tok(rest.slice(0, bi), 'keyword') + tok('{', 'operator');
    rest = rest.slice(bi + 1);
  }
  const re = /([a-z-]+)(\s*:\s*)([^;}]*)(;?)|(\})/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(rest)) !== null) {
    html += esc(rest.slice(last, m.index));
    html += m[5]
      ? tok('}', 'operator')
      : tok(m[1], 'method') + tok(m[2], 'operator') + hlVal(m[3]) + tok(m[4], 'operator');
    last = re.lastIndex;
  }
  html += esc(rest.slice(last));
  return html + tok(comment, 'comment');
}

function hlHTML(line: string): string {
  return String(line)
    .split(/(<!--.*?-->|<!--.*$|<\/?[A-Za-z!][A-Za-z0-9]*|\/?>|[a-z-]+(?==)|"[^"]*"|=)/)
    .map((t) => {
      if (!t) return '';
      if (/^<!--/.test(t)) return tok(t, 'comment');
      if (/^<\/?[A-Za-z!]/.test(t)) return tok(t, 'keyword');
      if (/^\/?>$/.test(t)) return tok(t, 'keyword');
      if (/^"/.test(t)) return tok(t, 'string');
      if (t === '=') return tok(t, 'operator');
      if (/^[a-z-]+$/.test(t)) return tok(t, 'method');
      return esc(t);
    })
    .join('');
}

const hl = (line: string, lang: 'html' | 'css'): string =>
  lang === 'html' ? hlHTML(line) : hlCSS(line);

const TAGS = /^\.?(html|head|body|title|link|style|meta|h[1-6]|p|a|img|ul|ol|li)(,\s*\.?(h[1-6]|p|a|li))*$/;

function inlineCode(t: string): string {
  t = String(t);
  let html: string;
  if (/^</.test(t)) html = hlHTML(t);
  else if (/[{:]|\/\*/.test(t)) html = hlCSS(t);
  else if (TAGS.test(t)) html = tok(t, 'keyword');
  else if (/^(color|background(-color)?|font(-[a-z]+)?|line-height|text-[a-z]+|rel|href|src|alt|class|style)$/.test(t)) {
    html = tok(t, 'method');
  } else {
    html = hlVal(t);
  }
  return '<code class="ic">' + html + '</code>';
}

function rich(text: string): string {
  const parts = String(text).split('`');
  let out = '';
  parts.forEach((part, i) => {
    if (i % 2) {
      const next = parts[i + 1] || '';
      const glue = (next.match(/^[.,:;!?)»]+/) || [''])[0];
      parts[i + 1] = next.slice(glue.length);
      out += '<span class="nw">' + inlineCode(part) + esc(glue) + '</span>';
    } else {
      out += esc(part);
    }
  });
  return out;
}

const term = (t?: string): string =>
  t ? '<span class="term"><b>термін</b>' + esc(t) + '</span>' : '';

function codeWindow(code: string, opts: { caption?: string; lang?: 'html' | 'css'; active?: number[]; dimFrom?: number } = {}): string {
  const lang = opts.lang || 'css';
  const active = opts.active || [];
  let inComment = false;

  const paint = (line: string) => {
    if (lang !== 'css') {
      if (inComment) {
        const e = line.indexOf('-->');
        if (e < 0) return tok(line, 'comment');
        inComment = false;
        return tok(line.slice(0, e + 3), 'comment') + hl(line.slice(e + 3), lang);
      }
      const o = line.lastIndexOf('<!--');
      if (o >= 0 && line.indexOf('-->', o) < 0) {
        inComment = true;
        return hl(line.slice(0, o), lang) + tok(line.slice(o), 'comment');
      }
      return hl(line, lang);
    }
    let pre = '';
    let rest = line;
    if (inComment) {
      const end = line.indexOf('*/');
      if (end < 0) return tok(line, 'comment');
      pre = tok(line.slice(0, end + 2), 'comment');
      rest = line.slice(end + 2);
      inComment = false;
    }
    const open = rest.lastIndexOf('/*');
    if (open >= 0 && rest.indexOf('*/', open) < 0) inComment = true;
    return pre + hlCSS(rest);
  };

  return (
    '<div class="code-window"><div class="code-head"><span><span class="dots"><i></i><i></i><i></i></span></span><span>' +
    esc(opts.caption || (lang === 'html' ? 'index.html' : 'style.css')) +
    '</span></div><pre class="code-pre">' +
    String(code)
      .split('\n')
      .map(
        (line, i) =>
          '<span class="code-line ' +
          (active.includes(i + 1) ? 'active-line' : '') +
          (opts.dimFrom && i + 1 > opts.dimFrom ? ' dim-line' : '') +
          '"><span class="line-no">' +
          (i + 1) +
          '</span><span>' +
          (line ? paint(line) : ' ') +
          '</span></span>'
      )
      .join('') +
    '</pre></div>'
  );
}

function head(s: SlideItem): string {
  return (
    '<div class="intro"><span class="tag">' +
    (s.label || '04 / CSS') +
    '</span><h2>' +
    s.title +
    '</h2><p>' +
    (s.lead || '') +
    '</p></div>'
  );
}

function pageDoc(html: string, css: string, zoom = 0.8): string {
  return (
    '<!doctype html><html><head><meta charset="utf-8"><style>html{zoom:' +
    zoom +
    '}@keyframes flash{0%,40%{box-shadow:inset 0 0 0 100vmax #c8f25a8c}100%{box-shadow:inset 0 0 0 100vmax #c8f25a00}}</style><style>' +
    css +
    '</style></head><body>' +
    html +
    '</body></html>'
  );
}

function browser(html: string, css: string, caption = 'index.html', id = '', zoom = 0.8): string {
  return (
    '<div class="browser"><div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="addr">' +
    esc(caption) +
    '</span></div><iframe class="pv" tabindex="-1"' +
    (id ? ' id="' + id + '"' : '') +
    ' title="Попередній перегляд сторінки" srcdoc="' +
    esc(pageDoc(html, css, zoom)) +
    '"></iframe></div>'
  );
}

function quiz(s: SlideItem, st: StoreState): string {
  const answered = Number.isInteger(st.answer);
  return (
    '<div class="quiz-grid"><div class="quiz-left"><div class="quiz-question">' +
    esc(s.question) +
    '</div><div class="quiz-options">' +
    (s.choices || [])
      .map(
        (c, i) =>
          '<button class="answer-option ' +
          (answered ? (i === s.correct ? 'correct' : i === st.answer ? 'wrong' : '') : '') +
          ' ' +
          (st.answer === i ? 'selected' : '') +
          '" data-action="answer" data-value="' +
          i +
          '" aria-pressed="' +
          (st.answer === i) +
          '"><b>' +
          String.fromCharCode(65 + i) +
          '</b>' +
          esc(c) +
          '</button>'
      )
      .join('') +
    '</div>' +
    (answered
      ? '<div class="feedback ' +
        (st.answer === s.correct ? '' : 'warn') +
        '">' +
        (st.answer === s.correct ? '✓ Вірно. ' : 'Не зовсім. ') +
        rich(s.explain || '') +
        '</div><button class="small-btn" data-action="reset-answer">Відповісти ще раз ↺</button>'
      : '<p class="action-hint">Оберіть варіант — з\'явиться детальний розбір.</p>') +
    '</div><div class="quiz-right">' +
    codeWindow(s.code || '', { lang: s.lang, caption: s.file }) +
    '</div></div>'
  );
}

function glyph(g: string): string {
  return g.startsWith('fa-') ? '<i class="' + g + '"></i>' : esc(g);
}

function iconfontView(st: StoreState): string {
  st.size ??= 120;
  st.color ??= 0;
  const color = IF_COLORS[st.color];
  const cards = GLYPHS.map(
    (g) =>
      '<div class="gl-card ' +
      (g[3] === 'іконка' ? 'is-icon' : '') +
      '"><div class="gl-pic">' +
      glyph(g[0]) +
      '</div><b>' +
      g[2] +
      '</b><span>' +
      g[1] +
      ' · ' +
      g[3] +
      '</span></div>'
  ).join('');

  const points = [
    ['Файл шрифту — це таблиця', 'Номер символу → малюнок. В Inter під кодом U+0041 намальовано літеру A.'],
    ['У Font Awesome — іконки', 'Під номерами намальовано горнятко, серце, логотипи. Для браузера це теж «літери».'],
    ['class обирає потрібний гліф', '`fa-mug-hot` — вказівка браузеру: «візьми символ F7B6 зі шрифту Font Awesome».'],
  ];

  return (
    '<div class="pair if-pair"><div class="pane left"><div class="pane-heading"><span>УСЕРЕДИНІ ФАЙЛУ ШРИФТУ</span><span>номер → гліф</span></div><div class="gl-cards">' +
    cards +
    '</div><div class="if-points">' +
    points
      .map(
        (x, i) =>
          '<div class="if-point"><span>' +
          (i + 1) +
          '</span><div><b>' +
          esc(x[0]) +
          '</b><p>' +
          rich(x[1]) +
          '</p></div></div>'
      )
      .join('') +
    '</div></div><div class="pane right"><div class="pane-heading"><span>ПЕРЕВІРИМО НАОЧНО</span><span>літера та іконка — одна сутність</span></div><div class="if-stage" id="ifStage" style="color:' +
    color +
    ';font-size:' +
    st.size +
    'px">A <i class="fa-solid fa-mug-hot"></i> Ж <i class="fa-solid fa-heart"></i></div><div class="if-controls"><label class="if-range"><span>font-size</span><input type="range" min="40" max="160" step="2" value="' +
    st.size +
    '" data-if="size"><b id="ifSize">' +
    st.size +
    'px</b></label><div class="if-colors"><span>color</span>' +
    IF_COLORS.map(
      (c, i) =>
        '<button class="if-color ' +
        (i === st.color ? 'on' : '') +
        '" style="background:' +
        c +
        '" data-action="if-color" data-value="' +
        i +
        '" aria-label="' +
        c +
        '"></button>'
    ).join('') +
    '</div></div><div id="ifCode">' +
    inlineCode('p { color: ' + color + '; font-size: ' + st.size + 'px; }') +
    '</div><p class="if-note">Іконка — це чистий векторний малюнок: при збільшенні вона не розмивається, так само як і шрифтові літери.</p></div></div>'
  );
}

function theoryView(s: SlideItem): string {
  return (
    '<div class="pair"><div class="pane left"><div class="pane-heading">КОД</div>' +
    codeWindow(s.code || '', { lang: s.lang, caption: s.file }) +
    (s.links
      ? '<div class="buttons site-links">' +
        s.links
          .map(
            (l, i) =>
              '<a class="' +
              (i ? 'secondary' : 'primary') +
              '" href="' +
              l[1] +
              '" target="_blank" rel="noopener noreferrer">' +
              esc(l[0]) +
              '</a>'
          )
          .join('') +
        '</div>'
      : '') +
    '</div><div class="pane right theory-pane"><div class="pane-heading">ГОЛОВНЕ</div>' +
    (s.items || [])
      .map(
        (x, i) =>
          '<div class="concept"><span>' +
          String(i + 1).padStart(2, '0') +
          '</span><div><h3>' +
          esc(x[0]) +
          '</h3><p>' +
          rich(x[1]) +
          '</p>' +
          term(x[2]) +
          '</div></div>'
      )
      .join('') +
    '</div></div>'
  );
}

function beforeAfter(): string {
  return (
    '<div class="pair ba-grid"><div class="pane"><div class="pane-heading"><span>Тільки HTML</span><span>так було на уроці 3</span></div>' +
    browser(PAGE, '') +
    '</div><div class="pane"><div class="pane-heading"><span class="hl">HTML + style.css</span><span>сьогодні</span></div>' +
    browser(PAGE, FINAL_CSS) +
    '</div></div>'
  );
}

function tabsView(st: StoreState): string {
  const i = st.tab || 0;
  const t = TABS[i];
  const verdictMap: Record<string, [string, string]> = {
    bad: ['✗', 'Не використовуємо'],
    mid: ['~', 'Іноді'],
    good: ['✓', 'Так робимо завжди'],
  };
  const verdict = verdictMap[t.verdict];

  return (
    '<div class="tabs-row">' +
    TABS.map(
      (x, k) =>
        '<button class="tab-btn ' +
        (k === i ? 'active' : '') +
        '" data-action="tab" data-value="' +
        k +
        '"><span>' +
        (k + 1) +
        '</span>' +
        esc(x.name) +
        '</button>'
    ).join('') +
    '</div><div class="pair tabs-pair"><div class="pane left"><div class="pane-heading"><span>' +
    esc(t.title.toUpperCase()) +
    '</span><span>' +
    t.files.length +
    (t.files.length > 1 ? ' ФАЙЛИ' : ' ФАЙЛ') +
    '</span></div>' +
    t.files
      .map((f) => codeWindow(f[2], { caption: f[0], lang: f[1] as 'html' | 'css' }))
      .join('') +
    '</div><div class="pane right"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span></div>' +
    browser(t.html, t.css) +
    '<div class="verdict ' +
    t.verdict +
    '"><b>' +
    verdict[0] +
    ' ' +
    verdict[1] +
    '</b><p>' +
    rich(t.text) +
    '</p></div></div></div>'
  );
}

function anatomyView(st: StoreState): string {
  const idx = Math.max(0, Math.min(st.step || 0, ANATOMY.length - 1));
  const part = ANATOMY[idx][0];
  const P = (name: string, text: string, cls: string) =>
    '<span class="ana token ' + cls + ' ' + (name === part ? 'on' : '') + '">' + text + '</span>';
  const decl = (prop: string, val: string) =>
    '<span class="ana-decl ' +
    (part === 'decl' ? 'on' : '') +
    '">' +
    P('prop', prop, 'method') +
    P('colon', ':', 'operator') +
    ' ' +
    P('val', val, /^\d/.test(val) ? 'number' : 'string') +
    P('semi', ';', 'operator') +
    '</span>';
  const code =
    P('sel', 'h1', 'keyword') +
    ' ' +
    P('brace', '{', 'operator') +
    '\n  ' +
    decl('color', 'tomato') +
    '\n  ' +
    decl('font-size', '40px') +
    '\n' +
    P('brace', '}', 'operator');

  return (
    '<div class="pair ana-pair"><div class="pane left"><div class="pane-heading"><span>style.css</span><span class="caps">' +
    (idx + 1) +
    ' / ' +
    ANATOMY.length +
    '</span></div><pre class="ana-code part-' +
    part +
    '">' +
    code +
    '</pre><div class="buttons"><button class="secondary" data-action="prev-step" ' +
    (idx === 0 ? 'disabled' : '') +
    '>← Крок назад</button><button class="primary" data-action="next-step" ' +
    (idx === ANATOMY.length - 1 ? 'disabled' : '') +
    '>Наступний крок →</button><button class="secondary" data-action="reset-step" title="Спочатку">↺</button><span class="key-hint">Пробіл — крок · ← → — слайди</span></div></div><div class="pane right ana-list"><div class="pane-heading"><span>ЧАСТИНИ ПРАВИЛА</span><span>українською · in English</span></div>' +
    ANATOMY.map(
      (x, k) =>
        '<button class="ana-row ' +
        (k === idx ? 'on' : '') +
        (k < idx ? ' seen' : '') +
        '" data-action="set-step" data-value="' +
        k +
        '"><span class="ana-n">' +
        String(k + 1).padStart(2, '0') +
        '</span><span class="ana-name"><b>' +
        esc(x[1]) +
        '</b><em>' +
        esc(x[2]) +
        '</em></span><span class="ana-desc">' +
        rich(x[3]) +
        '</span></button>'
    ).join('') +
    '</div></div>'
  );
}

function liveView(kind: 'color' | 'font' | 'inherit', st: StoreState): string {
  const d = LIVE[kind];
  const total = d.rules.length;
  const idx = Math.max(0, Math.min(st.step || 0, total));
  const shown = d.rules.slice(0, idx).map((r) => r[0]);
  const cur = idx ? d.rules[idx - 1] : null;
  const flashSel = cur ? cur[3] || (cur[0].includes('{') ? cur[0].split('{')[0].trim() : '') : '';
  const applied = d.base + shown.join('\n') + (flashSel ? '\n' + flashSel + '{animation:flash 1.6s ease-out 1}' : '');

  const added = cur
    ? '<pre class="add-code">' +
      cur[0]
        .split('\n')
        .map((l) => '<span class="add-line">' + (hlCSS(l) || ' ') + '</span>')
        .join('') +
      '</pre>'
    : '<div class="add-empty">Поки нічого не додано. Тисніть «Наступний крок» →</div>';

  const text = cur ? rich(cur[1]) : esc(d.start);
  const steps = d.rules
    .map((r, k) => {
      const first = r[0].split('\n')[0].replace(/\s*\{$/, '');
      return (
        '<button class="lv-step ' +
        (k + 1 === idx ? 'on' : k + 1 < idx ? 'done' : '') +
        '" data-action="set-step" data-value="' +
        (k + 1) +
        '"><span>' +
        (k + 1) +
        '</span><b>' +
        esc(first.startsWith('/*') ? 'a' : first) +
        '</b></button>'
      );
    })
    .join('');

  return (
    '<div class="pair live-pair"><div class="pane left"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span>index.html</span></div>' +
    browser(PAGE, applied, 'index.html', '', 0.95) +
    '</div><div class="pane right"><div class="pane-heading"><span>ДОДАЄМО</span><span class="caps">КРОК ' +
    idx +
    ' / ' +
    total +
    '</span></div><div class="add-card">' +
    added +
    '<p class="add-text">' +
    text +
    '</p>' +
    (cur ? term(cur[2]) : '') +
    '</div><div class="lv-steps">' +
    steps +
    '</div><div class="buttons"><button class="secondary" data-action="prev-step" ' +
    (idx === 0 ? 'disabled' : '') +
    '>← Крок назад</button><button class="primary" data-action="next-step" ' +
    (idx === total ? 'disabled' : '') +
    '>Наступний крок →</button><button class="secondary" data-action="reset-step" title="Спочатку">↺</button><span class="key-hint">Пробіл — крок</span></div></div></div>'
  );
}

function webView(kind: 'gfonts' | 'icons', st: StoreState): string {
  const d = WEB[kind];
  const total = d.steps.length - 1;
  const idx = Math.max(0, Math.min(st.step || 0, total));
  const t = d.steps[idx];
  const css = d.base + (t.css.includes('{') ? '\n' + t.css : '');
  const page = (t.load ? '<link rel="stylesheet" href="' + t.load + '">' : '') + d.page(idx);
  const label = rich(t.label) + term(t.term);

  return (
    '<div class="web-grid web-' +
    kind +
    '"><div class="pane web-html">' +
    codeWindow(t.html, { lang: 'html', caption: 'index.html', active: t.hh || [] }) +
    '</div><div class="pane web-css">' +
    codeWindow(t.css, { caption: 'style.css', active: t.ch || [] }) +
    '</div><div class="pane web-result"><div class="pane-heading"><span>РЕЗУЛЬТАТ</span><span class="caps">КРОК ' +
    idx +
    ' / ' +
    total +
    '</span></div><div class="mem-step">' +
    label +
    '</div>' +
    browser(page, css, 'index.html', '', 0.95) +
    '<div class="buttons"><button class="secondary" data-action="prev-step" ' +
    (idx === 0 ? 'disabled' : '') +
    '>← Крок назад</button><button class="primary" data-action="next-step" ' +
    (idx === total ? 'disabled' : '') +
    '>Наступний крок →</button><button class="secondary" data-action="reset-step" title="Спочатку">↺</button></div></div></div>'
  );
}

const liveSteps = (s: SlideItem): number => {
  if (s.type === 'live' && (s.demo === 'color' || s.demo === 'font' || s.demo === 'inherit')) {
    return LIVE[s.demo].rules.length;
  }
  if (s.type === 'web' && (s.demo === 'gfonts' || s.demo === 'icons')) {
    return WEB[s.demo].steps.length - 1;
  }
  if (s.type === 'anatomy') {
    return ANATOMY.length - 1;
  }
  return 0;
};

const hex2 = (n: number | string): string => Number(n).toString(16).padStart(2, '0');

function colorView(st: StoreState): string {
  if (st.r === undefined) Object.assign(st, { r: 255, g: 99, b: 71 });
  const slider = (k: 'r' | 'g' | 'b', label: string) =>
    '<label class="mx-row mx-' +
    k +
    '"><span>' +
    label +
    '</span><input type="range" min="0" max="255" value="' +
    st[k] +
    '" data-ch="' +
    k +
    '" aria-label="' +
    label +
    '"><output id="mx-' +
    k +
    '">' +
    st[k] +
    '</output></label>';

  return (
    '<div class="pair color-pair"><div class="pane left"><div class="pane-heading">ТРИ СПОСОБИ ЗАПИСАТИ ОДИН КОЛІР</div><div class="fmt-card"><b>Ім\'я</b><code>tomato</code><p>140 стандартизованих назв англійською мовою. Зручно для початку, проте вибір відтінків обмежений.</p></div><div class="fmt-card"><b>HEX</b><code>#ff6347</code><p>Символ # та три пари шістнадцяткових чисел: червоний · зелений · синій від 00 до ff. Так кольори експортують дизайнери (Figma).</p></div><div class="fmt-card"><b>RGB</b><code>rgb(255, 99, 71)</code><p>Конкретна інтенсивність червоного, зеленого та синього — кожне значення від 0 до 255.</p></div></div><div class="pane right"><div class="pane-heading"><span>ЗМІШУВАЧ</span><span>рухайте повзунки</span></div><div class="mx-swatch" id="mxSwatch"><span>Кав\'ярня «Ранок»</span></div>' +
    slider('r', 'Червоний') +
    slider('g', 'Зелений') +
    slider('b', 'Синій') +
    '<div class="mx-out" id="mxOut"></div><div class="mx-presets">' +
    COLOR_PRESETS.map(
      (p) =>
        '<button data-action="preset-color" data-value="' +
        p.slice(1).join(',') +
        '"><i style="background:rgb(' +
        p.slice(1).join(',') +
        ')"></i>' +
        esc(p[0]) +
        '</button>'
    ).join('') +
    '</div></div></div>'
  );
}

function paintMixer(): void {
  const st = state();
  const sw = document.getElementById('mxSwatch');
  if (!sw) return;
  const { r = 255, g = 99, b = 71 } = st;
  const hex = '#' + hex2(r) + hex2(g) + hex2(b);
  const name = COLOR_PRESETS.find((p) => p[1] === +r && p[2] === +g && p[3] === +b && /^[a-z]/.test(p[0]));
  sw.style.background = hex;
  sw.style.color = (r * 299 + g * 587 + b * 114) / 1000 > 150 ? '#22233c' : '#ffffff';
  (['r', 'g', 'b'] as const).forEach((k) => {
    const el = document.getElementById('mx-' + k);
    if (el) el.textContent = String(st[k]);
  });
  const mxOut = document.getElementById('mxOut');
  if (mxOut) {
    mxOut.innerHTML =
      '<div>' +
      hlCSS('color: rgb(' + r + ', ' + g + ', ' + b + ');') +
      '</div><div>' +
      hlCSS('color: ' + hex + ';') +
      '</div><div>' +
      (name ? hlCSS('color: ' + name[0] + ';') : '<span class="mx-noname">/* у цього відтінку немає назви */</span>') +
      '</div>';
  }
}

// DevTools
function devCSS(st: StoreState, sel: string): string {
  const off = st.off || {};
  let css = DEV_RULES.map((r, ri) => r.sel + '{' + r.decls.filter((d) => !off[ri + ':' + d[0]]).map((d) => d[0] + ':' + d[1]).join(';') + '}').join('');
  if (sel && sel !== 'body') css += sel + '{outline:2px dashed #7956f7;outline-offset:3px;background-color:#7956f71a}';
  return css;
}

function devtoolsView(st: StoreState): string {
  st.off = st.off || {};
  const sel = st.el || 'a';
  const own = DEV_RULES.map((r, ri) => ({ ...r, ri })).filter((r) => r.sel === sel);
  const ownProps = new Set(own.flatMap((r) => r.decls.filter((d) => !st.off![r.ri + ':' + d[0]]).map((d) => d[0])));
  const ua = DEV_UA[sel] || [];
  const uaProps = new Set(ua.map((d) => d[0]));

  const decl = (prop: string, val: string, ri?: number, struck?: boolean) =>
    '<label class="dt-decl ' +
    (struck ? 'struck' : '') +
    '">' +
    (ri === undefined ? '<span class="dt-nobox"></span>' : '<input type="checkbox" data-off="' + ri + ':' + prop + '" ' + (st.off![ri + ':' + prop] ? '' : 'checked') + '>') +
    '<span><span class="dt-p">' +
    esc(prop) +
    '</span>: <span class="dt-v">' +
    (/^#/.test(val) ? '<i class="sw" style="background:' + val + '"></i>' : '') +
    esc(val) +
    '</span>;</span></label>';

  let styles = '';
  own.forEach((r) => {
    styles += '<div class="dt-rule"><div class="dt-sel">' + r.sel + ' {<span class="dt-src">style.css</span></div>' + r.decls.map((d) => decl(d[0], d[1], r.ri, st.off![r.ri + ':' + d[0]])).join('') + '<div class="dt-end">}</div></div>';
  });

  if (ua.length) {
    styles += '<div class="dt-rule ua"><div class="dt-sel">' + sel + ' {<span class="dt-src">стилі браузера</span></div>' + ua.map((d) => decl(d[0], d[1], undefined, ownProps.has(d[0]))).join('') + '<div class="dt-end">}</div></div>';
  }

  if (sel !== 'body') {
    const body = DEV_RULES[0];
    const inh = body.decls.filter((d) => INHERITED.includes(d[0]));
    styles += '<div class="dt-inh">Успадковано від <b>body</b></div><div class="dt-rule"><div class="dt-sel">body {<span class="dt-src">style.css</span></div>' + inh.map((d) => decl(d[0], d[1], 0, st.off!['0:' + d[0]] || ownProps.has(d[0]) || uaProps.has(d[0]))).join('') + '<div class="dt-end">}</div></div>';
  }

  return (
    '<div class="pair dt-pair"><div class="pane left"><div class="pane-heading"><span>СТОРІНКА</span><span>обрано: &lt;' +
    esc(sel) +
    '&gt;</span></div><div class="dt-banner ' +
    (st.msg ? 'on' : '') +
    '">' +
    (st.msg || 'Клікніть по тегу в дереві Elements, зніміть галочку біля властивості — і спостерігайте за змінами.') +
    '</div>' +
    browser(PAGE, devCSS(st, sel), 'index.html', '', 1) +
    '</div><div class="pane right devtools"><div class="dt-tabs"><span class="on">Elements</span><span>Console</span><span>Sources</span></div><div class="dt-body"><div class="dt-tree">' +
    DEV_TREE.map(([t, lvl, label]) => '<button class="dt-node ' + (t === sel ? 'on' : '') + '" style="padding-left:' + (10 + lvl * 16) + 'px" data-action="dt-pick" data-value="' + t + '">' + hlHTML(label) + '</button>').join('') +
    '</div><div class="dt-styles"><div class="dt-subtabs"><span class="on">Styles</span><span>Computed</span></div>' +
    styles +
    '</div></div></div></div>'
  );
}

function bugsView(st: StoreState): string {
  st.open = st.open || {};
  const i = st.bug || 0;
  const b = BUGS[i];
  const open = st.open[i];
  const cap = b.lang === 'html' ? 'index.html' : 'style.css';

  return (
    '<div class="bugs2"><div class="bug-list">' +
    BUGS.map((x, k) => '<button class="bug-tab ' + (k === i ? 'active' : '') + ' ' + (st.open![k] ? 'done' : '') + '" data-action="bug-pick" data-value="' + k + '"><span>' + String(k + 1).padStart(2, '0') + '</span>' + esc(x.title) + '</button>').join('') +
    '</div><div class="bug-main"><div class="bug-col"><div class="caps bad-cap">✗ З ПОМИЛКОЮ</div>' +
    codeWindow(b.bad, { lang: b.lang, caption: cap }) +
    '</div>' +
    (open
      ? '<div class="bug-col"><div class="caps good-cap">✓ ВИПРАВЛЕНО</div>' + codeWindow(b.good, { lang: b.lang, caption: cap }) + '<p class="bug-why">' + rich(b.why) + '</p></div>'
      : '<div class="bug-hidden"><p>Чому цей код не працює? Спробуйте відповісти вголос.</p><button class="primary" data-action="bug" data-value="' + i + '">Показати виправлення</button></div>') +
    '</div></div>'
  );
}

function practice(s: SlideItem, st: StoreState): string {
  const p = PRACTICE[s.practice || 'joint'];
  const joint = s.practice === 'joint';
  const remaining = st.remaining ?? s.minutes * 60;

  return (
    '<div class="practice-layout"><div class="task-list"><div class="pane-heading">КРОК → ЩО ПИШЕМО → ' +
    (joint ? 'ПОВТОРЮЄМО / НОВЕ' : 'ПІДКАЗКА') +
    '<span>index.html · style.css</span></div>' +
    p.tasks
      .map(
        (x, i) =>
          '<div class="task-step pr-row"><i>' +
          String(i + 1).padStart(2, '0') +
          '</i><div class="pr-btn">' +
          esc(x[0]) +
          '</div>' +
          (/→/.test(x[1]) ? '<code class="ic">' + esc(x[1]) + '</code>' : inlineCode(x[1])) +
          '<div class="pr-ret">→ ' +
          esc(x[2]) +
          '</div></div>'
      )
      .join('') +
    '<div class="tip">У index.html уже підготовлений <b>базовий каркас</b>, усередині — <b>детальне ТЗ у коментарях</b>: що зробити, навіщо і блок «Перевірка». Код пишемо строго під кожним пунктом. <b>Знак ! + Tab не потрібен.</b></div></div><div class="task-side"><div class="goal"><span class="caps">' +
    esc(p.caption) +
    '</span><h3>' +
    esc(p.title) +
    '</h3><ol class="flow"><li>Розархівувати ZIP-архів, відкрити робочу папку у <b>VS Code</b></li><li>Відкрити файл <b>index.html</b> у браузері (подвійний клік)</li><li>Пункт ТЗ → пишемо код → <b>Ctrl+S</b> → <b>F5</b> у браузері</li></ol><div class="minutes" id="timerDisplay" role="timer">' +
    formatTime(remaining) +
    '</div><div class="buttons"><button class="primary" data-action="timer">' +
    (st.running ? 'Пауза' : 'Старт таймера') +
    '</button><button class="secondary" data-action="timer-reset">Скинути</button></div></div><div class="download"><div class="file-label">Файли для практики<small>' +
    esc(p.files) +
    '</small></div><a href="' +
    p.spec +
    '" target="_blank" rel="noopener noreferrer" class="open-link">ТЗ</a><a href="' +
    p.zip +
    '" download>↓ ZIP</a></div></div></div>'
  );
}

function summaryView(s: SlideItem): string {
  const buttons = '<div class="buttons sum-actions"><a class="primary" href="/materials/SUMMARY.md" download="SUMMARY.md">↓ Шпаргалка .md</a><button class="secondary" data-action="print">Друк / PDF</button></div>';
  if (s.part === 'exceptions') {
    return '<div class="exc-grid">' + EXCEPTIONS.map((x, i) => '<div class="exc-card"><span>' + String(i + 1).padStart(2, '0') + '</span><p>' + x + '</p></div>').join('') + '</div>' + buttons;
  }
  return '<div class="sum-grid">' + SUMMARY.map(([h, list], i) => '<div class="sum-card"><div class="sum-n">' + String(i + 1).padStart(2, '0') + '</div><h3>' + h + '</h3><ul>' + list.map((x) => '<li>' + x + '</li>').join('') + '</ul></div>').join('') + '</div>' + buttons;
}

function glossaryView(): string {
  return '<div class="gl-grid">' + GLOSSARY.map((g) => '<div class="gl-row"><div class="gl-ru"><b>' + esc(g[0]) + '</b><em>' + esc(g[1]) + '</em></div><span class="gl-say">' + esc(g[2]) + '</span>' + (g[3] === 'F12' ? '<code class="ic"><span class="token keyword">F12</span></code>' : inlineCode(g[3])) + '</div>').join('') + '</div>';
}

function cover(): string {
  return (
    '<div class="cover-grid"><div class="cover-copy"><div class="overline"><i></i> HTML &amp; CSS <b></b> УРОК 4</div><h1>Один файл.<br><span>Весь стиль сайту.</span></h1><p>Підключаємо CSS і надаємо сторінці колір, фон та шрифти — без жодної правки розмітки HTML.</p><div class="pills"><span>&lt;link&gt;</span><span>селектор { }</span><span>color</span><span>background-color</span><span>font-family</span></div><button class="primary" data-action="next-slide">Почати урок →</button></div><div class="cover-art"><div class="art-glow"></div><div class="art-glow two"></div><div class="art-stage"><div class="art-card cover-ba"><div class="art-heading"><span>CSS LAB / 04</span><span>до → після</span></div><div class="cv-split"><div class="cv-page plain"><b>Кав\'ярня «Ранок»</b><span>Свіжа кава та випічка</span><span>• Капучино — 180 грн</span><u>Instagram</u></div><div class="cv-page styled"><b>Кав\'ярня «Ранок»</b><span>Свіжа кава та випічка</span><span>• Капучино — 180 грн</span><em>Instagram</em></div></div><div class="art-input">' +
    hlCSS('h1 { color: #6f4e37; font-family: Georgia; }') +
    '</div></div></div></div></div>'
  );
}

function finish(): string {
  return (
    '<div class="closing"><div class="closing-mark">{ }</div><span class="tag green">УРОК 4 / ГОТОВО</span><h1>HTML — що.<br><em>CSS — як.</em></h1><p>Файл стилів підключаємо через link. Правило: селектор, властивість, значення. Колір, фон і шрифт від body успадковують усі нащадки — крім тих елементів, у яких задано власний стиль.</p><div class="end-tags"><span>&lt;link rel="stylesheet"&gt;</span><span>color · background-color</span><span>font-family</span><span>нижнє перемагає</span></div><div class="buttons" style="justify-content:center"><a class="primary" href="/materials/homework.zip" download="homework.zip">↓ Домашнє завдання</a><a class="secondary" href="/materials/view.html?p=homework" target="_blank" rel="noopener noreferrer">ТЗ домашки</a><a class="secondary" href="/materials/SUMMARY.md" download="SUMMARY.md">↓ Шпаргалка</a></div><p class="lesson-note">Далі: блокова модель — margin, padding, border.</p></div>'
  );
}

function formatTime(t: number): string {
  return String(Math.floor(t / 60)).padStart(2, '0') + ':' + String(t % 60).padStart(2, '0');
}

function toggleTimer(): void {
  const st = state();
  st.remaining ??= slides[current].minutes * 60;
  st.running = !st.running;
  render(false);
}

setInterval(() => {
  Object.keys(store).forEach((k) => {
    const st = store[Number(k)];
    if (!st.running) return;
    if (st.remaining !== undefined && st.remaining > 0) st.remaining--;
    if (st.remaining === 0) {
      st.running = false;
      if (Number(k) === current) {
        render(false);
        notify('Час практики завершився!');
      }
    }
    if (Number(k) === current && st.remaining !== undefined) {
      const el = document.getElementById('timerDisplay');
      if (el) el.textContent = formatTime(st.remaining);
    }
  });
}, 1000);

function render(isNavigation: boolean): void {
  const s = slides[current];
  const st = state();
  let content = '';

  switch (s.type) {
    case 'cover': content = cover(); break;
    case 'quiz': content = head(s) + quiz(s, st); break;
    case 'theory': content = head(s) + theoryView(s); break;
    case 'iconfont': content = head(s) + iconfontView(st); break;
    case 'beforeafter': content = head(s) + beforeAfter(); break;
    case 'tabs': content = head(s) + tabsView(st); break;
    case 'anatomy': content = head(s) + anatomyView(st); break;
    case 'live': content = head(s) + liveView(s.demo as 'color' | 'font' | 'inherit', st); break;
    case 'web': content = head(s) + webView(s.demo as 'gfonts' | 'icons', st); break;
    case 'color': content = head(s) + colorView(st); break;
    case 'devtools': content = head(s) + devtoolsView(st); break;
    case 'bugs': content = head(s) + bugsView(st); break;
    case 'practice': content = head(s) + practice(s, st); break;
    case 'summary': content = head(s) + summaryView(s); break;
    case 'glossary': content = head(s) + glossaryView(); break;
    case 'end': content = finish(); break;
  }

  stage.innerHTML =
    '<section class="slide active ' +
    (isNavigation ? '' : 'instant') +
    ' ' +
    (s.type === 'cover' ? 'cover' : '') +
    ' type-' +
    s.type +
    '" aria-label="Слайд ' +
    (current + 1) +
    ' з ' +
    slides.length +
    '">' +
    (s.type === 'cover' || s.type === 'end' ? content : '<div class="slide-content">' + content + '</div>') +
    '</section>';

  if (s.type === 'color') paintMixer();
  stage.querySelectorAll('.sum-card code, .exc-card code').forEach((c) => {
    c.outerHTML = inlineCode(c.textContent || '');
  });
  fitCode();
  fitPreviews();

  const secTitle = document.getElementById('sectionTitle');
  if (secTitle) secTitle.textContent = s.section;
  const curTitle = document.getElementById('currentTitle');
  if (curTitle) curTitle.textContent = removeTags(s.title);
  const slideCounter = document.getElementById('slideCounter');
  if (slideCounter) slideCounter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');

  const segments = document.getElementById('segments');
  if (segments) {
    segments.innerHTML = slides
      .map((_, i) => '<i class="' + (i < current ? 'done' : i === current ? 'now' : '') + '"></i>')
      .join('');
  }

  const prevBtn = document.getElementById('prevBtn') as HTMLButtonElement | null;
  if (prevBtn) prevBtn.disabled = current === 0;
  const nextBtn = document.getElementById('nextBtn') as HTMLButtonElement | null;
  if (nextBtn) nextBtn.disabled = current === slides.length - 1;

  document.querySelectorAll('[data-slide]').forEach((b, i) => {
    b.classList.toggle('active', i === current);
    b.setAttribute('aria-current', i === current ? 'page' : 'false');
  });

  const notesContent = document.getElementById('notesContent');
  if (notesContent) {
    notesContent.innerHTML =
      '<h3>' +
      esc(removeTags(s.title)) +
      '</h3><p>' +
      esc(s.notes || '') +
      '</p><p><b>План на слайд:</b> ' +
      s.minutes +
      ' хв.</p>';
  }
}

function fitCode(): void {
  const fits = (pre: HTMLElement) => {
    if (pre.scrollHeight > pre.clientHeight + 1) return false;
    if (pre.closest('.web-html')) return true;
    const lines = pre.querySelectorAll('.code-line');
    if (!lines.length) return pre.scrollWidth <= pre.clientWidth + 1;
    let widest = 0;
    lines.forEach((l) => {
      const first = l.firstElementChild as HTMLElement;
      const last = l.lastElementChild as HTMLElement;
      if (first && last) widest = Math.max(widest, first.offsetWidth + last.offsetWidth);
    });
    return widest <= pre.clientWidth - 48;
  };

  stage.querySelectorAll<HTMLElement>('.code-pre, .ana-code, .add-code').forEach((pre) => {
    const max = pre.classList.contains('ana-code')
      ? 104
      : pre.classList.contains('add-code')
        ? 40
        : pre.closest('.quiz-right, .bug-col')
          ? 46
          : 40;
    let lo = 18;
    let hi = max;
    pre.style.overflow = '';
    pre.style.fontSize = hi + 'px';

    if (!fits(pre)) {
      while (hi - lo > 0.5) {
        const mid = (lo + hi) / 2;
        pre.style.fontSize = mid + 'px';
        if (fits(pre)) lo = mid;
        else hi = mid;
      }
      pre.style.fontSize = lo + 'px';
    }

    if (!fits(pre)) {
      pre.style.overflow = 'auto';
      const act = pre.querySelector<HTMLElement>('.active-line');
      if (act) pre.scrollTop = Math.max(0, act.offsetTop - pre.clientHeight / 3);
    }
  });
}

function fitPreviews(): void {
  stage.querySelectorAll<HTMLIFrameElement>('.pv').forEach((f) => {
    const apply = () => {
      try {
        const d = f.contentDocument;
        if (!d || !d.documentElement) return;
        d.documentElement.style.zoom = String(Math.max(1.4, Math.min(2.1, f.clientHeight / 300)));
      } catch (e) {
        // Ignore cross-origin preview issues if any
      }
    };
    f.addEventListener('load', apply);
    apply();
  });
}

let fitTimer: NodeJS.Timeout | number;
window.addEventListener('resize', () => {
  clearTimeout(fitTimer);
  fitTimer = setTimeout(() => {
    fitCode();
    fitPreviews();
  }, 80);
});

if (document.fonts) {
  document.fonts.ready.then(fitCode);
}

function fromHash(): number {
  const h = Number(location.hash.replace('#', ''));
  return Number.isInteger(h) && h >= 1 && h <= slides.length ? h - 1 : 0;
}

function go(i: number, push = true): void {
  current = Math.max(0, Math.min(slides.length - 1, i));
  if (push && location.hash !== '#' + (current + 1)) {
    history.replaceState(null, '', '#' + (current + 1));
  }
  render(true);
}

function closeOverlays(): void {
  const outline = document.getElementById('outlineOverlay');
  if (outline) outline.hidden = true;
  const notes = document.getElementById('notesOverlay');
  if (notes) notes.hidden = true;
}

function toggleOverlay(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const open = el.hidden;
  closeOverlays();
  el.hidden = !open;
  if (open) el.querySelector<HTMLButtonElement>('button')?.focus();
}

function notify(msg: string): void {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => el.classList.remove('visible'), 2100);
}

function stepBy(delta: number): void {
  const st = state();
  const max = liveSteps(slides[current]);
  st.step = Math.max(0, Math.min(max, (st.step || 0) + delta));
  render(false);
}

// Делегування подій stage
stage.addEventListener('click', (e) => {
  const node = (e.target as HTMLElement).closest<HTMLElement>('[data-action]');
  if (!node) return;
  node.blur();
  const action = node.dataset.action;
  const st = state();
  const v = node.dataset.value;

  if (action === 'next-slide') { go(current + 1); return; }
  if (action === 'answer' && v !== undefined) { st.answer = Number(v); render(false); return; }
  if (action === 'reset-answer') { delete st.answer; render(false); return; }
  if (action === 'timer') { toggleTimer(); return; }
  if (action === 'timer-reset') { st.remaining = slides[current].minutes * 60; st.running = false; render(false); return; }
  if (action === 'reset-step') { st.step = 0; render(false); return; }
  if (action === 'prev-step') { stepBy(-1); return; }
  if (action === 'next-step') { stepBy(1); return; }
  if (action === 'set-step' && v !== undefined) { st.step = Number(v); render(false); return; }
  if (action === 'tab' && v !== undefined) { st.tab = Number(v); render(false); return; }
  if (action === 'preset-color' && v !== undefined) {
    const [r, g, b] = v.split(',').map(Number);
    Object.assign(st, { r, g, b });
    (['r', 'g', 'b'] as const).forEach((k) => {
      const input = stage.querySelector<HTMLInputElement>('[data-ch="' + k + '"]');
      if (input) input.value = String(st[k]);
    });
    paintMixer();
    return;
  }
  if (action === 'dt-pick' && v !== undefined) {
    st.el = v;
    st.msg = 'Обрано тег ' + inlineCode('<' + v + '>') + ' — праворуч показані всі стилі, що на нього діють.';
    render(false);
    return;
  }
  if (action === 'bug' && v !== undefined) {
    st.open = st.open || {};
    st.open[Number(v)] = true;
    render(false);
    return;
  }
  if (action === 'bug-pick' && v !== undefined) {
    st.bug = Number(v);
    render(false);
    return;
  }
  if (action === 'if-color' && v !== undefined) {
    st.color = Number(v);
    render(false);
    return;
  }
  if (action === 'print') {
    window.print();
  }
});

stage.addEventListener('input', (e) => {
  const st = state();
  const t = e.target as HTMLInputElement;
  if (t.dataset.ch) {
    st[t.dataset.ch as 'r' | 'g' | 'b'] = Number(t.value);
    paintMixer();
    return;
  }
  if (t.dataset.if === 'size') {
    st.size = Number(t.value);
    const c = IF_COLORS[st.color ?? 0];
    const ifStage = document.getElementById('ifStage');
    if (ifStage) ifStage.style.fontSize = st.size + 'px';
    const ifSize = document.getElementById('ifSize');
    if (ifSize) ifSize.textContent = st.size + 'px';
    const ifCode = document.getElementById('ifCode');
    if (ifCode) ifCode.innerHTML = inlineCode('p { color: ' + c + '; font-size: ' + st.size + 'px; }');
  }
});

stage.addEventListener('change', (e) => {
  const t = e.target as HTMLInputElement;
  if (t.dataset.off) {
    const st = state();
    st.off = st.off || {};
    st.off[t.dataset.off] = !t.checked;
    const [ri, prop] = t.dataset.off.split(':');
    const rule = DEV_RULES[Number(ri)];
    const val = rule.decls.find((d) => d[0] === prop)?.[1] || '';
    st.msg =
      (t.checked ? '✓ Увімкнули ' : '✕ Вимкнули ') +
      inlineCode(prop + ': ' + val + ';') +
      ' у правилі ' +
      inlineCode(rule.sel + ' { }') +
      (t.checked ? '' : ' — що саме змінилося на сторінці?');
    render(false);
  }
});

// Кнопки навігації
document.getElementById('prevBtn')?.addEventListener('click', () => go(current - 1));
document.getElementById('nextBtn')?.addEventListener('click', () => go(current + 1));
document.getElementById('outlineBtn')?.addEventListener('click', () => toggleOverlay('outlineOverlay'));
document.getElementById('notesBtn')?.addEventListener('click', () => toggleOverlay('notesOverlay'));

function setThemeLabel(): void {
  const light = document.body.classList.contains('light');
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.innerHTML = light ? '<span>☾</span>Темна' : '<span>☀</span>Світла';
}

function toggleTheme(): void {
  document.body.classList.toggle('light');
  try {
    localStorage.setItem('css-lab-theme-v6', document.body.classList.contains('light') ? 'light' : 'dark');
  } catch (e) {
    //
  }
  setThemeLabel();
}

document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
document.getElementById('themeToggle')?.addEventListener('click', (e) => {
  (e.currentTarget as HTMLElement).blur();
  toggleTheme();
});

document.getElementById('fullscreenBtn')?.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen?.().catch(() => {});
  } else {
    document.documentElement.requestFullscreen?.().catch(() => {});
  }
});

document.querySelectorAll('[data-close]').forEach((n) => n.addEventListener('click', closeOverlays));

// Зміст
const outlineList = document.getElementById('outlineList');
if (outlineList) {
  outlineList.innerHTML = slides
    .map(
      (s, i) =>
        '<button type="button" data-slide="' +
        i +
        '"><strong>' +
        String(i + 1).padStart(2, '0') +
        '</strong><span>' +
        esc(removeTags(s.title)) +
        '</span></button>'
    )
    .join('');

  outlineList.addEventListener('click', (e) => {
    const n = (e.target as HTMLElement).closest<HTMLElement>('[data-slide]');
    if (n && n.dataset.slide !== undefined) {
      closeOverlays();
      go(Number(n.dataset.slide));
    }
  });
}

window.addEventListener('hashchange', () => {
  const next = fromHash();
  if (next !== current) go(next, false);
});

// Гарячі клавіші
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeOverlays();
    return;
  }
  const outline = document.getElementById('outlineOverlay');
  const notes = document.getElementById('notesOverlay');
  if ((outline && !outline.hidden) || (notes && !notes.hidden)) return;

  const target = e.target as HTMLElement | null;
  const typing =
    target &&
    (target.tagName === 'TEXTAREA' ||
      target.isContentEditable ||
      (target.tagName === 'INPUT' && /^(text|search|email|number)$/.test((target as HTMLInputElement).type)));
  if (typing) return;

  const s = slides[current];
  if ((s.type === 'live' || s.type === 'anatomy') && (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown')) {
    e.preventDefault();
    stepBy(1);
    return;
  }
  if ((s.type === 'live' || s.type === 'anatomy') && e.key === 'ArrowUp') {
    e.preventDefault();
    stepBy(-1);
    return;
  }
  if (e.key === 'ArrowRight' || e.key === 'PageDown') {
    e.preventDefault();
    go(current + 1);
    return;
  }
  if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    go(current - 1);
    return;
  }
  if (e.key === 'Home') {
    e.preventDefault();
    go(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    go(slides.length - 1);
  } else if (e.key.toLowerCase() === 'g') {
    toggleOverlay('outlineOverlay');
  } else if (e.key.toLowerCase() === 'n') {
    toggleOverlay('notesOverlay');
  } else if (e.key.toLowerCase() === 't') {
    toggleTheme();
  } else if (e.key.toLowerCase() === 'f') {
    const fsBtn = document.getElementById('fullscreenBtn');
    if (fsBtn) fsBtn.click();
  }
}, true);

// Початкова тема
try {
  if (localStorage.getItem('css-lab-theme-v6') === 'dark') {
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
  }
} catch (e) {
  document.body.classList.add('light');
}
setThemeLabel();

// Масштабування полотна 1920×1080 під будь-який розмір вікна браузера
const deck = document.getElementById('deck');
function scaleDeck(): void {
  if (deck) {
    deck.style.setProperty('--s', String(Math.min(window.innerWidth / 1920, window.innerHeight / 1080)));
  }
}
scaleDeck();
window.addEventListener('resize', scaleDeck);

// HUD ховається за відсутності активності миші
const hud = document.getElementById('hud');
let hudTimer: NodeJS.Timeout | number;
window.addEventListener('mousemove', () => {
  if (!hud) return;
  hud.classList.add('visible');
  clearTimeout(hudTimer);
  hudTimer = setTimeout(() => {
    if (!hud.matches(':hover')) hud.classList.remove('visible');
  }, 2500);
});

// Запуск презентації
if (!location.hash) {
  history.replaceState(null, '', '#1');
}
current = fromHash();
render(true);
