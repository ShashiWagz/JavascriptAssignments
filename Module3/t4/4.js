'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.querySelector('#target');
for(const student of students) {
  //const html = `<option value="${student.id}">${student.name}</option>`;
  //target.innerHTML +=html;
  const option =document.createElement('option')
  option.value=student.id;
  option.innerText=student.name;
  target.appendChild(option);
}