import {cleanFormFields} from './cleanFormFields.js';

const formStatusModal = document.querySelector('.form-status-modal');
const messageField = formStatusModal.querySelector('span');
const modalCloseBtn = formStatusModal.querySelector('button');

const formStatus = (text, form = null) => {
    messageField.innerHTML = text;

    formStatusModal.classList.add('showed');

    const onClickCloseModal = () => {
        cleanFormFields(form);
        formStatusModal.classList.remove('showed');
        modalCloseBtn.removeEventListener('click', onClickCloseModal);
    }

    modalCloseBtn.addEventListener('click', onClickCloseModal)
}

export {formStatus}