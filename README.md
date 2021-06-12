# Документация размети JSON:

##### JSON состоит из 3-х основных элементов:
* Компонента
* Тэг
* Компонента разметки

</br>

**Компонента** - компонента предназначена для хранения неограниченного кол-ва тэгов. В JSON допускает неограниченное кол-во компонент, а так же произвольное название компоненты.

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
*input:* 
* *text:* 
```JS
{tag: "input", type: "text", id: "first_name", title: "Имя"}
```
`tag` - ключ tag отвечает за тэг выводящийся в разметке HTML. Синтаксис ключа tag и его значений должен соответствовать синтаксису разметки HTML.  
`type` - ключ type отвечает за тип тэга.  
`id` - ключ id будет прописываться в тэге. Значение ключа id задаётся произвольно.    
`title` - значение ключа title передаёт текст в тэг label 

*результат вывода:* 
```HTML
<label for="first_name">Имя</label>
<input id="first_name" type="text"/>
```

* *number:* 
```JS
{tag: "input", type: "number", id: "age", title: "Возраст"},
```
*результат вывода:* 
```HTML
<label for="age">Возраст</label>
<input id="age" type="number"/>
```

* *email:* 
```JS
{tag: "input", type: "email", id: "email", title: "Почта"},
```
*результат вывода:* 
```HTML
<label for="email">Почта</label>
<input id="email" type="email"/>
```

* *tel:* 
```JS
{tag: "input", type: "tel", id: "phone", title: "Телефон"},
```
*результат вывода:* 
```HTML
<label for="phone">Телефон</label>
<input id="phone" type="tel"/>
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

*radio:* 
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

*checkbox:* 
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

*select:*
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

*submit:* 
```JS
{tag: "input", id: "submit", type: "submit", value:"Отправить"},
```
*результат вывода:* 
```HTML
<input type="submit" value="Отправить">
```
</br>
</br>


**Компонента разметки** - компонента разметки предназначена для расстановки компонент. Название компоненты разметки неизменно - renderOrder. 

*Синтаксис компоненты разметки:*
``` JS
renderOrder: [
    "basicComp",
    "additionalComp",
    "preferencesComp"
]
```



