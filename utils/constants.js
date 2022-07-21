/**
 * @const initialProjects - массив объектов с данными о проекте
 * @type {Array}
 */
export const initialProjects = [
  {
    name: 'Любимовка',
    link: 'https://github.com/SergeyKazarinov/Lubimovka',
    description: 'Фестиваль молодой драматургии Любимовка - это независимый некоммерческий коллективный проект российских драматургов. Проект создавался в команде из 6 Frontend-разработчиков',
    stack: ['HTML', 'CCS3 (Flexbox Layout, Grid Layout, Animation, keyframes)', 'BEM', 'BEM Nested', 'JS', 'Github (Pull Request)', 'Asana', 'Figma'],
    scrin: './Images/Lubimovka.JPG',
  }, 
  {
    name: 'Mesto',
    link: 'https://github.com/SergeyKazarinov/mesto',
    description: 'Это упрощенный аналог социальной сети "Instagram". В проекте реализован функционал с API удаленного back-end сервера в части создания карточек, удаления карточек, установки "лайков", редактирования данных пользователя, смена аватар пользователя, с динамическим отражением измененных данных на странице пользователя.',
    stack: ['HTML', 'CCS3 (Flexbox Layout, Grid Layout, Adaptive Layout, Animation)', 'BEM', 'BEM Nested', 'JS', 'OOP', 'Node.js', 'Webpack', 'API', 'Git', 'GitHub Pages', 'Figma'],
    scrin: './Images/Mesto.JPG',
  },
  {
    name: 'Путешествие по России',
    link: 'https://github.com/SergeyKazarinov/russian-travel',
    description: 'Это адаптивный сайт на Flexbox и Grid Layout, который будет корректно отображаться и на компьютере, и на телефоне.',
    stack: ['HTML', 'CCS3 (Flexbox Layout, Grid Layout, Adaptive Layout)', 'BEM', 'BEM Nested', 'Figma'],
    scrin: './Images/RussianTravel.JPG',
  },
  {
    name: 'Начать учиться',
    link: 'https://github.com/SergeyKazarinov/russian-travel',
    description: 'Это типовой одностраничный сайт. В проекте использован: Flexbox, методология БЭМ, Nested BEM, Inline frame и видео-теги, анимация и keyframes.',
    stack: ['HTML', 'CCS3 (Flexbox Layout, Animation, Keyframes, Inline frame)', 'BEM', 'BEM Nested'],
    scrin: './Images/HowToLearn.JPG',
  },
];

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
  * @const projectListSelector - селектор контейнера для вставки проекта в список проектов
  * @type {string}
  */
export const projectListSelector = 'project__list';

