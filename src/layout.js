import { request, baseUrl } from "./axios";
export function layout(data, type) {
    data=data.replace(/<ai2><\/ai2>/g, '');
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
            if((i == pElements.length - 3 || i == pElements.length - 1 || i == pElements.length - 2) && /\d+[年.-/\\]\d+[月.-/\\]\d+[日.-/\\]|\d+[月.-/\\]\d+[日.-/\\]|\d+[年.-/\\]\d+[月.-/\\]/.test(pElements[i].textContent)) {
                pElements[i].style.setProperty("text-align", "right");
                continue;
            }
            if((i == pElements.length - 3 || i == pElements.length - 1 || i == pElements.length - 2) && pElements[i].textContent.length < 20) {
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

async function cropAndUploadImage(file, cropCoords) {
    // cropCoords: { top: number, left: number, bottom: number, right: number }

    // 创建一个FileReader来读取图片
    return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(event) {
        const img = new Image();
        img.onload = async function() {
            // 计算裁剪区域的宽度和高度
            const cropWidth = cropCoords.right - cropCoords.left;
            const cropHeight = cropCoords.bottom - cropCoords.top;

            // 创建一个新的Canvas来进行裁剪
            const canvas = document.createElement('canvas');
            canvas.width = cropWidth;
            canvas.height = cropHeight;

            const ctx = canvas.getContext('2d');

            // 将图片绘制到Canvas上，并进行裁剪
            ctx.drawImage(
                img,
                cropCoords.left, cropCoords.top, // 裁剪的起点坐标
                cropWidth, cropHeight,           // 裁剪的宽度和高度
                0, 0,                            // 在Canvas上绘制的起点坐标
                cropWidth, cropHeight            // 在Canvas上绘制的宽度和高度
            );

            // 将裁剪后的图片转换为Blob
            canvas.toBlob(async function(blob) {
                const croppedFile = new File([blob], 'cropped_image.jpeg', { type: 'image/jpeg' });

                // 创建FormData并上传到服务器
                const formData = new FormData();
                formData.append('photo', croppedFile);

                try {
                    let response = await request({
                        url: '/api/file/photo/',
                        body: formData,
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/form-data'
                        }
                    })
                    resolve(baseUrl + response.data.photo_path)
                } catch (error) {
                    reject(error)
                }
            }, 'image/jpeg', 0.7);
        };


        img.src = event.target.result;
    };

    // 读取文件内容
    reader.readAsDataURL(file);
})
}


