let json = {
    basicComp: [
        {tag: "h1", id: "heading", title: "Анкета на найм к Торину и КО"},
        {tag: "input", type: "text", id: "first_name", title: "Имя"}, 
        {tag: "input", type: "text", id: "last_name", title: "Фамилия"},
        {tag: "input", type: "tel", id: "phone", title: "Телефон(ворон)"},
        {tag: "input", type: "email", id: "email", title: "Почта"},
        {tag: "input", type: "number", id: "age", title: "Возраст"},
        {tag: "input", type: "date", id: "date", title: "Дата:", value:"2021-06-10"},
        {tag: "p", id: "paragraph", title: "Волшебные кольца:"},
        {tag: "input", id: "rings", type: "radio", title: ["Есть", "Нет"], name: "rings", value: ["Yes", "No"]},
        {tag: "p", id: "paragraph", title: "Специализации:"},
        {tag: "input", type: "checkbox", id: "specialization", title: ["Взломщик", "Воин", "Стрелок", "Маг"], name: "specialization", value: ""},
    ],

    additionalComp: [
        {tag: "select", id: "listRings", title: "Список колец:", optionValue: ["value1", "value2", "value3", "value4"], optionTitle: ["Кольцо Всевластья", "Кольцо людей", "Кольцо эльфов", "Кольцо гномов"]},
        {tag: "input", id: "submit", type: "submit", value:"Отправить"},
    ],

    preferencesComp: [],

    renderOrder: [
        "basicComp",
        "additionalComp",
        "preferencesComp"
    ]
}

export default json;