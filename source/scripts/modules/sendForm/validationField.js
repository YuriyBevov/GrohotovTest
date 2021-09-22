const validationField = (field) => {
    if(!field.classList.contains('invalid-field')) {
        field.classList.add('invalid-field');

        const onChangeRemoveInvalidStatus = () => {
            field.classList.remove('invalid-field');
            field.removeEventListener('change', onChangeRemoveInvalidStatus)
        }
        
        field.addEventListener('change', onChangeRemoveInvalidStatus)
    }
}

export {validationField}