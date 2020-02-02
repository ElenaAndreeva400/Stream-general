'use strict'; 

let money = 50000;    // зарплата

let start = function() {      // зарплата
  do { 
      money = prompt('Ваш месячный доход?', 50000); 
  } while (isNaN(money) || money === '' || money === null);
}; 

start();

let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num); 
};

let appData = {
   budget: money,     // зарплата
   budgetDay: 0,      // на день
   budgetMonth: 0,
   expensesMonth: 0,  // сумма всех расходов на месяц   // 1_1
   income: {},
   addIncome: [],
   expenses: {},      // {'обязательная статья': сумма,}    1
   addExpenses: [],  // наименование возможных расходов 
   deposit: confirm('Есть ли у вас депозит в банке?'),
   mission: 50000,
   period: 3,
   asking: function() {        //    1
          appData.addExpenses = prompt(`Перечислите возможные расходы за рассчитываемый период через запятую?`)
          .toLowerCase().split(', ');
          for (let i = 0; i < 2; i++) {  
              let expenseName = prompt('Введите обязательную статью расходов?');
              let expenseAmount=0;
              do {
                  expenseAmount = +prompt('Во сколько это обойдется?');
              } while (!isNumber(expenseAmount));
              appData.expenses[expenseName] = expenseAmount;//{'обязательная статья': сумма,}     
          }
        },           
   getExpensesMonth: function() {  // сумма всех расходов на месяц   // 1_1
    for(let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
      console.log('Расходы за месяц: ', appData.expenses[key]);
      }
    },
    getBudget: function() {  // 2
      appData.budgetMonth = appData.budget - appData.expensesMonth; 
      appData.budgetDay = appData.budgetDay / 30;
      },   
    getTargetMonth: function () {
      let time = Math.ceil((appData.mission/appData.budgetMonth));
       if (time > 0) {
      console.log(`Цель ${appData.mission} будет достигнута за ${time} месяца.`);
      } 
        if (time < 0) {
      console.log(`Цель ${appData.mission} не будет достигнута.`);
      } return time;
     },   
    getStatusIncome: function() {
      if (appData.budgetDay>=1200) {
          console.log('У Вас высокий уровень дохода');
      } else if (appData.budgetDay>=600) {
          console.log('У вас средний уровень дохода');
      } else if (appData.budgetDay<0) {
          console.log('Что-то пошло не так');
      } else if (appData.budgetDay<600) {
          console.log('К сожалению у вас уровень дохода ниже среднего');
      }  
  },
};
appData.asking(); // 1
appData.getExpensesMonth();  // 1_1
appData.getBudget();  //2
appData.getTargetMonth();    //3
appData.getStatusIncome();  // 5


//-----------------------------------------
let appDataInfo = function(appData) {
  console.log(`Наша программа включает в себя следующие свойства:`); 
  for (let key in appData) {
    console.log(`название свойства ${key} и значение свойства ${appData[key]}`);
  }
};

appDataInfo(appData);

//------------------------------------------

