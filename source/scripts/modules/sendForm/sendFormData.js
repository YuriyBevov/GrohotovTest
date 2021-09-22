import {formValidation} from './formValidation.js';

const form = document.getElementById('user_form');
const submitFormBtn = form.querySelector('button[type=submit]');

submitFormBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    formValidation(form);
});
