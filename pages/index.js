import {initialProjects,
  header,
  lettersHeader,
} from '../utils/constants.js';


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

const projectItems = document.querySelectorAll('.project__item');
const projectDescription = document.querySelector('.project__description');

Array.from(projectItems).forEach(item => {
  item.addEventListener('mouseover', () => {
    // projectDescription.classList.add('project__description_inactive');
    projectDescription.textContent = 'Фестиваль молодой драматургии Любимовка - это независимый некоммерческий коллективный проект российских драматургов. Проект создавался в команде 6 Frontend-разработчиков';
  })

  item.addEventListener('mouseout', () => {
    setTimeout(() => {
      projectDescription.textContent = 'Проекты реализованы во время обучения на курсе Web-разработчки Яндекс.Практикум, а также дополнительные релевантные проекты, которые не входят в программу курска.';
    }, 300)
    
  })
})