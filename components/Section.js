/**
 * Класс добавления элементов в разметку
 * @class
 * @property {Array} Section._data               - Массив данных проектов
 * @property {function} Section._createProject   - Функция создание DOM-узла
 * @property {string} Section._containerSelector - CSS-класс для вставки DOM-узла
 */
export class Section {
    /**
   * @constructor
   * @param {Array} data                 - Массив данных проектов
   * @param {function} createProject     - Функция создание DOM-узла
   * @param {string} containerSelector   - CSS-класс для вставки DOM-узла
   */
  constructor (data, createProject, containerSelector) {
    this._data = data;
    this._createProject = createProject;
    this._containerSelector = containerSelector;
  
    this._container = document.querySelector(`.${containerSelector}`)
  }

  _addItem(item) {
    this._container.append(this._createProject(item));

  }

  renderItems() {
    this._data.forEach(item => {
      this._addItem(item);
    });
  }
}