

let books = document.querySelector('.books');

let book = document.querySelectorAll('.book');

//-----------подсказка для себя ------------------
// let bookTwo = document.querySelectorAll('.book')[0];
// let bookOne = document.querySelectorAll('.book')[1];
// let bookSix = document.querySelectorAll('.book')[2];
// let bookFour = document.querySelectorAll('.book')[3];
// let bookThree = document.querySelectorAll('.book')[4];
// let bookFive = document.querySelectorAll('.book')[5];


document.write(books.insertBefore(book[1], book[0]));
document.write(books.insertBefore(book[4], book[2]));
document.write(books.insertBefore(book[5], book[2]));
document.write(books.insertBefore(book[3], book[5]));

//-----------------------------------------

document.body.style.backgroundImage = "url('image/you-dont-know-js.jpg')";

//------------------------------------------

let title = document.querySelector('title');
title.innerHTML = "Книга 3. this и Прототипы Объектов";

//-----------------------------------------

let adv = document.querySelector(".adv");
adv.remove();

//------------------------------------------
let ulFirst = document.querySelectorAll('.book')[1].querySelector('ul');

console.log(ulFirst);

let liCollection = ulFirst.querySelectorAll('li');
console.log(liCollection);

document.write(ulFirst.insertBefore(liCollection[6], liCollection[4]));

document.write(ulFirst.insertBefore(liCollection[8], liCollection[4]));

document.write(ulFirst.insertBefore(liCollection[2], liCollection[10]));

//--------------------------------------------------

let ulLast = document.querySelectorAll('.book')[4].querySelector('ul');

console.log(ulLast);

let liUlLast = ulLast.querySelectorAll('li');
console.log(liUlLast);

document.write(ulLast.insertBefore(liUlLast[9], liUlLast[2]));

document.write(ulLast.insertBefore(liUlLast[2], liUlLast[5]));

document.write(ulLast.insertBefore(liUlLast[6], liUlLast[5]));

document.write(ulLast.insertBefore(liUlLast[7], liUlLast[5]));

//---------------------------------------

// книга будет 5-й по индексу

let ulBookSix = document.querySelectorAll('div')[5].querySelector('ul');

let liBookSix = ulBookSix.querySelectorAll('li');

let liChapter8 = document.createElement('li');

liChapter8.innerHTML = "Глава 8: За пределами ES6";

document.write(ulBookSix.insertBefore(liChapter8, liBookSix[9]));




