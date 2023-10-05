// console.log("hello world")

// ********Data type in javascript************
/* 
  there having two type of datatype 
  1) primitive datatype 
   i) number
   ii) String
   iii) object
   iv) null
   v) undefinite
   vi) boolean

  2) non primitive datatype
   i) object

*/


// console.log(typeof("dipali"));
// console.log(typeof(1));
// console.log(typeof([1, 2, 3]));
// console.log(typeof(undefined));
// console.log(typeof(true))




// Variable Scope and Declaration
/*
  By using three way we can declare the variables 
  1) let 
  2) const 
  3) var

  scope :
  var having the  functional scope 
  let ans const having block scope.
*/
// by using the var we redeclare the variable name 

// var a = "dipali";
// var a = "arati";
// console.log(a);



// By using the let we not redeclare the variable name it showing the error "variable is already declare"
 
// let a = "dipali";
// let a = "arati";
// console.log(a)


// the const having we not be redeclare the variables

/* scope variable 

global scope 
functional scope 
block scope 
  
*/

// Block Level Element (let , const)

// when we write an blok inside that we declare the any variable we can only acces in the variable.

// {
//     let a = 10 ;
// }
// console.log(a);


// in this example we declare the variable inside block we can not the access the the varible outside the block . block level element is let 



// Global or function scope (var)

// when the var i am write in block that time we access in outside the block also . this is global scope.

// {
//     var a = 10;
// }
// console.log(a);



// Functions and Classes 

/*
   functions : in the javascript we mostly use the functions onlyy .
   by using function our coding handaling is easieast .
   here below example.
*/

// function addNumbers( a, b){
//    return a+b;
// }

// console.log(addNumbers(2 , 4));


// function fact (num){
//     let fact = 1; 
//     for(let i = 1; i<=num; i++){
//         fact*=i;
//     }
//     return fact;
// }

// console.log(fact(5))



/*
   Classes : collection of the object is nothing but a classes. or we can say the blueprint of the object is the classses.


*/

// class User{
//     constructor(name){
//        this.name = name;
//     }
//     sayHello(){
//         return `Hello hi ${this.name}`
//     }
// }

// let User1 = new User("Dipali");
// console.log(User1.sayHello())



/*
  Objects and Array`s
  **Array**
  array is the one of the linear data type. by using array we store the mutilple type of data inside the array.
  array having the indexing nature , array index start with 0 . 
  we access the value by using the index.
  example of the array  is given bellow.

*/

// let arr = [1 ,2, 4, 5, 6];

// console.log(arr[2])


/* Object 
   we store the data in a object by using the key and value pair.eg.{name:"dipali" , age:22}
   example given bellow..
*/ 

// let obj = {
//     FirstName:"dipali",
//     LastName:"jadhav"
// }
// console.log(obj.FirstName)


/*
Hoesting In Javascript
 hosting meance we can use the variable or function before it`s declaration .

 here the var is hoested let const not hoested and function also be hosted.
 
example bellow.

*/ 
// Example 1
//  console.log(a)
//  var a = "dipali";


// Example 2
// console.log(a);
// let a = "dipali"


/*
  1) In exapmle one it should be runthere i am write the var it can be ans is undefine but not an error;
  2) in example 2 it shoud not be run becouse here i am using the let . let is not hoested , and it showing an error 
     we can not use the vaible before it declaration.
*/  



/*
Closers in a Javascript.

closers meance  we write a function inside a function , we access the outer function variable inside the function
 is known as closers. example bellow.
*/ 

// function parent(){
//     let a = 10;
//     function Child(){
//         let b = 20;
//       console.log(a+b)
//     }
//     return Child()
// }

// parent()


/*
   Promises in javascript
   there having three state one pending state , fulfield and rejected state . those having three state. 
   there having two method one is .then and another one is .catch 
   we use the promises for to do async opration. and hnadaling errors also.
*/ 

// fetch("")
// .then((res)=>{})
// .catch((err)=>{})

/* in above example the fetch is return a promise we handle by using .then , .catch if promise resolve then it go 
  .then method . it rejected then it go to .catch method
*/

/*
   Async Await
   the async await is the same as the promise , but it`s syntax is easy than promise now most of the people use asyn await.
   example given below.

*/

// async function asyncFunc (){
//          try {
//             let data = await datawhoReturn1promises;
//          } catch (error) {
            
//          }
// }

/*
   setTimeOut: in javascript
   setTimeOut is the function we use for this ding async operation we want to print hello after 2 second that time we use this.
   example given below.
*/ 

// function sayName(){
//     console.log("Hello");
// }

// setTimeout(sayName, 4000);

/*
  setInterval in javascript 
  setInterval meance when  we want to print the multiple time or we can say the we call the function after perticuler time like 1s or 2s
  example on below.

*/

// function sayName(){
//     console.log("hello dipali")
// }
// setInterval(sayName , 2000)




