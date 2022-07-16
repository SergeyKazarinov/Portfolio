/**
 * @const header - блок header
 */
const header = document.querySelector('.header');
/**
 * @const leters - элементы span, буквы заголовка шапки
 */
const letters = document.querySelectorAll('.header__title-item');

/**
 * событие прокручивания страницы для преобразования блока header
 */
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
})

/**
 * Эффект дыма для букв заголовка шапки
 */
for(let i = 0; i<letters.length; i++) {
  letters[i].addEventListener('mouseover', () => {
    letters[i].classList.toggle('header__title-item_active')
  })
}