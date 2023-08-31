const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const quantity = $('.header__cart-item-quantity-counts');

let counts = 2;
let price = 15;
let total = 30;

const decrease = $('.header__cart-item-quantity-decrease');
const increase = $('.header__cart-item-quantity-increase');
const totalPrice = $('.header__cart-view-cart-total');

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