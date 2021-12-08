'use strict';


/* Define a function addAll which takes a value and returns sin of the value. Use  arrow  + ES6 features */

let addAll = (value) =>{
    return Math.sin(value);
}

/* Define a varible sin by calling your addAll and passing any value log out the value. */

let sin = addAll(20);

console.log(sin);


/* Define another function Using  arrows  + ES6 features of your choice */

let addCos = (value) =>{
    return Math.cos(value);
}
/* Call your function you created and pass it any value you want log these out*/
let cos = addCos(20);

console.log(cos);


/* Define another function which does anything Using  arrows  + ES6 features */

let addExponet = (value) =>{
    return Math.exp(value);
}

/* Call your function you created and pass it any value you want log these out*/

/* Define another function which does anything Using  arrows  + ES6 features */
let addNegative = (value) =>{
    return value * -20;
}
/* Call your function you created and pass it any value you want log these out*/
let negative = addNegative(10);

console.log(negative);

/* Create an array of numbers from 1-10  store this numbers*/

let numbers = [1,2,3,4,5,6,7,8,9,10];

/* Map each array and store this value in the callback Use  arrows  + ES6 features!!!!  
rather than a simple callback function. In the callback function log out the mapped array
watch how powerful ES6 + arrows are and easier to use.*/

let mappedArray = numbers.map(element =>{
    console.log(numbers);
})
/* Render a class use es6 */
class App{
 constructor(DomParent, element){
  this.DomParent = DomParent;
  this.element = element;
 }
    render(){
     return(
         <div> 
         <h1> Hello world </h1>
         </div>
         );
    }
}
    
}
