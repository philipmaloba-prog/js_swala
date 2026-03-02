// Anonymous functions--Does not have a name...It is usually assigned as a variable and passed as an argument or used immediately
// Example 1
const greet= function(){
    console.log(`Welcome to the world of technology`)
}
// call the function using the variable name which is greet
greet()

// Create an anonymous function with parameters to check the difference of two numbers
const difference=function(num1,num2){
    let answer=num1-num2
    console.log(`the answer is ${answer} `)
}
difference(18,9)

const product=function(num3,num4){
    let answer=num3*num4
    console.log(`the answer is ${answer}`)
}
product(5,5)