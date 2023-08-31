
const modalMenu = document.querySelector('.modal_menu');
const listMenu = document.querySelector('.list_menu');
const container = document.querySelector('.container')
const footer = document.querySelector('.footer');

modalMenu.addEventListener('click', (e) => {
    listMenu.classList.toggle('active_menu');
    e.stopPropagation();
})

document.addEventListener('click', (e) => {
    const clickElement = e.target;

    if (!listMenu.contains(clickElement)) {
        listMenu.classList.add('active_menu');
    }
})

// console.log(modalMenu);

// fetch('../../../home_container.html')
//     .then(res => res.text())
//     .then((data) => {
//         container.innerHTML = data;
//     })

// fetch('../footer/footer.html')
//     .then(res => res.text())
//     .then(data => {
//         footer.innerHTML = data;
//     }) 


// Cart
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const quantity = $('.header__cart-item-quantity-counts');

let counts = 2;
let price = 15;
let total = 30;

const decrease = $('.header__cart-item-quantity-decrease');
const increase = $('.header__cart-item-quantity-increase');
const totalPrice = $('.header__cart-view-cart-total');
const headerCartList = $('.header__cart-list');
const btnClose = $('.btn__close');
const btnBuy = $('.btn__buy');

btnBuy.addEventListener ('click', ()=> {
    headerCartList.classList.add('appear');
});

btnClose.addEventListener('click', () => {
    if($('.header__cart-list.appear')) {
        headerCartList.classList.remove('appear');
    }
});

increase.addEventListener('click', () => {
    counts++;
    total = price * counts;
    quantity.innerText = counts;
    totalPrice.innerText = total+'.00';
});

decrease.addEventListener('click', () => {
    if (counts > 0) {
        counts--;
        total = price * counts;
        quantity.innerText = counts;
        totalPrice.innerText = total+'.00';
    }
});