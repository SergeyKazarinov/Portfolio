export class ReplaceText {
  constructor(textSelector) {
    this._textSelector = document.querySelector(`.${textSelector}`);
    console.log(this._textSelector);
  }

  replaceText() {
    this._textSelector.innerHTML = this._textSelector.textContent.replace(/\S/g, "<span>$&</span>")
  }
}