// IIFE=Immediately Invoiked Funvtion Expression
// The function runs immediately
// anything inside the function remains local without polluting the global environment

// example 1
(function(){
    console.log(`It is an immediately invoiked function`)
})();
//  Create a self calling anonymous function to add two numbers
(function(){
    let x=67
    let y=43
    console.log(x+y)
})();

// x and y are only inside IIFE
// outside the function,x does not exist(only available on local environment)