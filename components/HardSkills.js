/**
 * Базовый класс добавления hardSkills на страницу
 * @class
 * @property {Array} Project._data                   - Массив данных hardSkills
 * @property {HTMLElement} Project._projectTemplate  - DOM-узел для заполнения информации проекта
 */
export class HardSkills {
      /**
   * @constructor
   * @param {Array} data                  - Массив данных hardSkills
   * @param {HTMLElement} hardSkillsTemplate - DOM-узел для заполнения информации проекта
   */
  constructor (data, hardSkillsTemplate) {
    this._data = data;
    this._hardSkillsTemplate = hardSkillsTemplate;
  }

  #getTemplate = () => {
    const hardSkillsTemplate = this._hardSkillsTemplate.cloneNode(true);
    return hardSkillsTemplate;
  }

  generateProject() {
    this._element = this.#getTemplate();

    this._title = this._element.querySelector('.about__stack');
    this._title.textContent = this._data;

    return this._element;
  }
}