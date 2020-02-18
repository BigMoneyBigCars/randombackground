"use strict";

window.addEventListener("DOMContentLoaded", randomBackground);

function randomColor() {
  console.log("random Color function");
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  console.log(r);
  console.log(b);
  console.log(g);

  return getColorString(r, g, b);
}

function getColorString(r, b, g) {
  console.log("get color string function");
  return `rgb(${r}, ${b}, ${g})`;
}

function randomBackground() {
  document.querySelector("body").style.backgroundColor = randomColor();

  setTimeout(randomBackground, 2000);
}

/* let r = 255;
let g = 88;
let b = 12;

function getColorString(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`;
}

const result = getColorString(r, g, b);

document.querySelector("body").style.backgroundColor = result;

console.log(result); */

/* 
function greeting(firstName) {
  return `hello ${firstName}`;
}

const result = greeting("peter");

const txt = `Greeting is ${result}`;

console.log(result);

console.log(txt); */
//console.log(greeting(`Peter møller Jensen`, `larsen`));

//console.log(greeting(`peter "panik"`, `møller`, `Jensen`));

/* function sayHello(firstName) {
  const value = `Hello ${firstName}`;

  console.log(value);
} */
