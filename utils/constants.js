/**
 * @const initialProjects - массив объектов с данными о проекте
 * @type {Array}
 */
export const initialProjects = [
  {
    name: 'Любимовка',
    link: 'https://github.com/SergeyKazarinov/Lubimovka',
    description: 'Фестиваль молодой драматургии Любимовка - это независимый некоммерческий коллективный проект российских драматургов. Проект создавался в команде из 6 Frontend-разработчиков',
    stack: [
      'HTML', 
      'CCS3 (Flexbox Layout, Grid Layout, Animation, keyframes)', 
      'BEM', 
      'BEM Nested', 
      'JS', 
      'Github (Pull Request)', 
      'Asana', 
      'Figma'],
    scrin: './Images/Lubimovka.JPG',
  }, 
  {
    name: 'Mesto',
    link: 'https://github.com/SergeyKazarinov/mesto',
    description: 'Это упрощенный аналог социальной сети "Instagram". В проекте реализован функционал с API удаленного back-end сервера в части создания карточек, удаления карточек, установки "лайков", редактирования данных пользователя, смена аватар пользователя, с динамическим отражением измененных данных на странице пользователя.',
    stack: [
      'HTML', 
      'CCS3 (Flexbox Layout, Grid Layout, Adaptive Layout, Animation)', 
      'BEM', 
      'BEM Nested', 
      'JS', 
      'OOP', 
      'Node.js', 
      'Webpack', 
      'API', 
      'Git', 
      'GitHub Pages', 
      'Figma'],
    scrin: './Images/Mesto.JPG',
  },
  {
    name: 'Путешествие по России',
    link: 'https://github.com/SergeyKazarinov/russian-travel',
    description: 'Это адаптивный сайт на Flexbox и Grid Layout, который будет корректно отображаться и на компьютере, и на телефоне.',
    stack: [
      'HTML', 
      'CCS3 (Flexbox Layout, Grid Layout, Adaptive Layout)', 
      'BEM', 
      'BEM Nested', 
      'Figma'],
    scrin: './Images/RussianTravel.JPG',
  },
  {
    name: 'Начать учиться',
    link: 'https://github.com/SergeyKazarinov/how-to-learn',
    description: 'Это типовой одностраничный сайт. В проекте использован: Flexbox, методология БЭМ, Nested BEM, Inline frame и видео-теги, анимация и keyframes.',
    stack: [
      'HTML', 
      'CCS3 (Flexbox Layout, Animation, Keyframes, Inline frame)', 
      'BEM', 
      'BEM Nested'],
    scrin: './Images/HowToLearn.JPG',
  },
];

/**
 * @const hardSkills - массив hardCkills
 * @type {Array}
 */
export const hardSkills = [
  'HTML',
  'CSS3',
  'Sass',
  'JavaScript',
  'OOP',
  'Node.js',
  'React',
  'Webpack',
  'Git',
  'Figma',
  'Api',
  'BEM',
  'JSON',
  'Pixel Perfect',
]

/**
 * @const validConfig                       - объект данных для валидации формы
 * @property {string} formSelector          - CSS-класс формы
 * @property {string} inputSelector         - CSS-класс инпута
 * @property {string} submitButtonSelector  - CSS-класс кнопки отправки формы
 * @property {string} inactiveButtonClass   - CSS-класс для деактивации кнопки
 * @property {string} inputErrorClass       - CSS-класс для добавления свойст невалидности инпута
 * @property {string} errorClass            - CSS-класс для вывода сообщения ошибки
 */
export const validConfiguration = {
  formSelector: 'form',
  inputSelector: 'form__input',
  submitButtonSelector: 'button_type_submit',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorMessage: 'form__input-error_active',
};

/**
 * @const preloader - DOM-элемент загрузки страницы
 * @type {DOMElement}
 */
export const preloader = document.querySelector('.preloader');

/**
 * @const formContact - форма для отравки сообщения
 * @type {DOMElement}
 */
export const formContact = document.querySelector('.contact__form');

/**
 * @const header - блок header
 * @type {HTMLElement}
 */
export const header = document.querySelector('.header');

/**
  * @const lettersHeader - элементы span, буквы заголовка шапки
  * @type {HTMLElement}
  */
export const lettersHeader = document.querySelectorAll('.header__title-item');

/**
  * @const projectTemplate - Шаблон для проекта
  * @type {HTMLElement}
  */
export const projectTemplate = document.querySelector('#project').content.querySelector('.project__item');

/**
  * @const hardSkillsTemplate - Шаблон для hardSkills
  * @type {HTMLElement}
  */
export const hardSkillsTemplate = document.querySelector('#hardSkills').content.querySelector('.about__item');

/**
  * @const projectListSelector - селектор контейнера для вставки проекта в список проектов
  * @type {string}
  */
export const projectListSelector = 'project__list';

/**
  * @const hardSkillsListSelector - селектор контейнера для вставки hardSkills в список
  * @type {string}
  */
export const hardSkillsListSelector = 'about__list';


/**
  * @const aboutDescriptionSelector - селектор блока текса с описанием
  * @type {string}
  */
export const aboutDescriptionSelector = 'about__description';

/**
  * @const submitButton - кнопка отправки сообщения
  * @type {DONElement}
  */
export const submitButton = document.querySelector('.button_type_submit');
