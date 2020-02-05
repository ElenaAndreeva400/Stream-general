
// кнопка "Рассчитать" через id
let button = document.getElementById("start");
console.log(button);
// let button1 = document.querySelector('#start');
// console.log(button1);

// Кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let buttonPlus1 = document.getElementsByTagName("button")[0];
console.log(buttonPlus1);
let buttonPlus2 = document.getElementsByTagName("button")[1];
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

// е Каждый элемент в правой части программы через класс, которые имеют в имени класса
// "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">

// получаем каждый input в отдельную переменную
const rightInputs1 = document.querySelectorAll(".result-total")[0];
console.log(rightInputs1);
const rightInputs2 = document.querySelectorAll(".result-total")[1];
console.log(rightInputs2);
const rightInputs3 = document.querySelectorAll(".result-total")[2];
console.log(rightInputs3);
const rightInputs4 = document.querySelectorAll(".result-total")[3];
console.log(rightInputs4);
const rightInputs5 = document.querySelectorAll(".result-total")[4];
console.log(rightInputs5);
const rightInputs6 = document.querySelectorAll(".result-total")[5];
console.log(rightInputs6);
const rightInputs7 = document.querySelectorAll(".result-total")[6]; 
console.log(rightInputs7);



// f Оставшиеся поля через querySelector каждый в отдельную переменную:
//поля ввода (input) с левой стороны и не забудьте про range.
const leftSideDiv = document.querySelector(".data"); // возвращает список всех дочерних элементов с их потомками

//const leftSideDiv = document.querySelectorAll(".data div"); 
console.log(leftSideDiv);
// const leftInputs = leftSideDiv.querySelectorAll("input");
// console.log(leftInputs);

const leftInputs1 = leftSideDiv.querySelectorAll("input")[0];
console.log(leftInputs1);
const leftInputs2 = leftSideDiv.querySelectorAll("input")[1];
console.log(leftInputs2);
const leftInputs3 = leftSideDiv.querySelectorAll("input")[2];
console.log(leftInputs3);
const leftInputs4 = leftSideDiv.querySelectorAll("input")[3];
console.log(leftInputs4);
const leftInputs5 = leftSideDiv.querySelectorAll("input")[4];
console.log(leftInputs5);
const leftInputs6 = leftSideDiv.querySelectorAll("input")[5];
console.log(leftInputs6);
const leftInputs7 = leftSideDiv.querySelectorAll("input")[6];
console.log(leftInputs7);
const leftInputs8 = leftSideDiv.querySelectorAll("input")[7];
console.log(leftInputs8);
const leftInputs9 = leftSideDiv.querySelectorAll("input")[8];
console.log(leftInputs9);
const leftInputs10 = leftSideDiv.querySelectorAll("input")[9];
console.log(leftInputs10);
const leftInputs11 = leftSideDiv.querySelectorAll("input")[10];
console.log(leftInputs11);
const leftInputs12 = leftSideDiv.querySelectorAll("input")[11];
console.log(leftInputs12);
const leftInputs13 = leftSideDiv.querySelectorAll("input")[12];
console.log(leftInputs13);


const leftRanges = leftSideDiv.querySelectorAll('[type="range"]');
console.log(leftRanges);