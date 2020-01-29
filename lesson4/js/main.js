'use strict'; // эта директива появилась в ES5

let money = 45000, 
    income = 10000,
    addExpenses = "internet, taxi, utilityExpenses",
    deposit = false,
    mission = 100000,
    period = 12;


console.log(typeof income);
console.log(typeof deposit);

money = +prompt('Ваш месячный доход?', 45000);
console.log(typeof money);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', "еда, связь");
console.log(addExpenses.length);
console.log(addExpenses.toLowerCase().split(", "));
deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите первую обязательную статью расходов?', 'еда').toLowerCase();
let amount1 = +prompt('Во сколько это обойдется?', 20000);
let expenses2 = prompt('Введите вторую обязательную статью расходов?', 'связь').toLowerCase();
let amount2 = +prompt('Во сколько это обойдется?', 400);

// let budgetMonth = money - amount1 - amount2; // учитывая обязательные расходы
// console.log(`Бюджет на месяц ${budgetMonth}`);

// period = Math.ceil((mission/budgetMonth));
// console.log(`Цель будет достигнута за ${period} месяца.`);

// console.log(`Период равен ${period} месяцев. Цель заработать ${mission} рублей.`);

// let budgetDay = Math.floor(budgetMonth/30);
// console.log(`Бюджет на день ${budgetDay}`);

let budgetDay = 0;

if (budgetDay>=1200) {
    console.log('У Вас высокий уровень дохода');
} else if (budgetDay>=600) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay<0) {
    console.log('Что-то пошло не так');
} else if (budgetDay<600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
}  

// let getExpensesMonth = new Function('obligatory1', 'obligatory2', 'return obligatory1+obligatory2');
// console.log(getExpensesMonth(amount1, amount2));

// let getAccumulatedMonth = new Function('total', 'getExpMonth', 'return total - getExpMonth');  
// console.log(getAccumulatedMonth(money, getExpensesMonth));

// let accumulatedMonth = getAccumulatedMonth();

// function getTargetMonth(accuMonth) {
//     let time = Math.ceil((mission/accuMonth));
//     console.log(`Цель ${mission} будет достигнута за ${time} месяца.`);
//     return time;
// } 

// console.log(getTargetMonth(accumulatedMonth));

//  budgetDay = Math.floor(accumulatedMonth/30);
// console.log(`Бюджет на день ${budgetDay}`);


money = +prompt('Ваш месячный доход?', 45000);
let getExpensesMonth = function(a, b, callback) {
    if(typeof a==='number' && typeof b==='number') {
        callback(a, b);
    }
};

getExpensesMonth(amount1, amount2, function(a, b){
    console.log(a+b);
});

let getAccumulatedMonth = function(a, b) {
    return a-b;
}    

console.log(getAccumulatedMonth(money, getExpensesMonth));



