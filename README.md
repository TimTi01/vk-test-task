# Документация разметки JSON:
###### (Пример работы генератора расположены снизу)

</br>

##### JSON состоит из 3-х основных элементов:
* Компонента
* Тэг
* Компонента разметки

</br>

**Компонента** - компонента предназначена для хранения неограниченного кол-ва тэгов. В JSON допускает неограниченное кол-во компонент, а так же произвольное название компоненты. Имя компоненты является ключем для массива с тэгами(объектами). 

*Синтаксис компоненты:*
``` JS
basicComp: [
  {tag: "input", type: "text", id: "first_name", title: "Имя"}, 
  {tag: "input", type: "text", id: "last_name", title: "Фамилия"},
]
```
</br>
</br>

**Тэг** - тэг предназначен для хранения и дальнейшей передачи информации. Тип тэга - `object` в котором хранятся свойства. 

*Синтаксис тэга:*
```JS
{tag: "input", type: "text", id: "first_name", title: "Имя"}
```
#### *Input:* 
* *text:* 
```JS
{tag: "input", type: "text", id: "first_name", title: "Имя"}
```
`tag` - ключ tag отвечает за тэг выводящийся в разметке HTML. Поддерживает такие значения, как "input","h1","p","select". Тип значения всегда - `string`.   
`type` - ключ type отвечает за тип тэга.     
`id` - ключ id будет прописываться в тэге. Значение ключа id задаётся произвольно.       
`title` - значение ключа title передаёт содержимое в тэг label.    

*результат вывода:* 
```HTML
<label for="first_name">Имя</label>
<input id="first_name" type="text"/>
```

* *data:* 
```JS
{tag: "input", type: "date", id: "date", title: "Дата:", value:"2021-06-10"},
```
`value` - ключ value отвечает за вывод даты. Форма даты: гггг-мм-дд.   
   
   
*результат вывода:* 
```HTML
<label for="date">Дата:</label>
<input id="date" type="date" value="2021-06-10"/>
```

#### *Radio:* 
```JS
{tag: "input", id: "", type: "radio", title: ["Да", "Нет"], name: "", value: ["Yes", "No"]},
```
*результат вывода:* 
```HTML
<div>
  <input id="rings" type="radio" value="Yes" name="rings">
  <label for="rings">Да</label>
</div>
<div>
  <input id="rings" type="radio" value="No" name="rings">
  <label for="rings">Нет</label>
</div>
```

#### *Checkbox:* 
```JS
{tag: "input", type: "checkbox", id: "check", title: ["Значение1", "Значение2", "Значение3"], name: "", value: ""},
```
`title` - значение ключа title передаёт заголовки для тэга label. Кол-во чекбоксов зависит от длины массива с значениями. 


*результат вывода:* 
```HTML
<div>
  <input type="checkbox" id="check" name="">
  <label for="check">Значение1</label>
</div>
<div>
  <input type="checkbox" id="check" name="">
  <label for="check">Значение2</label>
</div>
<div>
  <input type="checkbox" id="check" name="">
  <label for="check">Значение3</label>
</div>
```

#### *Select:*
```JS
{tag: "select", id: "", title: "Список", optionValue: ["value1", "value2", "value3"], optionTitle: ["Значение1", "Значение2", "Значение3"]},
```
`optionTitle` - ключ optionTitle передаёт названия для пунктов списка. Кол-во пунктов зависит от длины массива значений ключа optionTitle. 
`optionValue` - ключ optionValue передает значение для тега option. Длина массива значений ключа optionValue должна равняться длине массива значений optionTitle.
*результат вывода:* 
```HTML
<label for="">Список</label>
<select id="">
  <option value="value1">Значение1</option>
  <option value="value2">Значение2</option>
  <option value="value3">Значение3</option>
</select>
```

#### *Submit:* 
```JS
{tag: "input", id: "submit", type: "submit", value:"Отправить"},
```
*результат вывода:* 
```HTML
<input type="submit" value="Отправить">
```
</br>
</br>


**Компонента разметки** - массив с названиями компонент. Компонента разметки предназначена для расстановки компонент. Название компоненты разметки неизменно - renderOrder. 

