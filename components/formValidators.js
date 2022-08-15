export class FormValidator {
  constructor (validConfig, formElement) {
    this._formSelector = validConfig.formSelector;
    this._inputSelector = validConfig.inputSelector;
    this._submitButtonSelector = validConfig.submitButtonSelector;
    this._inactiveButtonClass = validConfig.inactiveButtonClass;
    this._inputErrorClass = validConfig.inputErrorClass;
    this._errorMessage = validConfig.errorMessage;
    this._formElement = formElement;
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorMessage);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorMessage);
  }

  _isValid = (inputElement) => {
    if(!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError(inputElement, errorMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInputValid = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState = () => {
    const submitButton = this._formElement.querySelector(`.${this._submitButtonSelector}`);
    if(this._hasInputValid(this._inputList)) {
      submitButton.classList.add(this._inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(this._inactiveButtonClass);
      submitButton.disabled = false;
    }
  }



  _setEventListener = () => {
    this._inputList = Array.from(this._formElement.querySelectorAll(`.${this._inputSelector}`));
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      })
    })
  }

  enableValidation = () => {
    this._setEventListener();
  }
}

