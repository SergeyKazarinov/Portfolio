/**
 * Базовый класс добавления проекта на страницу
 * @class
 * @property {Array} Project._data                   - Массив данных проектов
 * @property {HTMLElement} Project._projectTemplate  - DOM-узел для заполнения информации проекта
 */
export class Project {
      /**
   * @constructor
   * @param {Array} data                  - Массив данных проектов
   * @param {HTMLElement} projectTemplate - DOM-узел для заполнения информации проекта
   */
  constructor (data, projectTemplate) {
    this._data = data;
    this._projectTemplate = projectTemplate;
    this._descriptionProjects = 'Проекты реализованы во время обучения на курсе Web-разработчки Яндекс.Практикум, а также дополнительные релевантные проекты, которые не входят в программу курска.';
    this._description = document.querySelector('.project__description');
    this._stack = document.querySelector('.projects__stack');
  }

  #getTemplate = () => {
    const projectTemplate = this._projectTemplate.cloneNode(true);
    return projectTemplate;
  }

  #setEventListener = () => {
    this._element.addEventListener('mouseover', () => {
      this._description.classList.add('animation__show-from-left');
      this._description.textContent = this._data.description;
      this._data.stack.forEach((item) => {
        const itemElement = document.createElement('li');
        itemElement.classList.add('projects__stack-item', 'animation__show-from-left');
        itemElement.textContent = item;
        this._stack.append(itemElement);
      });
    })

    this._element.addEventListener('mouseout', () => {
      this._description.classList.remove('animation__show-from-left');
      const stackList = document.querySelectorAll('.projects__stack-item');
      Array.from(stackList).forEach(item => {
        item.remove();
      })
      this._description.textContent = this._descriptionProjects;
    })
  }

  generateProject() {
    this._element = this.#getTemplate();
    this._link = this._element.querySelector('.projects__link');
    this._scrin = this._element.querySelector('.projects__scrin');
    this._nameProject = this._element.querySelector('.projects__name');
    this._link.href = this._data.link;
    this._scrin.src = this._data.scrin;
    this._nameProject = this._data.name;
    this.#setEventListener();
    return this._element;
  }
}