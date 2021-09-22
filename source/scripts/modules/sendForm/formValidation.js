import {sendRequest} from './sendRequest.js';
import {formStatus} from './formStatus.js';
import {loaderInit} from '../loader.js';

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
                validationField(field)
                isFormValid = false;
            } else {
                formBody.userName = field.value;
            }
        }

        if(fieldType === 'text') {
            if(!field.value) {
                validationField(field)
                isFormValid = false;
            } else {
                formBody.userPhone = field.value;
            }
        }

        if(fieldType === 'checkbox') {
            if(!field.checked) {
                validationField(field)
                isFormValid = false;
            } else {
                formBody.isRulesAccepted = true;
            }
        }
    })

    if(isFormValid) {
        loaderInit(true);
        sendRequest('POST', testURL, formBody)
        .then( data => {
            formStatus('Данные переданы успешно', form);
            loaderInit(false);
        })
        .catch(err => {
            formStatus('Произошла ошибка передачи данных');
            loaderInit(false);
        })
    }
}

export {formValidation}