'use strict'


/* log out the number 10 */

console.log(10);

/* Create a varible name which is set to your name using both types of varible*/

let name = "Abdiwahid";


//var name = "Abdiwahid";

/* log out both varibles */

console.log(name);

//console.log(name);

/* Think about you get when you log out open up the console */

// change the second name to be a differnet name. Create a new varible to do this 
//and comment out the previous name you duplicated  to get rid of the error 
var name2 = "Abdiwahid";


// log this out 

console.log(name2);

/* Create an array of the numbers 1-10  give the array a name of `array` */
let array = [1,2,3,4,5,6,7,8,9,10];


/* log this out array you created above */

console.log(array);


/* Create a varible twenty which you get by adding 10 + 10 */

let twenty = 10 + 20;

/* loop through your array and change each element in the array by multpying by 2*/
for(let i = 0; i < array.length; ++i){
    array[i] = array[i] * 2;
}

/* log out the updated array */

console.log(array);


/* Create a function which you call makeAdd which takes a value and adds 100 to that value return this */

let makeAdd = function(value){
    return value + 100;
}

/* create a varible multiple which you call your makeAdd function and pass it the value 100 */

let multiple = makeAdd(100);

/* log out the make Add function */

console.log(multiple);