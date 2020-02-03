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

let isString = function(str) {
  return (str && str.length !== 0 && (/^[a-zа-яё]+$/i.test(str)));  
};

let beautyString = function(str) {
  str = str.ucFirst();
};

let appData = {
   budget: money,     // зарплата
   budgetDay: 0,      // на день
   budgetMonth: 0,
   expensesMonth: 0,  // сумма всех расходов на месяц   // 1_1
   income: {},   // дополнительный источник заработка ОДИН
   addIncome: [],
   expenses: {},      // {'обязательная статья': сумма,}    1
   addExpenses: [],  // наименование возможных расходов 
   deposit: confirm('Есть ли у вас депозит в банке?'),
   percentDeposit: 0,
   moneyDeposit: 0,
   mission: 50000,
   period: 3,
   asking: function() {        //    1

          if(confirm('Есть ли у Вас дополнительный источник заработка?')) {     // дополнительный источник заработка 
            let itemIncome;
            do {
              itemIncome = prompt('Какой у Вас дополнительный заработок?', 'Вышиваю');
            } while (!isString(itemIncome));                                    // проверка на строку

            let cashIncome=0;
            do {
              cashIncome = prompt('Сколько в месяц Вы на этом зарабатываете?', 10000);
            } while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
          }

          appData.addExpenses = prompt(`Перечислите возможные расходы за рассчитываемый период через запятую?`)
          .toLowerCase().split(" "); // при помощи split(" ") разбиваем строку на массив 
          //строк путем разделения строки указанной подстрокой

          let addExpensesUCFirst = function() {   //  Возможные расходы (addExpenses) с заглавной буквы

            let stringAddExpenses = '';  // так как строки в JavaScript неизменяемы.

            // нужно пересоздать строку на основе существующей, с заглавным первым символом:

            for (let i = 0; i < appData.addExpenses.length; i++) {
              let Name = appData.addExpenses[i];
              let First = Name.substring(0, 1).toUpperCase();
              let Leftovers = Name.substring(1, Name.length);
              stringAddExpenses += First + Leftovers + " ";
            }
            console.log(stringAddExpenses);
        };
        
         addExpensesUCFirst();          
          
          for (let i = 0; i < 2; i++) {  
              let expenseName;
              do {
                expenseName = prompt('Введите обязательную статью расходов?');   // проверка на строку
              } while (!isString(expenseName));   
              let expenseAmount=0;
              do {
                  expenseAmount = +prompt('Во сколько это обойдется?');
              } while (!isNumber(expenseAmount));
              appData.expenses[expenseName] = expenseAmount;//{'обязательная статья': сумма,}     расходы объект
          }
        },           
   getExpensesMonth: function() {  // сумма всех расходов на месяц    1_1
    for(let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
      }
      console.log('Расходы за месяц: ', appData.expensesMonth);     
    },
    getBudget: function() {       // чистый доход      2
      appData.budgetMonth = appData.budget - appData.expensesMonth; 
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
      },   
    getTargetMonth: function () {         //  период достижения mission   
      let time = Math.ceil((appData.mission/appData.budgetMonth));
       if (time > 0) {
      console.log(`Цель ${appData.mission} будет достигнута за ${time} месяца.`);
      } 
        if (time < 0) {
      console.log(`Цель ${appData.mission} не будет достигнута.`);
      } return time;
     },   
    getStatusIncome: function() {             // статус дохода
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
  getInfoDeposit: function() {          // данные по депозиту
    if(appData.deposit) {

      // если сразу проверять и годовой процент депозита и сумму 
        // do {
        //   appData.percentDeposit = prompt('Какой годовой процент?', 10);
        //   appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        // } while ((!isNumber(appData.percentDeposit)) && (!isNumber(appData.moneyDeposit)));

        // если проверять порозень
        do {
          appData.percentDeposit = prompt('Какой годовой процент?', 10);
        } while (!isNumber(appData.percentDeposit));
        do {
          appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        } while (!isNumber(appData.moneyDeposit));
    }
  },
  calcSavedMoney: function() {                    //  чистый доход за период
    return appData.period * appData.budgetMonth;
  }
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
appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());