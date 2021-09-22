function cleanFormFields(form) {
    if(form) {
        const fields = form.querySelectorAll('input');

        fields.forEach(field => {
            const fieldType = field.getAttribute('type');

            if(fieldType !== 'checkbox') {
                field.value = ''
            } else {
                field.checked = false
            }
        })
    }
}

export {cleanFormFields}