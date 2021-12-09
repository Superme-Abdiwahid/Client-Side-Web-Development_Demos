'use strict';

'use strict';

/* Select all form elemnt from HTML */

let form = document.querySelector('form');


/* Listen for an event of click and inside the callback function.
Prevent a defualt on the event
set the form element to be alert-danger css class and a log off the event passed */

form.addEventListener('click', event =>{
    event.preventDefault();
    form.classList.add('alert-danger');
    console.log("Event log is = ", " ", event);
})


/* Listen for an event for when a button is submiited and in the callback 
function log out "Form submiited. Call the prevent defualt to stop the 
button from doing its normal behavior*/

document.querySelector('submit').addEventListener('submit', event =>{
    event.preventDefault();
    console.log(event);
})
