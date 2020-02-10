'use strict'; 

let buttonStart = document.getElementById('start'),  
    buttonPlus = document.getElementsByTagName('button'), 
    btnPlus1 = buttonPlus[0],   
    btnPlus2 = buttonPlus[1], 
    additionalIncomeItems = document.querySelectorAll('.additional_income-item'), 
    checkboxDepositCheck = document.querySelector('#deposit-check'),  
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],  
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0], 
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],  
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],  
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0], 
    incomePeriodValue = document.querySelector('.income_period-value'), 
    targetMonthValue = document.getElementsByClassName('target_month-value')[0], 
    salaryAmount = document.querySelector('.salary-amount'),  
    incomeTitle = document.querySelector('.income-title'), 
    expensesTitle = document.querySelector('.expenses-title'),  
    expensesItems = document.querySelectorAll('.expenses-items'), 
    additionalExpenses = document.querySelector('.additional_expenses'),  
    periodSelect = document.querySelector('.period-select'),  
    additionalExpensesItems = document.querySelector('.additional_expenses-item'),  
    targetAmount = document.querySelector('.target-amount'), 
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'); 


    let isNumber = function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num); 
    };
    
    let isString = function(str) {
      return (str && str.length !== 0 && (/^[а-яё\s]+$/i.test(str)));  
    };

let appData = {

   budget: 0,     
   budgetDay: 0,   
   budgetMonth: 0,
   expensesMonth: 0,  
   income: {},  
   incomeMonth: 0,
   addIncome: [],  
   expenses: {},    
   addExpenses: [],  
   deposit: 0,
   percentDeposit: 0,
   moneyDeposit: 0,
  
   start: function() {      
                
          appData.budget = +salaryAmount.value;  
          console.log('salaryAmount.value: ', salaryAmount.value);

          appData.getExpenses(); // создаем объекты appData.expenses ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ
          appData.getIncome(); // получаем ЗНАЧЕНИЕ appData.incomeMonth МОДАЛЬНОЕ ОКНО
          appData.getExpensesMonth(); // создаем объекты appData.expensesMonth ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ
          appData.getAddExpenses();  // создаем массив appData.addExpenses ВОЗМОЖНЫЕ РАСХОДЫ
          appData.getAddIncome();  // создаем массив appData.addIncome НАИМЕНОВАНИЯ ВОЗМОЖНЫЕ ДОХОДЫ
          appData.getBudget(); // budgetMonth и budgetDay
       
          appData.showResult(); 
   },
   blockStart: function() {

        buttonStart.setAttribute('disabled', 1);
        buttonStart.style.cssText = `cursor: not-allowed`;
        salaryAmount.addEventListener('input', function(event) {
               if(event.target.value.trim() !== '') {
                      buttonStart.removeAttribute('disabled');
                      buttonStart.style.cssText =`cursor: pointer`;
               } else {
                      buttonStart.setAttribute('disabled', 1);
                      buttonStart.style.cssText = `cursor: not-allowed`;
               }
        });
   },
   showResult: function() {

          budgetMonthValue.value = appData.budgetMonth;  
          budgetDayValue.value = appData.budgetDay; 
          expensesMonthValue.value = appData.expensesMonth; 
          additionalExpensesValue.value = appData.addExpenses.join(', '); 
          additionalIncomeValue.value = appData.addIncome.join(', '); 
          targetMonthValue.value = appData.getTargetMonth();  
          incomePeriodValue.value = appData.calcPeriod();
          periodSelect.addEventListener('input', function(){    
  
            incomePeriodValue.value = appData.calcPeriod();
          });
    },
   addExpensesBlock: function() {
          
          let cloneExpensesBlock = expensesItems[0].cloneNode(true); 
  
          expensesItems[0].parentNode.insertBefore(cloneExpensesBlock, btnPlus2);
      
          expensesItems = document.querySelectorAll('.expenses-items');
    
          if(expensesItems.length === 3) {

              btnPlus2.style.display = 'none';
          }
   },    
   getExpenses: function() {
           expensesItems.forEach(function(item){ 
         
              let nameExpenses = item.querySelector('.expenses-title').value; 
              let amountExpenses = item.querySelector('.expenses-amount').value; 
              if(nameExpenses !== '' && amountExpenses !== '') {
               
                     appData.expenses[nameExpenses] = +amountExpenses; 
              }
          });
   },
   addIncomesBlock: function() {
          
          let cloneIncomeBlock = incomeItems[0].cloneNode(true); 

          incomeItems[0].parentNode.insertBefore(cloneIncomeBlock, btnPlus1);

          incomeItems = document.querySelectorAll('.income-items');

          if(incomeItems.length === 3) {

              btnPlus1.style.display = 'none';
          }
   },
   getIncome: function() { // ДОПОЛНИТЕЛЬНЫЙ ДОХОД

          incomeItems.forEach(function(pair) {
              let nameIncome = pair.querySelector('.income-title').value;

              let amountIncome = pair.querySelector('.income-amount').value;

              if(nameIncome !== '' && amountIncome !== '') {

                    appData.income[nameIncome] = +amountIncome;
              }
          });
             
              for (let key in appData.income) {
                appData.incomeMonth += +appData.income[key];  
              }
    },     
   getAddExpenses: function() {
          
          let addExpenses = additionalExpensesItems.value.split(', '); 
          addExpenses.forEach(function(item){
                item = item.trim(); 
                if (item !== ''){ 

                    appData.addExpenses.push(item);
                }
          });
   },
   getAddIncome: function() {
          additionalIncomeItems.forEach(function(item){
                let itemValue = item.value.trim(); 
                if (itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
          });
   },       
   getExpensesMonth: function() {  
          console.log('Расходы за месяц: ', appData.expensesMonth);   
          for(let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
          }            
    },
    getBudget: function() {       
          appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth; 
          appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },   
    getTargetMonth: function () {       
          return Math.ceil((targetAmount.value/appData.budgetMonth));

     },   
    getInfoDeposit: function() {          
          appData.deposit = confirm('Есть ли у вас депозит в банке?');
          if(appData.deposit) {
              do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
              } while (!isNumber(appData.percentDeposit));
              do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
              } while (!isNumber(appData.moneyDeposit));
          }
    },
    periodChange: function() {
            periodSelect.addEventListener('input', function() {

               periodAmount.textContent = periodSelect.value;  
            });
    },
    calcPeriod: function () {                 
          return appData.budgetMonth * periodSelect.value;
},
};
appData.blockStart();
buttonStart.addEventListener('click', appData.start);

btnPlus1.addEventListener('click', appData.addIncomesBlock);
btnPlus2.addEventListener('click', appData.addExpensesBlock);

appData.periodChange();



//-----------------------------------------
// let appDataInfo = function(appData) {
//   console.log(`Наша программа включает в себя следующие свойства:`); 
//   for (let key in appData) {
//     console.log(`название свойства ${key} и значение свойства ${appData[key]}`);
//   }
// };

// appDataInfo(appData);

//------------------------------------------

