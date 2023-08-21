import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

export default function includeHTMLFile(url, element) {
    fetch(url)
        .then(res => res.text())
        .then(htmlContent => {
            document.getElementById(element).innerHTML = htmlContent;

            const cssLinks = htmlContent.match(/<link[^>]+href=["'](.*?)\.css["'][^>]*>/g);

            // Thêm các thẻ <link> vào trang
            if (cssLinks) {
                cssLinks.forEach(cssLink => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = cssLink.match(/href=["'](.*?)["']/)[1]; // Lấy đường dẫn từ đoạn mã
                    document.head.appendChild(link);
                });
            }
        });

}