export async function getHTMLList(ocrresdata, file) {
    let imgShape = ocrresdata.imgShape;
    let ocrRes = ocrresdata;
    // 创建HTML元素
    const html = document.createElement('div');  // 用于记录直接生成的HTML元素 
    //let flag = 1;
    let currentDiv = document.createElement('div');    // 当前布局的div元素
    let currentDoubleLeft = null; // 记录当前双列布局当前布局的left值
    let currentElement = null;  // 当前布局结构的对象；
    let doubleElement = null; // 用于记录当前的双层布局结构对象；
    const list = [];  // 输出结构对象数组
    const newDiv = document.createElement('div')

    // 循环遍历OCR结果
    for (let i = 0; i < ocrRes.res.length; ++i) {
        // 获取区域元素
        const region = ocrRes.res[i];

        
        // 如果区域元素为图片识别结果，则跳过。
        if (region['type'].toLowerCase() === 'figure_caption') {
            continue
        }

        // 元素布局判断
        if (region['layout'] == 'single' || region['layout'] == 'double') {
            // 创建新的HTML元素
            // newDiv.classList = `single-layout ck-editor-ctn`  // 单列类
            // newDiv.id = `editor${i}`
            html.appendChild(newDiv); // 添加布局元素
            currentDiv = newDiv;  // 设置当前布局元素为
            currentDoubleLeft = null; // 重置 用于标记双列布局当前布局的left值为null
            // 创建单列布局元素
            currentElement = {
                type: 'single',
                children: []
            }
            // 添加布局元素
            list.push(currentElement)
        }

        // 如果是图片则直接从原图进行剪裁
        if (region['type'].toLowerCase() == 'figure') {
            
            const img = document.createElement('img', {
                class: 'img-ctn',
                src: ''
            })
            img.src = await cropAndUploadImage(file, {
                top: region['bbox'][1],
                left: region['bbox'][0],
                bottom: region['bbox'][3],
                right: region['bbox'][2]
            });
            currentDiv.appendChild(img);
            currentElement.children.push({
                type: region['type'].toLowerCase(),
                index: i,
                html: `
                <div id="editor${i}">
                    ${img.outerHTML}
                </div>
              `
            })
        }
        else if (region['type'].toLowerCase() == 'title') {
            const title = document.createElement('h2', {
                class: 'title'
            })
            for (let j = 0; j < region['res'].length; ++j) {
                title.innerText = `${title.innerText}${region['res'][j].text}`;
            }
            currentDiv.appendChild(title);
            currentElement.children.push({
                type: region['type'].toLowerCase(),
                index: i,
                html: `
                   ${title.outerHTML}
         `
            })
        }
        else if (region['type'].toLowerCase() == 'table') {
            const tableCtn = document.createElement('div', {
                class: 'table-ctn'
            })
            tableCtn.innerHTML = region['res']['html'];
            currentDiv.appendChild(tableCtn)
            currentElement.children.push({
                type: region['type'].toLowerCase(),
                index: i,
                html: `
                <div id="editor${i}">
                      ${tableCtn.outerHTML}
                </div>
              `
            })
        }
        // text类型
        else {
            const textCtn = document.createElement('div', {
                class: 'text-ctn'
            })
            const tab = document.createElement('span');
            tab.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;`
            textCtn.appendChild(tab);
            let textLength = 0
            for (let j = 0; j < region['res'].length; ++j) {
                const line = region['res'][j];
                const paragrah = document.createElement('span')
                paragrah.innerText = line['text'];
                textLength = textLength + line['text'].length;
                textCtn.appendChild(paragrah);
            }
            if (textLength === 0) {
                continue
            }
            currentDiv.appendChild(textCtn)
            currentElement.children.push({
                type: region['type'].toLowerCase(),
                index: i,
                html: `
                <div id="editor${i}">
                    ${textCtn.outerHTML}
                 </div>
             `
            })
        }
    }

    console.log(html.firstChild.outerHTML) // 输出生成的HTML
    // layoutList.value = list;  // 生成的HTML结构数组
    console.log(list)
    return html.firstChild.outerHTML;
}



export const ocrRes =  {
    "imgShape": {
        "h": 427,
        "w": 964
    },
    "res": [
        {
            "bbox": [
                50,
                13,
                915,
                61
            ],
            "img_idx": 0,
            "layout": "single",
            "res": [
                {
                    "confidence": 0.9980975389480591,
                    "text": "DocPrompt零样本问答效果非常强悍！能够推理学习空间位置语义，准确捕捉跨模态文档信息，轻松应对各类",
                    "text_region": [
                        [
                            52.0,
                            14.0
                        ],
                        [
                            912.0,
                            14.0
                        ],
                        [
                            912.0,
                            32.0
                        ],
                        [
                            52.0,
                            32.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9972060322761536,
                    "text": "复杂文档。",
                    "text_region": [
                        [
                            50.0,
                            41.0
                        ],
                        [
                            129.0,
                            41.0
                        ],
                        [
                            129.0,
                            63.0
                        ],
                        [
                            50.0,
                            63.0
                        ]
                    ]
                }
            ],
            "score": 0.6794042587280273,
            "type": "text"
        },
        {
            "bbox": [
                36,
                90,
                932,
                390
            ],
            "img_idx": 0,
            "layout": "single",
            "res": [
                {
                    "confidence": 0.9641646146774292,
                    "text": "prompt-1:票据的具体名称是什么？",
                    "text_region": [
                        [
                            583.0,
                            115.0
                        ],
                        [
                            880.0,
                            113.0
                        ],
                        [
                            880.0,
                            134.0
                        ],
                        [
                            584.0,
                            137.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9865225553512573,
                    "text": "中央医疗住院收费票据",
                    "text_region": [
                        [
                            231.0,
                            132.0
                        ],
                        [
                            388.0,
                            133.0
                        ],
                        [
                            388.0,
                            151.0
                        ],
                        [
                            231.0,
                            150.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9892921447753906,
                    "text": "result-1:中央医疗住院收费票据",
                    "text_region": [
                        [
                            583.0,
                            135.0
                        ],
                        [
                            854.0,
                            135.0
                        ],
                        [
                            854.0,
                            159.0
                        ],
                        [
                            583.0,
                            159.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9982432126998901,
                    "text": "2",
                    "text_region": [
                        [
                            408.0,
                            146.0
                        ],
                        [
                            419.0,
                            146.0
                        ],
                        [
                            419.0,
                            154.0
                        ],
                        [
                            408.0,
                            154.0
                        ]
                    ]
                },
                {
                    "confidence": 0.7994063496589661,
                    "text": "务洗水号",
                    "text_region": [
                        [
                            99.0,
                            161.0
                        ],
                        [
                            131.0,
                            161.0
                        ],
                        [
                            131.0,
                            171.0
                        ],
                        [
                            99.0,
                            171.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9229342341423035,
                    "text": "2953708",
                    "text_region": [
                        [
                            142.0,
                            160.0
                        ],
                        [
                            179.0,
                            160.0
                        ],
                        [
                            179.0,
                            170.0
                        ],
                        [
                            142.0,
                            170.0
                        ]
                    ]
                },
                {
                    "confidence": 0.7205018401145935,
                    "text": "医疗机的美型：",
                    "text_region": [
                        [
                            215.0,
                            161.0
                        ],
                        [
                            259.0,
                            161.0
                        ],
                        [
                            259.0,
                            172.0
                        ],
                        [
                            215.0,
                            172.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9623851776123047,
                    "text": "201911月2号",
                    "text_region": [
                        [
                            153.0,
                            173.0
                        ],
                        [
                            239.0,
                            173.0
                        ],
                        [
                            239.0,
                            188.0
                        ],
                        [
                            153.0,
                            188.0
                        ]
                    ]
                },
                {
                    "confidence": 0.761937141418457,
                    "text": "病号：",
                    "text_region": [
                        [
                            340.0,
                            164.0
                        ],
                        [
                            363.0,
                            164.0
                        ],
                        [
                            363.0,
                            172.0
                        ],
                        [
                            340.0,
                            172.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8538855314254761,
                    "text": "201911月2年",
                    "text_region": [
                        [
                            245.0,
                            174.0
                        ],
                        [
                            320.0,
                            174.0
                        ],
                        [
                            320.0,
                            186.0
                        ],
                        [
                            245.0,
                            186.0
                        ]
                    ]
                },
                {
                    "confidence": 0.7002477645874023,
                    "text": "住院天数：",
                    "text_region": [
                        [
                            360.0,
                            176.0
                        ],
                        [
                            391.0,
                            176.0
                        ],
                        [
                            391.0,
                            186.0
                        ],
                        [
                            360.0,
                            186.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8591967225074768,
                    "text": "社会保障卡号",
                    "text_region": [
                        [
                            370.0,
                            188.0
                        ],
                        [
                            412.0,
                            188.0
                        ],
                        [
                            412.0,
                            198.0
                        ],
                        [
                            370.0,
                            198.0
                        ]
                    ]
                },
                {
                    "confidence": 0.7082671523094177,
                    "text": "社费项目",
                    "text_region": [
                        [
                            248.0,
                            202.0
                        ],
                        [
                            277.0,
                            202.0
                        ],
                        [
                            277.0,
                            214.0
                        ],
                        [
                            248.0,
                            214.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9649377465248108,
                    "text": "全",
                    "text_region": [
                        [
                            319.0,
                            203.0
                        ],
                        [
                            330.0,
                            203.0
                        ],
                        [
                            330.0,
                            214.0
                        ],
                        [
                            319.0,
                            214.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9369050860404968,
                    "text": "收费项目",
                    "text_region": [
                        [
                            392.0,
                            202.0
                        ],
                        [
                            420.0,
                            202.0
                        ],
                        [
                            420.0,
                            214.0
                        ],
                        [
                            392.0,
                            214.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8866962194442749,
                    "text": "1911.67",
                    "text_region": [
                        [
                            179.0,
                            216.0
                        ],
                        [
                            215.0,
                            216.0
                        ],
                        [
                            215.0,
                            230.0
                        ],
                        [
                            179.0,
                            230.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9790170788764954,
                    "text": "287.00",
                    "text_region": [
                        [
                            322.0,
                            218.0
                        ],
                        [
                            352.0,
                            218.0
                        ],
                        [
                            352.0,
                            232.0
                        ],
                        [
                            322.0,
                            232.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9289857149124146,
                    "text": "1445.35",
                    "text_region": [
                        [
                            182.0,
                            228.0
                        ],
                        [
                            212.0,
                            228.0
                        ],
                        [
                            212.0,
                            235.0
                        ],
                        [
                            182.0,
                            235.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9730043411254883,
                    "text": "45.90",
                    "text_region": [
                        [
                            325.0,
                            226.0
                        ],
                        [
                            352.0,
                            226.0
                        ],
                        [
                            352.0,
                            241.0
                        ],
                        [
                            325.0,
                            241.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8989400863647461,
                    "text": "化验费",
                    "text_region": [
                        [
                            389.0,
                            219.0
                        ],
                        [
                            419.0,
                            219.0
                        ],
                        [
                            419.0,
                            234.0
                        ],
                        [
                            389.0,
                            234.0
                        ]
                    ]
                },
                {
                    "confidence": 0.5651273131370544,
                    "text": "80",
                    "text_region": [
                        [
                            461.0,
                            221.0
                        ],
                        [
                            472.0,
                            221.0
                        ],
                        [
                            472.0,
                            229.0
                        ],
                        [
                            461.0,
                            229.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9771396517753601,
                    "text": "prompt-2:右上方的数字是什么？",
                    "text_region": [
                        [
                            583.0,
                            219.0
                        ],
                        [
                            860.0,
                            214.0
                        ],
                        [
                            861.0,
                            236.0
                        ],
                        [
                            584.0,
                            240.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9308366775512695,
                    "text": "155R.20",
                    "text_region": [
                        [
                            178.0,
                            234.0
                        ],
                        [
                            214.0,
                            234.0
                        ],
                        [
                            214.0,
                            248.0
                        ],
                        [
                            178.0,
                            248.0
                        ]
                    ]
                },
                {
                    "confidence": 0.6355981826782227,
                    "text": "验氧费",
                    "text_region": [
                        [
                            250.0,
                            235.0
                        ],
                        [
                            281.0,
                            235.0
                        ],
                        [
                            281.0,
                            249.0
                        ],
                        [
                            250.0,
                            249.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9291412234306335,
                    "text": "18.20",
                    "text_region": [
                        [
                            326.0,
                            236.0
                        ],
                        [
                            351.0,
                            236.0
                        ],
                        [
                            351.0,
                            248.0
                        ],
                        [
                            326.0,
                            248.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9300292134284973,
                    "text": "诊察费",
                    "text_region": [
                        [
                            390.0,
                            237.0
                        ],
                        [
                            419.0,
                            237.0
                        ],
                        [
                            419.0,
                            248.0
                        ],
                        [
                            390.0,
                            248.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9616243839263916,
                    "text": "42",
                    "text_region": [
                        [
                            460.0,
                            230.0
                        ],
                        [
                            472.0,
                            230.0
                        ],
                        [
                            472.0,
                            239.0
                        ],
                        [
                            460.0,
                            239.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9760584235191345,
                    "text": "3557.16",
                    "text_region": [
                        [
                            178.0,
                            245.0
                        ],
                        [
                            213.0,
                            245.0
                        ],
                        [
                            213.0,
                            257.0
                        ],
                        [
                            178.0,
                            257.0
                        ]
                    ]
                },
                {
                    "confidence": 0.630524218082428,
                    "text": "取酸费",
                    "text_region": [
                        [
                            249.0,
                            244.0
                        ],
                        [
                            280.0,
                            244.0
                        ],
                        [
                            280.0,
                            259.0
                        ],
                        [
                            249.0,
                            259.0
                        ]
                    ]
                },
                {
                    "confidence": 0.7867534160614014,
                    "text": "14.",
                    "text_region": [
                        [
                            328.0,
                            248.0
                        ],
                        [
                            340.0,
                            248.0
                        ],
                        [
                            340.0,
                            256.0
                        ],
                        [
                            328.0,
                            256.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8356653451919556,
                    "text": "建病历费",
                    "text_region": [
                        [
                            387.0,
                            247.0
                        ],
                        [
                            427.0,
                            244.0
                        ],
                        [
                            428.0,
                            258.0
                        ],
                        [
                            388.0,
                            261.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9274740219116211,
                    "text": ".00",
                    "text_region": [
                        [
                            471.0,
                            248.0
                        ],
                        [
                            487.0,
                            248.0
                        ],
                        [
                            487.0,
                            256.0
                        ],
                        [
                            471.0,
                            256.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9937534332275391,
                    "text": "result-2:51011707065204",
                    "text_region": [
                        [
                            584.0,
                            242.0
                        ],
                        [
                            795.0,
                            240.0
                        ],
                        [
                            795.0,
                            259.0
                        ],
                        [
                            585.0,
                            261.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8944720029830933,
                    "text": "1R0. 00",
                    "text_region": [
                        [
                            183.0,
                            256.0
                        ],
                        [
                            214.0,
                            256.0
                        ],
                        [
                            214.0,
                            266.0
                        ],
                        [
                            183.0,
                            266.0
                        ]
                    ]
                },
                {
                    "confidence": 0.767212986946106,
                    "text": "壹万零玖佰捌拾卧元肆他翻分",
                    "text_region": [
                        [
                            143.0,
                            303.0
                        ],
                        [
                            272.0,
                            303.0
                        ],
                        [
                            272.0,
                            316.0
                        ],
                        [
                            143.0,
                            316.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9042449593544006,
                    "text": "984.48",
                    "text_region": [
                        [
                            403.0,
                            304.0
                        ],
                        [
                            432.0,
                            304.0
                        ],
                        [
                            432.0,
                            315.0
                        ],
                        [
                            403.0,
                            315.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9338066577911377,
                    "text": "15000,00",
                    "text_region": [
                        [
                            143.0,
                            320.0
                        ],
                        [
                            184.0,
                            320.0
                        ],
                        [
                            184.0,
                            332.0
                        ],
                        [
                            143.0,
                            332.0
                        ]
                    ]
                },
                {
                    "confidence": 0.959304928779602,
                    "text": "10912.99",
                    "text_region": [
                        [
                            422.0,
                            320.0
                        ],
                        [
                            469.0,
                            320.0
                        ],
                        [
                            469.0,
                            335.0
                        ],
                        [
                            422.0,
                            335.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9706307649612427,
                    "text": "prompt-3：第一个收费项目是啥？",
                    "text_region": [
                        [
                            583.0,
                            319.0
                        ],
                        [
                            855.0,
                            315.0
                        ],
                        [
                            856.0,
                            340.0
                        ],
                        [
                            584.0,
                            344.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9840534925460815,
                    "text": "6897.47",
                    "text_region": [
                        [
                            142.0,
                            335.0
                        ],
                        [
                            179.0,
                            335.0
                        ],
                        [
                            179.0,
                            346.0
                        ],
                        [
                            142.0,
                            346.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8786933422088623,
                    "text": "个人限户支付",
                    "text_region": [
                        [
                            240.0,
                            334.0
                        ],
                        [
                            283.0,
                            334.0
                        ],
                        [
                            283.0,
                            344.0
                        ],
                        [
                            240.0,
                            344.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8556113243103027,
                    "text": "0.00",
                    "text_region": [
                        [
                            302.0,
                            335.0
                        ],
                        [
                            323.0,
                            335.0
                        ],
                        [
                            323.0,
                            346.0
                        ],
                        [
                            302.0,
                            346.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9239736199378967,
                    "text": "个人支付金额：",
                    "text_region": [
                        [
                            363.0,
                            334.0
                        ],
                        [
                            407.0,
                            334.0
                        ],
                        [
                            407.0,
                            345.0
                        ],
                        [
                            363.0,
                            345.0
                        ]
                    ]
                },
                {
                    "confidence": 0.8829337954521179,
                    "text": "4087.01",
                    "text_region": [
                        [
                            419.0,
                            336.0
                        ],
                        [
                            456.0,
                            336.0
                        ],
                        [
                            456.0,
                            347.0
                        ],
                        [
                            419.0,
                            347.0
                        ]
                    ]
                },
                {
                    "confidence": 0.9848372340202332,
                    "text": "result-3:西药费",
                    "text_region": [
                        [
                            583.0,
                            343.0
                        ],
                        [
                            718.0,
                            341.0
                        ],
                        [
                            718.0,
                            362.0
                        ],
                        [
                            584.0,
                            365.0
                        ]
                    ]
                }
            ],
            "score": 0.9537538886070251,
            "type": "figure"
        },
        {
            "bbox": [
                393,
                402,
                575,
                415
            ],
            "img_idx": 0,
            "layout": "single",
            "res": [
                {
                    "confidence": 0.9486589431762695,
                    "text": "▲可支持空间位置语义理解",
                    "text_region": [
                        [
                            389.0,
                            401.0
                        ],
                        [
                            575.0,
                            401.0
                        ],
                        [
                            575.0,
                            416.0
                        ],
                        [
                            389.0,
                            416.0
                        ]
                    ]
                }
            ],
            "score": 0.7221033573150635,
            "type": "figure_caption"
        }
    ]
}
