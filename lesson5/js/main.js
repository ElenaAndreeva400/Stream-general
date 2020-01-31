'use strict'; 

let isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num); 
};

let money = 45000, 
    income = 10000,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', "еда, связь"),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 100000,
    period = 12;

let start = function() {
    do { 
        money = +prompt('Ваш месячный доход?'); 
    } while (!isNumber(money));
}; 

start();

console.log(addExpenses.toLowerCase().split(", "));

let expenses = [];

let getExpensesMonth = function() {
    let sum=0;
    for (let i=0; i<2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?', 'еда').toLowerCase();
        if (typeof sum === 'number') {
            sum += +prompt('Во сколько это обойдется?');
        }
    }
    console.log(expenses);
    return sum;
};    

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ', expensesAmount);

let getAccumulatedMonth = function(a, b) {
    return a-b;
};

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

function getTargetMonth(accuMonth) {
    let time = Math.ceil((mission/accuMonth));
     if (time > 0) {
    console.log(`Цель ${mission} будет достигнута за ${time} месяца.`);
    } 
      if (time < 0) {
    console.log(`Цель ${mission} не будет достигнута.`);
    } return time;
} 
getTargetMonth(accumulatedMonth);

let budgetDay = Math.floor(accumulatedMonth/30);
console.log(`Бюджет на день ${budgetDay}`);

let showTypeOf = function(data) {
   console.log(data, typeof(data));
};

showTypeOf(income);
showTypeOf(deposit);
showTypeOf(money);

let getStatusIncome = function() {
    if (budgetDay>=1200) {
        console.log('У Вас высокий уровень дохода');
    } else if (budgetDay>=600) {
        console.log('У вас средний уровень дохода');
    } else if (budgetDay<0) {
        console.log('Что-то пошло не так');
    } else if (budgetDay<600) {
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }  
};

getStatusIncome();