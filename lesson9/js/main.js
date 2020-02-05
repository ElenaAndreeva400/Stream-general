
// кнопка "Рассчитать" через id
let button = document.getElementById("start");
console.log(button);
// let button1 = document.querySelector('#start');
// console.log(button1);

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let buttonPlus1 = document.querySelectorAll(".btn_plus")[0];
console.log(buttonPlus1);
let buttonPlus2 = document.querySelectorAll(".btn_plus")[1];
console.log(buttonPlus2);

// Чекбокс по id через querySelector
let checkbox = document.getElementById("deposit-check");
console.log(checkbox);

// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let addIncomeItems = document.querySelectorAll(".additional_income-item");
console.log(addIncomeItems);
let addIncomeItem1 = document.querySelectorAll(".additional_income-item")[0];
console.log(addIncomeItem1);
let addIncomeItem2 = document.querySelectorAll(".additional_income-item")[1];
console.log(addIncomeItem2);

// Каждый элемент в правой части программы через класс, которые имеют в имени класса
// "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">
const rightSideDiv = document.querySelector(".result");
// получаем все искомые inputs с окончанием _value
const rightInputs = rightSideDiv.querySelectorAll(".result-total"); 
console.log(rightInputs);

// f Оставшиеся поля через querySelector каждый в отдельную переменную:
//поля ввода (input) с левой стороны и не забудьте про range.
const leftSideDiv = document.querySelector(".data"); // возвращает список всех дочерних элементов с их потомками

//const leftSideDiv = document.querySelectorAll(".data div"); 
console.log(leftSideDiv);
const leftInputs = leftSideDiv.querySelectorAll("input");
console.log(leftInputs);
const leftRanges = leftSideDiv.querySelectorAll('[type="range"]');
console.log(leftRanges);