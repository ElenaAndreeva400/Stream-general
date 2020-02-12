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
    income = document.querySelector('.income'), 
    incomeTitle = document.querySelector('.income-title'), 
    expenses = document.querySelector('.expenses'),
    expensesTitle = document.querySelector('.expenses-title'),  
    expensesItems = document.querySelectorAll('.expenses-items'), 
    additionalExpenses = document.querySelector('.additional_expenses'),  
    periodSelect = document.querySelector('.period-select'),  
    additionalExpensesItems = document.querySelector('.additional_expenses-item'),  
    targetAmount = document.querySelector('.target-amount'), 
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    leftSide = document.querySelector('.data'),
    inputs = document.querySelectorAll('input[type=text]'),
    buttonCancel = document.getElementById('cancel'); 

    console.log(inputs);

    let isNumber = function(num) {
      return !isNaN(parseFloat(num)) && isFinite(num); 
    };
    
    let isString = function(str) {
      return (str && str.length !== 0 && (/^[а-яё\s,.]+$/i.test(str)));  
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
                
       this.budget = +salaryAmount.value;  
   
       this.getExpenses(); // создаем объекты appData.expenses ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ
       this.getIncome(); // получаем ЗНАЧЕНИЕ appData.incomeMonth МОДАЛЬНОЕ ОКНО
       this.getExpensesMonth(); // создаем объекты appData.expensesMonth ОБЯЗАТЕЛЬНЫЕ РАСХОДЫ
       this.getAddExpenses();  // создаем массив appData.addExpenses ВОЗМОЖНЫЕ РАСХОДЫ
       this.getAddIncome();  // создаем массив appData.addIncome НАИМЕНОВАНИЯ ВОЗМОЖНЫЕ ДОХОДЫ
       this.getBudget(); // budgetMonth и budgetDay
 
       this.showResult(); 
   },
   getCancel: function() {

              if(event.target.closest('#start')) {
                     buttonStart.style.display = `none`;  // Рассчитать исчезает
                     buttonCancel.style.display = `block`; // появляется Сбросить
                     inputs.forEach(item => {
                           item.setAttribute('readonly', 1);   // блокируем inputs
                           item.style.cssText = `cursor: not-allowed`;
                           
                     });  
                                   
              }  
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

       budgetMonthValue.value = this.budgetMonth;  
       budgetDayValue.value = this.budgetDay; 
       expensesMonthValue.value = this.expensesMonth; 
       additionalExpensesValue.value = this.addExpenses.join(', '); 
       additionalIncomeValue.value = this.addIncome.join(', '); 
       targetMonthValue.value = this.getTargetMonth();  
       incomePeriodValue.value = this.calcPeriod();
       periodSelect.addEventListener('input', function(){    

       incomePeriodValue.value = this.calcPeriod();
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
       const _this = this;
       expensesItems.forEach(function(item){ 
       // console.log(this.getExpenses);
       let nameExpenses = item.querySelector('.expenses-title').value; 
       let amountExpenses = item.querySelector('.expenses-amount').value; 
       if(nameExpenses !== '' && amountExpenses !== '') {
              
              _this.expenses[nameExpenses] = +amountExpenses; 
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
       const _this = this;
       incomeItems.forEach(function(pair) {

              let nameIncome = pair.querySelector('.income-title').value;

              let amountIncome = pair.querySelector('.income-amount').value;

              if(nameIncome !== '' && amountIncome !== '') {

                     _this.income[nameIncome] = +amountIncome;
              }
       });
       
       for (let key in this.income) {
              this.incomeMonth += +this.income[key];  
       }
    },     
   getAddExpenses: function() {
       const _this = this;
       let addExpenses = additionalExpensesItems.value.split(', '); 
       addExpenses.forEach(function(item){
              item = item.trim(); 
              if (item !== ''){ 

              _this.addExpenses.push(item);
              }
       });
   },
   getAddIncome: function() {
       const _this = this;
       additionalIncomeItems.forEach(function(item){
              let itemValue = item.value.trim(); 
              if (itemValue !== ''){
              _this.addIncome.push(itemValue);
              }
       });
   },       
   getExpensesMonth: function() { 

       for(let key in this.expenses) {
       this.expensesMonth += this.expenses[key];
       }            
    },
    getBudget: function() {   

       this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth; 
       this.budgetDay = Math.floor(this.budgetMonth / 30);
    },   
    getTargetMonth: function () {     

       return Math.ceil((targetAmount.value/this.budgetMonth));
     },   
    getInfoDeposit: function() {          
       this.deposit = confirm('Есть ли у вас депозит в банке?');
          if(this.deposit) {
              do {
                     this.percentDeposit = prompt('Какой годовой процент?', 10);
              } while (!isNumber(this.percentDeposit));
              do {
                     this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
              } while (!isNumber(this.moneyDeposit));
          }
    },
    periodChange: function() {

       periodSelect.addEventListener('input', function() {

              periodAmount.textContent = periodSelect.value;  

       });
    },
    calcPeriod: function() {  

       return this.budgetMonth * periodSelect.value;
    },
    reset: function() {
   
            if(event.target.closest('#cancel')){
              this.budget = 0;             
              this.budgetDay=0;               
              this.budgetMonth = 0;             
              this.expensesMonth = 0;          
              this.income = 0;              
              this.income = {};               
              this.incomeMonth = 0;             
              this.addIncome = 0;            
              this.addIncome = [];              
              this.expenses =0;          
              this.expenses = {};             
              this.addExpenses =0;             
              this.addExpenses = [];             
              this.deposit = 0;           
              this.percentDeposit = 0;              
              this.moneyDeposit = 0;            

              inputs.forEach(item => {
                     item.removeAttribute('readonly');
                     item.value = '';
                     item.style.cssText =`cursor: default`;
                     });

              for(let i = 0; i < incomeItems.length; i++) {
                     if(i !== 0) {
                            income.removeChild(incomeItems[i]);
                            }
              }       

              for(let i = 0; i < expensesItems.length; i++) {
                     if(i !== 0) {
                            expenses.removeChild(expensesItems[i]);
                            }
              }

              periodAmount.textContent = 1;
              periodSelect.value = 1;

              buttonStart.style.display = `block`;
              buttonCancel.style.display = `none`;
        
              appData.blockStart();
     }
   }
};
       const validate = target => {
              const placeholder = target.getAttribute('placeholder');
              if (placeholder === 'Сумма') {
                target.value = target.value.replace(/[^0-9]+$/, '');
              } else if ( placeholder === 'Наименование'){
                target.value = target.value.replace(/[^а-я\s.,]/i, '');
              }
            };
            document.addEventListener('input', event => {
              validate(event.target);
            });      

    
appData.blockStart();

btnPlus1.addEventListener('click', appData.addIncomesBlock);
btnPlus2.addEventListener('click', appData.addExpensesBlock);

appData.periodChange();

buttonStart.addEventListener('click', appData.start.bind(appData));

buttonStart.addEventListener('click', appData.getCancel);

buttonCancel.addEventListener('click', appData.reset.bind(appData)); 










