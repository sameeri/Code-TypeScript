// Normal JavaScript bro

console.log("hello");


// Implicit type casting. We cannot re-assign a variable of one type to another.
// Since the type has not been specified, the compiler assumes the type.
// Hence its called implicit type casting
let x = 20;

// Uncomment to discover an error.
// In VSCode, you have a PROBLEMS panel that you can see all errors. :)
// TypeScript Error : Type _something_ is not assignable to type _something_else" 
 
// x = "a";  


// Explicit type casting. 
// Specifying a type explicitly makes the compiler remember the value's type

let abc: string = "sameeri";

// The function f does not care about what kind of data is passed to it.
function f(val){
    console.log(val);
}

// The function g cares about the specifics of data passed to it. Here it expects a string.
function g(val: string){
   console.log(val);
}

f(abc); // No error
g(abc); // No error, types match

f(123); // No error, this function does not care about types

// TypeScript Error : Argument of type _something_ is not assignable to parameter of type _something_else_
// The following line of code yields an error, since the type expected and type passed are different
//g(123); 


// Here we have defined a function m.
// It takes two values. The first one should be a number, the second one should be a string.
// Maybe the function prints out the string, the number of times
function m(val1: number, val2: string){
   for (let i=0; i < val1; i++){
       console.log(val2);
   }
}

// Lets say we pass the params in the reverse order, meaning a string first and a number next
// Since the types are incorrectly passed, it will result in an error.

// m("sameeri", 2);

// In addition to checking the correct type information, the responsibility of the checker
// is to check the right number of parameters getting passed.

// TypeScript Error : Expected _number_of_arguments_ but got _number_ 
// So the following would result in an error too.

//m(7);