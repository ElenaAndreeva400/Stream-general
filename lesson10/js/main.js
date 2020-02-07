

let books = document.querySelector('.books');

let book = document.querySelectorAll('.book');


//-----------подсказка для себя ------------------

// let bookTwo = document.querySelectorAll('.book')[0];
// let bookOne = document.querySelectorAll('.book')[1];
// let bookSix = document.querySelectorAll('.book')[2];
// let bookFour = document.querySelectorAll('.book')[3];
// let bookThree = document.querySelectorAll('.book')[4];
// let bookFive = document.querySelectorAll('.book')[5];
//-------------1-й способ---------------------

// let bookTwo = books.replaceChild(book[1], book[0]);
// let bookSix = books.replaceChild(bookTwo, book[2]);
// let bookFour = books.replaceChild(book[4], book[3]);
// let bookFive = books.replaceChild(bookFour, book[5]);
// books.appendChild(bookFive);
// books.appendChild(bookSix);

//-------------2-й способ---------------------
books.insertBefore(book[1], book[0]);
books.insertBefore(book[4], book[2]);
books.insertBefore(book[5], book[2]);
books.insertBefore(book[3], book[5]);
//-------------3-й способ---------------------

// books.appendChild(book[1]);
// books.appendChild(book[0]);
// books.appendChild(book[4]);
// books.appendChild(book[3]);
// books.appendChild(book[5]);
// books.appendChild(book[2]);

//-------------4-й способ---------------------

// books.appendChild(bookOne);
// books.appendChild(bookTwo);
// books.appendChild(bookThree);
// books.appendChild(bookFour);
// books.appendChild(bookFive);
// books.appendChild(bookSix);
//----------------------------------------------

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

//------------------------------------------

let title = document.querySelector('title');
title.innerHTML = "Книга 3. this и Прототипы Объектов";

//-----------------------------------------

let adv = document.querySelector(".adv");
adv.remove();

//------------------------------------------
let ulFirst = document.querySelectorAll('.book')[1].querySelector('ul');

//console.log(ulFirst);

let liCollection = ulFirst.querySelectorAll('li');
//console.log(liCollection);

ulFirst.insertBefore(liCollection[6], liCollection[4]);

ulFirst.insertBefore(liCollection[8], liCollection[4]);

ulFirst.insertBefore(liCollection[2], liCollection[10]);

//--------------------------------------------------

let ulLast = document.querySelectorAll('.book')[4].querySelector('ul');

//console.log(ulLast);

let liUlLast = ulLast.querySelectorAll('li');
//console.log(liUlLast);

ulLast.insertBefore(liUlLast[9], liUlLast[2]);

ulLast.insertBefore(liUlLast[2], liUlLast[5]);

ulLast.insertBefore(liUlLast[6], liUlLast[5]);

ulLast.insertBefore(liUlLast[7], liUlLast[5]);

//---------------------------------------

// книга будет 5-й по индексу

let ulBookSix = document.querySelectorAll('div')[5].querySelector('ul');

let liBookSix = ulBookSix.querySelectorAll('li');

let liChapter8 = document.createElement('li');

liChapter8.innerHTML = "Глава 8: За пределами ES6";

ulBookSix.insertBefore(liChapter8, liBookSix[9]);






