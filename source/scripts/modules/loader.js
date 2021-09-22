const loader = document.getElementById('loader');

function loaderInit(status) {
    if(status) {
        loader.classList.add('showed');
    } else {
        loader.classList.remove('showed');
    }
}

export {loaderInit}