import {initialProjects,
  header,
  lettersHeader,
  projectListSelector,
  projectTemplate,
} from '../utils/constants.js';
import {Section} from '../components/Section.js';
import {Project} from '../components/Project.js';

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
 * @const projectContainerList - экземпляр класса для встави готового проетка в DOM-узел
 */
const projectContainerList = new Section (initialProjects, createProject, projectListSelector);
projectContainerList.renderItems();

/**
 * событие прокручивания страницы для преобразования блока header
 */
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
})

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