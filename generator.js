import json from './form.js';

/**
 *
 * @param {Object[]} json
 * @returns {Object[]}
 */
function getComponents(json) {
    let arr = [];
    for (let key of json['renderOrder']) {
        arr.push(json[key]);
    }
    return arr;
}

/**
 *
 * @param {Object} json
 * @returns {String}
 */
function generateForm(json) {
    const arrComp = getComponents(json);
    let formStr = '';
    for (const component of arrComp) {
        formStr += '\t';
        formStr += generateComponent(component);
        formStr += '\n';
    }
    return `<form class="form" action="#" method="post" enctype="multipart/form-data">\n\t${formStr}\n${style()}\n</form>`;
}

/**
 * @param {Object[]} component
 * @returns {String}
 */
function generateComponent(component) {
    let compStr = '';
    for (const tag of component) {
        compStr += generateTag(tag);
        compStr += '\n';
        compStr += '\t';
    }
    return compStr;
}

/**
 *
 * @param {Object} obj
 * @returns {String}
 */
function generateTag(obj) {
    if (obj.type === 'text' || obj.type === 'number') {
        return input(obj);
    } else if (obj.type === 'tel') {
        return inputPhone(obj);
    } else if (obj.type === 'email') {
        return inputEmail(obj);
    } else if (obj.type === 'date') {
        return inputDate(obj);
    } else if (obj.tag === 'select') {
        return select(obj);
    } else if (obj.type === 'radio') {
        return inputRadio(obj);
    } else if (obj.type === 'checkbox') {
        return checkbox(obj);
    } else if (obj.tag === 'p') {
        return paragraph(obj);
    } else if (obj.tag === 'h1') {
        return heading1(obj);
    } else if (obj.type === 'submit') {
        return submit(obj);
    }

}


function input(obj) {
    return `<div class="indent">\n\t\t<label for="${obj.id}">${obj.title}</label>\n\t\t<input id="${obj.id}" type="${obj.type}"/>\n\t</div>`;
}

function inputPhone(obj) {
    return `<div class="indent">\n\t\t<label for="${obj.id}">${obj.title}</label>\n\t\t<input id="${obj.id}" type="${obj.type}"/>\n\t</div>`;
}

function inputEmail(obj) {
    return `<div class="indent">\n\t\t<label for="${obj.id}">${obj.title}</label>\n\t\t<input id="${obj.id}" type="${obj.type}"/>\n\t</div>`;
}

function inputDate(obj) {
    return `<div class="indent">\n\t\t<label for="${obj.id}">${obj.title}</label>\n\t\t<input id="${obj.id}" type="${obj.type}" value="${obj.value}"/>\n\t</div>`;
}

function submit(obj) {
    return `<input class="submit" type="${obj.type}" value="${obj.value}">`
}

function inputRadio(obj) {
    let strRadios = '';
    for (let i = 0; i < obj.title.length; i++) {
        let radio = `\n\t<div>\n\t\t<input id="${obj.id}" type="${obj.type}" value="${obj.value[i]}" name="${obj.name}">\n\t\t<label for="${obj.id}">${obj.title[i]}</label>\n\t</div>`;
        strRadios += radio;
    }
    return strRadios;
}

function select(obj) {
    let strOptions = '';
    for (let i = 0; i < obj.optionTitle.length; i++) {
        let option = `\n\t\t<option value="${obj.optionValue[i]}">${obj.optionTitle[i]}</option>`;
        strOptions += option;
    }
    let selectTag = `<div>\n\t\t<label for="${obj.id}">${obj.title}</label>\n\t\t<select id="${obj.id}">\t${strOptions}\n\t\t</select>\n\t</div>`;
    return selectTag;
}

function checkbox(obj) {
    let strCheckbox = '';
    for (let i = 0; i < obj.title.length; i++) {
        let checkbox = `\n\t<div>\n\t\t<input type="${obj.type}" id="${obj.id}" name="${obj.name}">\n\t\t<label for="${obj.id}">${obj.title[i]}</label>\n\t</div>`;
        strCheckbox += checkbox;
    }
    return strCheckbox;
}

function paragraph(obj) {
    return `\n\t<p ${obj.id}>${obj.title}</p>`;
}

function heading1(obj) {
    return `<h1 ${obj.id}>${obj.title}</h1>`;
}


// style CSS
function style() {
    return (`
    <style>
        /* Remove default margin */
        body,
        h1,
        h2,
        h3,
        h4,
        p {
            margin: 0;
        }
        

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .form {
            display: flex;
            flex-direction: column;
            width: 400px;
            padding: 25px 32px;
            font-family: sans-serif;
            box-shadow: 0 2px 28px rgb(0 0 0 / 21%);
            letter-spacing: 0.5px;
        }

        .form h1 {
            text-align: center;
            padding: 0px 0 15px 0;
        }

        .form p {
            padding: 15px 0 3px 0;
        }

        .form input {
            outline:none;
            padding: 5px;
            margin: 5px 0 5px 0;
            border: 0.5px solid rgb(216, 216, 216); 
        }
        .form input:hover {
            border: 0.5px solid rgb(185, 185, 185); 
        }
        .form input:focus {
            border-color: gold; 
        }

        .form select {
            outline: none;
            width: auto;
            padding: 5px;
            margin: 10px 0 10px 0;
        }

        .form label {
            margin: 0 10px 0 0;
        }

        .form .indent {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .form .submit {
            width: 30%;
            margin: 15px auto;
            padding: 10px 10px;
            background-color: ghostwhite;
        }
        .form .submit:hover {
            cursor: pointer;
            border-color: gold; 
        }
    </style>`
    )
}
console.log(generateForm(json));