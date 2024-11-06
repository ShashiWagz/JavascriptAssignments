'use strict';
const name=prompt('Enter your name');
const target = document.querySelector('#target');
const greeting=`Hello, ${name}`;
target.innerHTML= greeting;