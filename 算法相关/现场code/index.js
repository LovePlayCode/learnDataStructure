/**
 * 
 * <div id="test" class="container" c="b">
<div class="text-block"><span>Hello World</span>
</div><img src="xx.jpg" /></div>

[{"tagName":"","children":[{"tagName":"div","attrs":{"id":"test","class":"container"},
"rawAttrs":"id=\"test\" class=\"container\" c=\"b\"","type":"element","range":[0,128],
"children":[{"tagName":"div","attrs":{"class":"text-block"},"rawAttrs":"class=\"text-block\"",
"type":"element","range":[39,102],"children":[{"tagName":"span","attrs":{"id":"xxx"},
"rawAttrs":"id=\"xxx\"","type":"element","range":[63,96],"children":[
{"type":"text","range":[78,89],"value":"Hello World"}]}]},{"tagName":"img","attrs":{},
"rawAttrs":"src=\"xx.jpg\" ","type":"element","range":[102,122],"children":[]}]}]}]
 */

const str = `<div id="test" class="container" c="b">
                <div class="text-block">
                    <span>Hello World</span>
                </div>
                <img src="xx.jpg" />
            
            </div>`;

            [{
                tagName: 'div',
                childNode: [
                    {
                        tagName: 'div',
                        childNode: [{
                            tagName: 'span'
                        }]
                    },
                    {
                        tagName: 'img'
                    }
                ]
            }]
const strArr = [
  '<div id="test" class="container" c="b">',
  '<div class="text-block">',
  '<span id="xxx">',
  "</span>",
  "</div>",
  '<img src="xx.jpg" />',
  "</div>",
];
const queue = ['</div',]

// 
const tagMap = {
    '<div': '</div',
    '<img': '/>'
}


/**
 *
 * @param {string} str
 */
// function main(str) {
//   const queue = [];
//   let tagNameObj = {
//     "<div": "</div",
//     "<span": "</span",
//     "<img": "/",
//   };
//   const attr = {
//     id: "id",
//     class: "class",
//     src: "src",
//   };
//   let charStr = "";
//   const res = {};
//   // const res = []
//   let tagName = "";
//   let flag = false;
//   for (let char of str) {
//   }
//   return res;
// }

/**
 * 
 * @param {string} arr 
 */
// function main2(arr){
//     for(let str of arr){
//         if(str[0] === '<'){
//             const idMatch = str.match(/id="([^"]*)"/)[1];
//             const classMatch = str.match(/class="([^"]*)"/)[1];
//             const tagMatch = str.match(/<(\S+?)\s/)[1];
//             console.log({idMatch,classMatch,tagMatch})
//         }
//     }
// }
// console.log(main(str));
// console.log(main2(strArr));



function parseHTML(html) {
    const tagRegex = /<([a-zA-Z][a-zA-Z0-9]*)\s*([^>]*)>(.*?)<\/\1>/gs;
    const selfClosingTagRegex = /<([a-zA-Z][a-zA-Z0-9]*)(\s*[^>]*)\/>/g;
    const textNodeRegex = /([^<]+)/g;

    function parseElement(tag) {
        const obj = {
            tagName: tag[1],
            attrs: {},
            rawAttrs: tag[2].trim(),
            type: "element",
            range: [0, 0],  // 在这里你可以手动设置范围
            children: []
        };

        // 处理属性
        if (tag[2]) {
            const attrs = tag[2].trim().split(/\s+/);
            attrs.forEach(attr => {
                const [key, value] = attr.split('=');
                if (value) {
                    obj.attrs[key] = value.replace(/['"]/g, "");  // 去掉引号
                } else {
                    obj.attrs[key] = true; // 没有值的属性设为 true
                }
            });
        }

        return obj;
    }

    function extractChildren(content) {
        const children = [];
        let match;

        // 匹配文本节点
        while ((match = textNodeRegex.exec(content)) !== null) {
            const textValue = match[1].trim();
            if (textValue) {
                children.push({
                    type: "text",
                    value: textValue,
                    range: [0, 0]  // 这里可以手动设置范围
                });
            }
        }

        return children;
    }

    const result = [];
    let match;

    // 解析常规标签
    while ((match = tagRegex.exec(html)) !== null) {
        const element = parseElement(match);
        element.children = extractChildren(match[3]); // 提取子元素
        result.push(element);
    }

    // 解析自闭合标签
    while ((match = selfClosingTagRegex.exec(html)) !== null) {
        const obj = {
            tagName: match[1],
            attrs: {},
            rawAttrs: match[2].trim(),
            type: "element",
            range: [0, 0],  // 在这里你可以手动设置范围
            children: []
        };

        // 处理属性
        if (match[2]) {
            const attrs = match[2].trim().split(/\s+/);
            attrs.forEach(attr => {
                const [key, value] = attr.split('=');
                if (value) {
                    obj.attrs[key] = value.replace(/['"]/g, ""); // 去掉引号
                } else {
                    obj.attrs[key] = true; // 没有值的属性设为 true
                }
            });
        }

        result.push(obj);
    }

    return result;
}

const htmlString = `<div id="test" class="container" c="b">
<div class="text-block"><span>Hello World</span>
</div><img src="xx.jpg" /></div>`;

const result = parseHTML(htmlString);
console.log(JSON.stringify(result, null, 2));
