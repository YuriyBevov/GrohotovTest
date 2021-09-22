import {formStatus} from './formStatus.js';

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
        xhr.responseType = 'json';

        xhr.setRequestHeader('Content-Type', 'application/json')
        
        xhr.onload = () => {
            if(xhr.status >= 400) {
                console.log('error')
                formStatus(false, 'Произошла ошибка передачи данных');
                reject(xhr.response)
            } else {
                console.log('success')
                formStatus(true, 'Данные переданы успешно');
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body))
    })
}

export {sendRequest}