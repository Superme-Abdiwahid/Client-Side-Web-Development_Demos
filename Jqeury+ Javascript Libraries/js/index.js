'use strict';

/* */
/* use jquery to create a function with an onpage load */

$(() =>{
/* select all the p tags */
let p = jQuery('p');

/* set the p  text to be welcome to the page */
p.text = 'welcome to the page';

$('p').text = "Welcome page";

/* Use jquery to create a new tag similar to document.createElement */

let newTag = $('<p> Welcome page </p>');


/* Select the main tag using jquery and append the child the new tag you created. */

$('main').appendChild(newTag);
})
