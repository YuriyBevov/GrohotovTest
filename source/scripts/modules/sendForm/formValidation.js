import {sendRequest} from '../sendForm/sendRequest.js';

const testURL = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();
xhr.open('POST', testURL);

const formBody = {};

import {validationField} from './validationField.js';

function formValidation(form) {
    const formFields = form.querySelectorAll('input');

    let isFormValid = true;

    formFields.forEach(field => {
        const fieldType = field.getAttribute('type');

        if(fieldType === 'tel') {
            if(field.value.length < 16) {
                validationField('test')
                isFormValid = false;
            } else {
                formBody.userName = field.value;
            }
        }

        if(fieldType === 'text') {
            if(!field.value) {
                validationField('test')
                isFormValid = false;
            } else {
                formBody.userPhone = field.value;
            }
        }

        if(fieldType === 'checkbox') {
            if(!field.checked) {
                validationField('test')
                isFormValid = false;
            } else {
                formBody.isRulesAccepted = true;
            }
        }
    })

    isFormValid ? 
        sendRequest('POST', testURL, formBody)
        .then( data => console.log(data))
        .catch(err => console.log(err))

    : null
}

export {formValidation}