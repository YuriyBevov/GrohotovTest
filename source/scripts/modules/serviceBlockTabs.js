// показ табов в блоке service

const btns = document.querySelectorAll('.tabs__item-btn');
const tabs = document.querySelectorAll('.service__list');

const removeClass = (arr, cl) => {
    arr.forEach(el => {
        el.classList.contains(cl) ?
        el.classList.remove(cl) : null
    })
}

const onClickChangeActiveTab = (evt) => {
    const current = evt.currentTarget

    removeClass(btns, 'tabs__item-btn--active');

    if(!current.classList.contains('tabs__item-btn--active')) {
        current.classList.add('tabs__item-btn--active');
        const tabNumber = current.getAttribute("data-id") - 1;

        removeClass(tabs, 'active');

        tabs[tabNumber].classList.add('active');
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', onClickChangeActiveTab);
}) 