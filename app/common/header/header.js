const modalMenu = document.querySelector('.modal_menu');
const listMenu = document.querySelector('.list_menu');
const container = document.querySelector('.container')
const footer = document.querySelector('.footer');
const btnCart = document.querySelector('.btn__buy');
const cart = document.querySelector('.header__cart-list');
const timeAppear = document.querySelector('.time-apear');
const btnDecrease = document.querySelector('.btn-decrease');
const btnIncrease = document.querySelector('.btn-increase');
const cartCounter = document.querySelector('.header__cart-item-quantity-counts');
const checkoutPrice = document.querySelector('.header__cart-view-cart-total');

let count = 2;
let price = 15.00;
let totalPrice = 30.00;

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

//cart

btnCart.addEventListener('click', (e) => {
    cart.classList.toggle('appear');
    e.stopPropagation();
})

timeAppear.addEventListener('click', (e) => {
    if (document.querySelector('.header__cart-list.appear')) {
        cart.classList.remove('appear');
    }
})

btnDecrease.addEventListener('click', () => {
    count--;
    cartCounter.innerText = count;
    if (count <= 0) {
        cartCounter.innerText = 0;
        count = 0;
    }

    totalPrice = price * count;
    checkoutPrice.innerText = totalPrice + '.00';
})

btnIncrease.addEventListener('click', () => {
    count++;
    cartCounter.innerText = count;
    totalPrice = price * count;
    checkoutPrice.innerText = totalPrice + '.00';
})
