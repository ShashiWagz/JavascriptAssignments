'use strict';

const startYear=prompt('Enter starting year');
const endYear=prompt('Enter ending year');

/*
year % 4 === 0
year % 100 === 0
year % 400 === 0
year % 4 === 0 && year %100 !==0 || year % 400 === 0
 */

for (let i = startYear; i < endYear; i++){

  if(i % 4 === 0 && i % 100 !==0 || i % 400 === 0) {
    document.querySelector('#target').innerHTML +=`<li>${i}</li>`;
  }
  }