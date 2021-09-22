import IMask from 'imask';

// маска на инпут c номером телефона

let phoneInput = document.getElementById('user_phone');

if (phoneInput) {
    IMask(
        phoneInput, {
        mask: '+{7} 000-000-00-00'
    });
}