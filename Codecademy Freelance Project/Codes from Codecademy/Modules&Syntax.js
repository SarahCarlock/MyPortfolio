/* secret-messages.html */
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script src="./secret-messages.js"> </script>
  </body>
</html>
/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});

/*secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
modules/
|-- dom-functions.js    <-- new module file */
export { resourceToExportA, resourceToExportB, ...}

/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
export { toggleHiddenElement, changeToFunkyColor };




/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

/* secret-messages.html */
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script type="module" src="./secret-messages.js"> </script>
  </body>
</html>


/* main.js */
/* You are building a simple webpage that makes use of the module module.js. This module declares and exports two functions whose signatures are listed below:

changeText(domElement, newText): changes the text of the provided domElement to the provided newText.
changeToFunkyColor(domElement): changes the color of the provided domElement to a random color.
You will be editing the file main.js. Complete the tasks below:

Import changeText and changeToFunkyColor from ./module.js using the named import syntax.
Call changeText() to change the text of the element stored in the header variable to "I did it!".
Within the callback passed to setInterval, call changeToFunkyColor() passing in the element stored in the header variable.
Note: Upon completing this challenge, the text will change to “I did it!” and will be set to change color every 0.2 seconds. */
import {changeText, changeToFunkyColor} from './module.js'

const header = document.getElementById("header");


changeText(header, "I did it!");

const setInterval = (header) => {
  changeToFunkyColor(header);}, 200);

  /* Multiple choice
The <script> element below loads a JavaScript file which makes use of ES6 import/export syntax. Which of the following changes must be made in order to properly load this module and avoid browser errors?

<script src="./my-module.js"> </script> 

A type="module" attribute must be added to the opening <script> tag.
    <script type="module src="./my-module.js"></script>

Import=
/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour

/*The dom-functions.js module from above could be rewritten to use default exports like so:*/
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;
/* This default exports object can now be used within secret-messages.js like so: */
import domFunctions from '../modules/dom-functions.js';
 
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

/*Quiz: Consider the module below which exports a few values using the default export syntax:

/* article-data.js */
const resources = {
    articleTitle: "Implementing Modules using ES6 Syntax",
    numberOfChallenges: 6,
    minutesToComplete: 45
  }
  export default resources;
/* Which of the following is NOT a valid statement for importing this data? */

import {articleTitle, numberOfChallenges, minutesToComplete } from './article-data.js'