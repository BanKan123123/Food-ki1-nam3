// Create a event click restaurants and Catering

function includeHTMLFile(url, elementId) {
    fetch(url)
        .then(res => res.text())
        .then(htmlContent => {
            console.log(htmlContent);
            document.getElementById(elementId).innerHTML = htmlContent;
        });
}

includeHTMLFile("../../common/footer/footer.html", "footer");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const items = $$('.item-js');

const tabActive = $('.tab-js.active');
const line = $('.tabs-js .underline');

requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
});

items.forEach((item) => {
    item.addEventListener('click', function () {
        $('.tab-js.active').classList.remove('active');
        this.classList.add('active');

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    })
});

// Create a event click delivery and pickup

const btns = $$('.btn');
btns.forEach((btn) => {
    btn.addEventListener('click', function() {
        $('.btn.active').classList.remove('active');

        this.classList.add('active');
    })
})

// Create a event click arrow top and bottom


// Appear or hiden modal

const modal = $('.modal_js');
const options = $('.sort__options');
const wrapper = $('.wrapper');

modal.addEventListener('click', function() {
    modal.classList.add('hiden');
    options.classList.remove('border-radius');
})

options.addEventListener('click', function(){
    if ($('.sort__options.border-radius')) {
        options.classList.remove('border-radius');
        modal.classList.add('hiden');
    } else {
        options.classList.add('border-radius');
        modal.classList.remove('hiden');
    }
})

wrapper.addEventListener('click', function() {
    if ($('.sort__options.border-radius')) {
        options.classList.remove('border-radius');
        modal.classList.add('hiden');
    }
})

const modal_js_mobile = $('.wrapper__modal--mobile');
const sort_mobile = $('.btn-sort-by--mobile');

sort_mobile.addEventListener('click', function() {
    modal_js_mobile.classList.remove('hiden');
})

modal_js_mobile.addEventListener('click', function() {
    modal_js_mobile.classList.add('hiden');
})

const left_mobile = $('.left--mobile');
const filter = $('.btn__filter');
const js_container = $('.js_container');
filter.addEventListener('click', function() {
    left_mobile.classList.add('open');
})

left_mobile.addEventListener('click', function() {
    left_mobile.classList.remove('open');
})

js_container.addEventListener('click', function(event){
    event.stopPropagation();
})


const filter_item = $$('.filter-item');
filter_item.forEach(item => {
    item.addEventListener('click', function() {
        if ($('.p-active')) {
            $('.p-active').classList.remove('p-active');
        }
        item.classList.add('p-active');
    })
});