/**
 * Базовый класс добавления проекта на страницу
 * @class
 * @property {Array} Project.data                   - Массив данных проектов
 * @property {HTMLElement} Project.projectTemplate  - DOM-узел для заполнения информации проекта
 */
export class Project {
      /**
   * @constructor
   * @param {Array} data                  - Массив данных проектов
   * @param {HTMLElement} projectTemplate - DOM-узел для заполнения информации проекта
   */
  #data
  #projectTemplate
  #descriptionProjects
  #description
  #stack
  #link
  #scrin
  #nameProject
  #element
  constructor (data, projectTemplate) {
    this.#data = data;
    this.#projectTemplate = projectTemplate;
    this.#descriptionProjects = 'Проекты реализованы во время обучения на курсе Web-разработчки Яндекс.Практикум, а также дополнительные релевантные проекты, которые не входят в программу курска.';
    this.#description = document.querySelector('.project__description');
    this.#stack = document.querySelector('.projects__stack');
  }

  #getTemplate = () => {
    const projectTemplate = this.#projectTemplate.cloneNode(true);
    return projectTemplate;
  }

  #setEventListener = () => {
    this.#element.addEventListener('mouseover', () => {
      this.#description.classList.add('animation__show-from-left');
      this.#description.textContent = this.#data.description;
      this.#data.stack.forEach((item) => {
        const itemElement = document.createElement('li');
        itemElement.classList.add('projects__stack-item', 'animation__show-from-left');
        itemElement.textContent = item;
        this.#stack.append(itemElement);
      });
    })

    this.#element.addEventListener('mouseout', () => {
      this.#description.classList.remove('animation__show-from-left');
      const stackList = document.querySelectorAll('.projects__stack-item');
      Array.from(stackList).forEach(item => {
        item.remove();
      })
      this.#description.textContent = this.#descriptionProjects;
    })
  }

  generateProject() {
    this.#element = this.#getTemplate();
    this.#link = this.#element.querySelector('.projects__link');
    this.#scrin = this.#element.querySelector('.projects__scrin');
    this.#nameProject = this.#element.querySelector('.projects__name');
    this.#link.href = this.#data.link;
    this.#scrin.src = this.#data.scrin;
    this.#nameProject = this.#data.name;
    this.#setEventListener();
    return this.#element;
  }
}