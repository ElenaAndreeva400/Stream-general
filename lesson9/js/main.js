
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
const resultTotal1 = document.querySelectorAll(".result-total")[0];
console.log(resultTotal1);
const resultTotal2 = document.querySelectorAll(".result-total")[1];
console.log(resultTotal2);
const resultTotal3 = document.querySelectorAll(".result-total")[2];
console.log(resultTotal3);
const resultTotal4 = document.querySelectorAll(".result-total")[3];
console.log(resultTotal4);
const resultTotal5 = document.querySelectorAll(".result-total")[4];
console.log(resultTotal5);
const resultTotal6 = document.querySelectorAll(".result-total")[5];
console.log(resultTotal6);
const resultTotal7 = document.querySelectorAll(".result-total")[6]; 
console.log(resultTotal7);



// f Оставшиеся поля через querySelector каждый в отдельную переменную:
//поля ввода (input) с левой стороны и не забудьте про range.

const salaryAmount = document.querySelector(".salary-amount");
console.log(salaryAmount);
const incomeTitle = document.querySelector(".income-title");
console.log(incomeTitle);
const incomeAmount = document.querySelector(".income-amount");
console.log(incomeAmount);
const additionalIncomeItem1 = document.querySelectorAll(".additional_income-item")[0];
console.log(additionalIncomeItem1);
const additionalIncomeItem2 = document.querySelectorAll(".additional_income-item")[1];
console.log(additionalIncomeItem2);
const expensesTitle = document.querySelector(".expenses-title");
console.log(expensesTitle);
const expensesAmount = document.querySelector(".expenses-amount");
console.log(expensesAmount);
const additionalExpensesItem = document.querySelector(".additional_expenses-item");
console.log(additionalExpensesItem);
const depositCheck = document.querySelector("#deposit-check");
console.log(depositCheck);
const depositAmount = document.querySelector(".deposit-amount");
console.log(depositAmount);
const depositPercent = document.querySelector(".deposit-percent");
console.log(depositPercent);
const targetAmount = document.querySelector(".target-amount");
console.log(targetAmount);
const periodSelect = document.querySelector(".period-select");
console.log(periodSelect);


const leftRanges = document.querySelector('[type="range"]');
console.log(leftRanges);