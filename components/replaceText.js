export class ReplaceText {
  constructor(textSelector) {
    this._textSelector = document.querySelector(`.${textSelector}`);
  }

  replaceText() {
    this._textSelector.innerHTML = this._textSelector.textContent.replace(/\S/g, "<span>$&</span>")
  }
}