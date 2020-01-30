'use strict'; 

let money = 45000, 
    income = 10000,
    addExpenses = "internet, taxi, utilityExpenses",
    deposit = false,
    mission = 100000,
    period = 12;

money = +prompt('Ваш месячный доход?', 45000);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', "еда, связь");
console.log(addExpenses.toLowerCase().split(", "));
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите первую обязательную статью расходов?', 'еда').toLowerCase();
let amount1 = +prompt('Во сколько это обойдется?', 20000);
let expenses2 = prompt('Введите вторую обязательную статью расходов?', 'связь').toLowerCase();
let amount2 = +prompt('Во сколько это обойдется?', 400);

let getExpensesMonth = function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
    return a+b;
    }
};

console.log(getExpensesMonth(amount1, amount2));

let getAccumulatedMonth = function(a, b) {
    return a-b;
};

console.log(getAccumulatedMonth(money, getExpensesMonth(amount1, amount2)));

let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));

function getTargetMonth(accuMonth) {
    let time = Math.ceil((mission/accuMonth));
        
    console.log(`Цель ${mission} будет достигнута за ${time} месяца.`);
        
    return time;
} 

console.log(getTargetMonth(accumulatedMonth));

let budgetDay = Math.floor(accumulatedMonth/30);
console.log(`Бюджет на день ${budgetDay}`);

let showTypeOf = function(data) {
   console.log(data, typeof(data));
}

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
}

getStatusIncome();