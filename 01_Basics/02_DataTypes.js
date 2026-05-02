"use strict"; //treat all js code as newer version 
// alert(3+3)  // we are using node js , not browser 
let name = "prithviraj"
let age =18

let state ; // undefines 
/*
number 
bigint
string =""
bolean = true/false
null => standalone value, variable is defined but value is not assign 
undefined => you declare a variable but value is not assign yet 
symbol => for uniqueness 
 */
//console.log(typeof name)// n JavaScript, name is already a predefined 
// global variable (in browsers).so we not use as local variable 
console.log(typeof undefined) ; // undefined
console.log(typeof null) // object 

/*
difference between undefined and null .
Feature	      undefined	           null
Meaning	      Not assigned	    Intentionally empty
Who sets it	  JavaScript	    Developer
Type	      undefined	        object ⚠️ (JS bug)
Use case	  default state	    reset value
 */
