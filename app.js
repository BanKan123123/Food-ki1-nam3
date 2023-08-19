import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

export default function includeHTMLFile(url, element) {
    console.log(url, element);
    fetch(url)
        .then(res => res.text())
        .then(htmlContent => {
            console.log(htmlContent);
            document.getElementById(element).innerHTML = htmlContent;
        })
}
// class FunctionHandleIncludeHTML {
//     includeHTMLFile(url, element) {
//         console.log(url, element);
//         fetch(url)
//             .then(res => res.text())
//             .then(htmlContent => {
//                 console.log(htmlContent);
//                 document.getElementById(element).innerHTML = htmlContent
//             })
//     }
// }

// includeHTMLFile('./common/header/header.html', 'header');

// includeHTMLFile('./common/footer/footer.html', 'footer');

// exports.module = new FunctionHandleIncludeHTML();