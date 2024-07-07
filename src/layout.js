export function layout(data, type) {
    let html = new DOMParser().parseFromString(data, "text/html");
    html = html.body;

    if (type == 1) {

        let regex_h3 = /^\d+\.\d+\s*.*|^（[一二三四五六七八九十百千万]+）/; // 三级标题
        let regex_h2 = /^[一二三四五六七八九十百千万]+、.*$|^第?[一二三四五六七八九十百千万]+章、?|^\d+\s*.*/; // 二级标题
        let regex_h4 = /^\d+\.\d+\.\d+\s*.*/; // h3 四级标题

        // 使用 querySelectorAll 获取 html 内所有的 span 标签

        let title = html?.querySelector('body > p:first-of-type')
        if (title?.textContent.length < 16) {
            let newH1 = document.createElement('h1');
            newH1.setAttribute('style', 'text-align: center;')
            newH1.textContent = title.textContent;
            title.parentNode?.replaceChild(newH1, title);
        }

        // 如果页面中没有span，则对p进行排版

        let pElements = html?.querySelectorAll("body>p")

        console.log(pElements);
        pElements?.forEach(function (p) {
            // 检查span的innerHTML是否符合正则表达式
            if (regex_h4.test(p.innerHTML)) {
                let newH3 = document.createElement('h4');
                // 将新h3的文本内容设置为p的文本内容
                newH3.textContent = p.textContent;
                // 符合条件,
                p.parentNode?.replaceChild(newH3, p);
            }
            else if (regex_h3.test(p.innerHTML)) {
                let newH2 = document.createElement('h3');
                // 将新h2的文本内容设置为p的文本内容

                newH2.textContent = p.textContent;
                // console.log(p.innerHTML)
                // 符合条件,
                p.parentNode?.replaceChild(newH2, p);
            }
            else if (regex_h2.test(p.innerHTML)) {
                let newH1 = document.createElement('h2');
                // newH1.setAttribute('style', 'text-align: center;')
                // 将新h1的文本内容设置为span的文本内容
                // 如果span包含HTML结构，使用innerHTML
                newH1.textContent = p.textContent;
                // 符合条件,
                p.parentNode?.replaceChild(newH1, p);
            }
            else {
                p.style.setProperty("text-indent", "2em", "important");
            }
        })

    }

    if (type == 2) {

        let regex_h3 = /^\d+\.\d+\s*.*|^（[一二三四五六七八九十百千万]+）/; // 三级标题
        let regex_h2 = /^[一二三四五六七八九十百千万]+、.*$|^第?[一二三四五六七八九十百千万]+章、?|^\d+\s*.*/; // 二级标题
        let regex_h4 = /^\d+\.\d+\.\d+\s*.*/; // h3 四级标题


        // 使用 querySelectorAll 获取 html 内所有的 span 标签

        let title = html?.querySelector('body > p:first-of-type')
        // let chenghu = title && !/\w+[:：]$/.test(title.textContent) ? html?.querySelector('body > p:nth-of-type(2)') : html?.querySelector('body > p:first-of-type');
        if (title?.textContent.length < 16 && !/.+[:：]$/.test(title?.textContent)) {
            let newH1 = document.createElement('h1');
            newH1.setAttribute('style', 'text-align: center;')
            newH1.textContent = title.textContent;
            title.parentNode?.replaceChild(newH1, title);
        }

        // 如果页面中没有span，则对p进行排版

        let pElements = html?.querySelectorAll("body>p") || []

        console.log(pElements);

        for(let i = 0; i < pElements.length; i++) {
            if (/.+[:：]$/.test(pElements[i].textContent)) {
                continue;
            }
            if((i == pElements.length - 1 || i == pElements.length - 2) && /\d+[年.-/\\]\d+[月.-/\\]\d+[日.-/\\]|\d+[月.-/\\]\d+[日.-/\\]|\d+[年.-/\\]\d+[月.-/\\]/.test(pElements[i].textContent)) {
                pElements[i].style.setProperty("text-align", "right");
                continue;
            }
            if((i == pElements.length - 1 || i == pElements.length - 2) && pElements[i].textContent.length < 16) {
                pElements[i].style.setProperty("text-align", "right");
                continue;
            }
            if (regex_h4.test(pElements[i].innerHTML)) {
                let newH3 = document.createElement('h4');
                // 将新h3的文本内容设置为p的文本内容
                newH3.textContent = pElements[i].textContent;
                // 符合条件,
                pElements[i].parentNode?.replaceChild(newH3, pElements[i]);
            }
            else if (regex_h3.test(pElements[i].innerHTML)) {
                let newH2 = document.createElement('h3');
                // 将新h2的文本内容设置为p的文本内容

                newH2.textContent = pElements[i].textContent;
                // console.log(p.innerHTML)
                // 符合条件,
                pElements[i].parentNode?.replaceChild(newH2, pElements[i]);
            }
            else if (regex_h2.test(pElements[i].innerHTML)) {
                let newH1 = document.createElement('h2');
                // newH1.setAttribute('style', 'text-align: center;')
                // 将新h1的文本内容设置为span的文本内容
                // 如果span包含HTML结构，使用innerHTML
                newH1.textContent = pElements[i].textContent;
                // 符合条件,
                pElements[i].parentNode?.replaceChild(newH1, pElements[i]);
            }
            else {
                pElements[i].style.setProperty("text-indent", "2em", "important");
            }
        }
    }
    console.log(111, html.innerHTML);
    return html.innerHTML;
}