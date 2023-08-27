
export default function includeHTMLFile(url, elementId) {
    fetch(url)
        .then(res => res.text())
        .then(htmlContent => {
            console.log(htmlContent);
            document.getElementById(elementId).innerHTML = htmlContent;
        });
}

includeHTMLFile("../../../../common/footer/footer.html", "footer");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const decrease = $('.decrease');
const increase = $('.increase');
const number = $('.number');
const totalPrices = $('.total__prices');
console.log(totalPrices);
let n = 0;
const price = 7.5;
let total;
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

decrease.addEventListener('click', () => {
    if (n > 0) {
        --n;
        number.innerText = n;
        total = n * price;
        if (isFloat(total)) {
            totalPrices.innerText = total;
        } else {
            totalPrices.innerText = total + ".00";
        }
    }
})

increase.addEventListener('click', () => {
    ++n;
    number.innerText = n;
    total = n * price;
    if (isFloat(total)) {
        totalPrices.innerText = total;
    } else {
        totalPrices.innerText = total + ".00";
    }
})