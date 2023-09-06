
export default function includeHTMLFile(url, elementId) {
    fetch(url)
        .then(res => res.text())
        .then(htmlContent => {
            document.getElementById(elementId).innerHTML = htmlContent;
        });
}

includeHTMLFile("../../../../common/footer/footer.html", "footer");