*Синтаксис компоненты разметки:*
``` JS
renderOrder: [
    "basicComp",
    "additionalComp",
    "preferencesComp"
]
```
---
**Результаты действия генератора:**   
</br>
![image](https://user-images.githubusercontent.com/74858329/121783571-04ce9300-cbb8-11eb-816d-e40d1c2df214.png)   
</br>
JSON:
``` JS
let json = {
    basicComp: [
        {tag: "h1", id: "heading", title: "Анкета на найм к Торину и КО"},
        {tag: "input", type: "text", id: "first_name", title: "Имя"}, 
        {tag: "input", type: "text", id: "last_name", title: "Фамилия"}, 
        {tag: "input", type: "tel", id: "phone", title: "Телефон(ворон)"}, 
        {tag: "input", type: "email", id: "email", title: "Почта"}, 
        {tag: "input", type: "number", id: "age", title: "Возраст"}, 
        {tag: "input", type: "date", id: "date", title: "Дата:", value:"2021-06-10"}, 
    ],

    additionalComp: [
        {tag: "p", id: "paragraph", title: "Волшебные кольца:"},
        {tag: "input", id: "rings", type: "radio", title: ["Есть", "Нет"], name: "rings", value: ["Yes", "No"]}, 
        {tag: "select", id: "listRings", title: "Список колец:", optionValue: ["value1", "value2", "value3", "value4"], optionTitle: ["Кольцо Всевластья", "Кольцо людей", "Кольцо эльфов", "Кольцо гномов"]},
        {tag: "p", id: "paragraph", title: "Специализации:"},
        {tag: "input", type: "checkbox", id: "specialization", title: ["Взломщик", "Воин", "Стрелок", "Маг"], name: "specialization", value: ""},
    ],

    preferencesComp: [
        {tag: "input", id: "submit", type: "submit", value:"Отправить"},
    ],

    renderOrder: [
        "basicComp",
        "additionalComp",
        "preferencesComp"
    ]
}
```
</br>

```HTML
<form class="form" action="#" method="post" enctype="multipart/form-data">
  <h1 heading>Анкета на найм к Торину и КО</h1>
  <div class="indent">
      <label for="first_name">Имя</label>
      <input id="first_name" type="text"/>
  </div>
  <div class="indent">
      <label for="last_name">Фамилия</label>
      <input id="last_name" type="text"/>
  </div>
  <div class="indent">
      <label for="phone">Телефон(ворон)</label>
      <input id="phone" type="tel"/>
  </div>
  <div class="indent">
      <label for="email">Почта</label>
      <input id="email" type="email"/>
  </div>
  <div class="indent">
      <label for="age">Возраст</label>
      <input id="age" type="number"/>
  </div>
  <div class="indent">
      <label for="date">Дата:</label>
      <input id="date" type="date" value="2021-06-10"/>
  </div>


  <p paragraph>Волшебные кольца:</p>

  <div>
      <input id="rings" type="radio" value="Yes" name="rings">
      <label for="rings">Есть</label>
  </div>
  <div>
      <input id="rings" type="radio" value="No" name="rings">
      <label for="rings">Нет</label>
  </div>
  <div>
      <label for="listRings">Список колец:</label>
      <select id="listRings">	
      <option value="value1">Кольцо Всевластья</option>
      <option value="value2">Кольцо людей</option>
      <option value="value3">Кольцо эльфов</option>
      <option value="value4">Кольцо гномов</option>
      </select>
  </div>

  <p paragraph>Специализации:</p>

  <div>
      <input type="checkbox" id="specialization" name="specialization">
      <label for="specialization">Взломщик</label>
  </div>
  <div>
      <input type="checkbox" id="specialization" name="specialization">
      <label for="specialization">Воин</label>
  </div>
  <div>
      <input type="checkbox" id="specialization" name="specialization">
      <label for="specialization">Стрелок</label>
  </div>
  <div>
      <input type="checkbox" id="specialization" name="specialization">
      <label for="specialization">Маг</label>
  </div>

  <input class="submit" type="submit" value="Отправить">
        
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
          margin: 5px auto;
          padding: 5px 10px;
          background-color: #f8f8ff;
      }

      .form .submit:hover {
          cursor: pointer;
          border-color: gold; 
      }
  </style>
</form>
  ```
