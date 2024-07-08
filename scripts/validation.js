
function showInputError(formEl,inputEl,{inputErrorClass,errorClass}) {
   const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`)
   inputEl.classList.add(inputErrorClass)
   errorMessageEl.textContent = inputEl.validationMessage;
   errorMessageEl.classList.add(errorClass)
}
function hideInputError(formEl,inputEl,{inputErrorClass,errorClass}) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.remove(inputErrorClass)
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass)
 }
 
function checkInputValidity (formEl, inputEl, options) {
  if (inputEl.validity.valid) {
      hideInputError(formEl,inputEl,options);
   }   else {
     showInputError(formEl,inputEl,options)
  }
}
function hasInvalidInput (inputs) {
    return inputs.some((inputEl ) => {
        return !inputEl.validity.valid;
         
    }) 
}

function toggleButtonState(inputEls,submitButton, {inactiveButtonClass}) {
   const hasSomethingWrong = hasInvalidInput(inputEls)
    if (hasSomethingWrong) {
        submitButton.classList.add(inactiveButtonClass) 
        submitButton.disabled = true;
    } else {
        submitButton.classList.remove(inactiveButtonClass)
        submitButton.diabled = false;
    }
}

function setEventListeners (formEl,options) {
    const {inputSelector} = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    const submitButton = formEl.querySelector(".modal__button")
    inputEls.forEach((inputEl) => {
        inputEl.addEventListener("input", (e) => {
           checkInputValidity(formEl,inputEl,options)
           toggleButtonState(inputEls, submitButton, options)
        })
    })
}
function enableValidation(options) {
    const formElements = [...document.querySelectorAll(options.formSelector)];
    formElements.forEach((formEl) => {
        formEl.addEventListener("submit",(e) => {
            e.preventDefault();
        });
   
     setEventListeners(formEl,options)
    });

}


const config = ({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  });

  enableValidation(config); 