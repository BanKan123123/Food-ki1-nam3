
function includeHTMLFile(url, elementId) {
    fetch(url)
        .then(res => res.text())
        .then(htmlContent => {
            console.log(htmlContent);
            document.getElementById(elementId).innerHTML = htmlContent;
        });
}

// includeHTMLFile('../../common/header/header.html', 'header');
includeHTMLFile('../../common/footer/footer.html', 'footer')
