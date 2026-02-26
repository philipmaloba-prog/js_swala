distance=501
if (distance<0){
    console.log("invalid distance");
}
else if(distance>0 && distance<101){
    console.log("pay 5 USD");
}
else if(distance>=101 && distance<501){
    console.log("pay 10 USD");
}
else if(distance>=501 && distance<1001){
    console.log("pay 20 USD");
}
else{
    console.log("pay 40 USD");
}