import json from './form.js';

/**
 * 
 * @param {Object[]} json 
 * @returns {Object[]}
 */
function getComponents(json) {
    let arr = []
    for(let key in json) {
        arr.push(json[key]);
    }
    return arr;
}

/**
 * 
 * @param {Object} CompArr 
 * @returns {String}
 */
function generateForm(CompArr) {
    let arrComp = getComponents(CompArr);
    let component = generateComponent(arrComp); 
    let formStr = `<form action="#" method="post" enctype="multipart/form-data">\n\t${component}</form>`;

    return formStr;
}

/**
 * @param {Object[]} arrComp
 * @returns {String}
 */
function generateComponent(arrComp) {
    let compStr = '';
    for (let i = 0; i < arrComp.length; i++) {
        compStr += generateTag(arrComp[i]);
        compStr += '\n';
        compStr += '\t';
    }
    return compStr;
}

/**
 * 
 * @param {Object} objectTag
 * @returns {String}
 */
function generateTag(objectTag) {
    let strTag = '';
    for (let i = 0; i < objectTag.length; i++) {
        strTag += inputs(objectTag[i]);
        strTag += '\n';
        strTag += '\t';
    }
    return strTag;
}


function inputs(obj) {
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
    }
}


function input(obj) {
    let text = `\n\t<label for="${obj.id}">${obj.title}</label>\n\t<input id="${obj.id}" type="${obj.type}"/>`;
    return text;
}
function inputPhone(obj) {
    let phone = `\n\t<label for="${obj.id}">${obj.title}</label>\n\t<input id="${obj.id}" type="${obj.type}"/>`;
    return phone;
}
function inputEmail(obj) {
    let email = `\n\t<label for="${obj.id}">${obj.title}</label>\n\t<input id="${obj.id}" type="${obj.type}"/>`;
    return email;
}
function inputDate(obj) {
    let date = `\n\t<label for="${obj.id}">${obj.title}</label>\n\t<input id="${obj.id}" type="${obj.type}" value="${obj.value}"/>`; 
    return date;
}
function inputRadio(obj) {
    let strRadios = '';
    for (let i = 0; i < obj.title.length; i++) {
        let radio = `\n\t<label for="${obj.id}">${obj.title[i]}</label>\n\t<input id="${obj.id}" type="${obj.type}" value="${obj.value[i]}" name="${obj.name}">`;
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
    let selectTag = `<select id="${obj.id}">${strOptions}\n\t</select>`;
    return selectTag;
}
function checkbox(obj) {
    let strCheckbox = '';
    for (let i = 0; i < obj.title.length; i++) {
        let checkbox = `\n\t<label for="${obj.id}">${obj.title[i]}</label>\n\t<input type="${obj.type}" id="${obj.id}" name="${obj.name}">`;
        strCheckbox += checkbox;
    }
    return strCheckbox;
}

function paragraph(obj) {
    let tagParagraph = `\n\t<p>${obj.title}</p>`;
    return tagParagraph;
}

console.log(generateForm(json));