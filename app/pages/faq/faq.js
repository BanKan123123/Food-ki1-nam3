document.addEventListener("DOMContentLoaded", function () {
    var faqItems = document.querySelectorAll(".faq__item");



    faqItems.forEach(function (item) {
        var showButton = item.querySelector(".btn__faq-show");
        var hiddenButton = item.querySelector(".btn__faq-hidden");
        var contentParagraph = item.querySelector(".show__para");

        hiddenButton.style.display = "none";
        contentParagraph.style.display = "none";

        showButton.addEventListener("click", function () {
            contentParagraph.style.display = "block";
            showButton.style.display = "none";
            hiddenButton.style.display = "block";
        });

        hiddenButton.addEventListener("click", function () {
            contentParagraph.style.display = "none";
            showButton.style.display = "block";
            hiddenButton.style.display = "none";
        });
    });
});

// import { includeHTMLFile } from '../../../app.js';

function includeHTMLFile(url, elementId) {
    fetch(url)
        .then((res) => res.text())
        .then((htmlContent) => {
            console.log(htmlContent);
            document.getElementById(elementId).innerHTML = htmlContent;
        });
}

includeHTMLFile("../../common/footer/footer.html", "footer");
