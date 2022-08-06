import {initialProjects,
  header,
  preloader,
  lettersHeader,
  projectListSelector,
  projectTemplate,
  hardSkillsTemplate,
  aboutDescriptionSelector,
  hardSkills,
  hardSkillsListSelector,
  validConfiguration,
  formContact,
  submitButton,
} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {Project} from '../components/Project.js';
import { HardSkills } from '../components/HardSkills.js';
import { ReplaceText } from '../components/replaceText.js';
import { FormValidator } from '../components/formValidators.js';

/**
 * Событие загрузки страницы
 */
// window.addEventListener('load', () => {
//   preloader.style.display = "none";
// })

/**
 * @const formValidators - экземпляр класса для валидации форм отправки сообщения
 * @type {Class}
 */
const formValidators = new FormValidator(validConfiguration, formContact);
formValidators.enableValidation();

/**
 * Функция сборки проекта
 * @param {Array} data - массив объектов с данными проектов 
 * @returns возвращает готовый проект для вставки в HTML
 */
const createProject = (data) => {
  const projectList = new Project (data, projectTemplate);
  return projectList.generateProject();
}

/**
 * Функция сборки проекта
 * @param {Array} data - массив объектов с данными hardSkills 
 * @returns возвращает готовый проект для вставки в HTML
 */
const createHardSkills = (data) => {
  const hardSkillsList = new HardSkills (data, hardSkillsTemplate);
  return hardSkillsList.generateProject();
}

/**
 * @const projectContainerList - экземпляр класса для встави готовых проетков в DOM-узел
 */
const projectContainerList = new Section (initialProjects, createProject, projectListSelector);
projectContainerList.renderItems();


/**
 * @const projectContainerList - экземпляр класса для встави hardSkills
 */
const hardSkillsContainerList = new Section (hardSkills, createHardSkills, hardSkillsListSelector);
hardSkillsContainerList.renderItems();

/**
 * Эффект дыма для букв заголовка шапки
 */
for(let i = 0; i<lettersHeader.length; i++) {
  lettersHeader[i].addEventListener('mouseover', () => {
    lettersHeader[i].classList.add('header__title-item_active')

    setTimeout(() => {
      lettersHeader[i].classList.remove('header__title-item_active');
    }, 2000);
  })
}

/**
 * Плавная прокрутка по якорным сслыкам
 */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth', 
      block: 'start'
    });
  })
}

/**
 * событие прокручивания страницы для преобразования блока header
 */

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
  // if (!window.scrollY > 0) {
  //   document.addEventListener('scroll', activeAnimationText);
  // };
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
});

// Анимация текста в секции about
/*
const animationText = new ReplaceText (aboutDescriptionSelector);

animationText.replaceText();

const animation = anime.timeline({
  targets : `.${aboutDescriptionSelector} span`,
  easeing : 'easeInOutExpo',
  loop : false,
});



const activeAnimationText = () => {
  animation.add({
    rotate : () => {
      return anime.random(-360,360)
    },
    translateX : () => {
      return anime.random(-500,500)
    },
    translateY : () => {
      return anime.random(-500,500)
    },
    duration : 500,
    delay : anime.stagger(1),
  })
  if(window.scrollY > 0) {
    animation.add({
      rotate : 0,
      translateX : 0,
      translateY : 0,
      duration : 5000,
      delay : anime.stagger(20),
    })
    document.removeEventListener('scroll', activeAnimationText);
  }
}*/