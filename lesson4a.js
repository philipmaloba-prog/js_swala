// functions with parameters--they accept arguments
function greet(name){
    console.log(`Aroo` +name)
}
// call function
greet("Alice")//its accepting arguments
greet("Mdagoh")

// Write a js function that is accepting county_name as a parameter and log a message, my county is + county_name
function mycounty(county_name){
    console.log(`my county is` + county_name)
}
mycounty("Nairobi")
mycounty("vihiga")
mycounty("Kisii")

// Create a function  which is accepting num1 and num2 as parameters to find the sum of the two numbers
 
function add(num1,num2){
    let answer= num1 + num2
    console.log(`The answer is ${answer}`)
}
add(20,80)