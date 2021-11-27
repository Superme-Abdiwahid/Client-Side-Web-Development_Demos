'use strict';

'use strict';

/* Create a varible h1 which Creates a h1 element */
let h1 = document.createElement('h1');


/* Add a textcontent to h1 which displays I am Changing the DOM */


h1.textContent = "I am Changing the DOM";

/* give the h1 a css class of font-size of 16px and a text aligin center */

h1.classList.add('font-size', '16px');
h1.classList.add('text-aligin', 'center');

/* create a main varible which refrence the main elements in the dom */

let main = document.querySelector('main');

/* Create a varible p which referes to all the elements in the HTML of p tags */

let p = document.querySelector('p');


/* Change the main element to append the child of the header element you created above*/

main.appendChild(h1);

/* Clear the elements in the p tag to be empty*/

p.innerHTML = "";

p.setAttribute
/* Create a new tag */

let newTag = document.createElement('p');