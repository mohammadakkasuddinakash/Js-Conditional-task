let ticketPrice = 800;
const age = 60;
const isStudent = false;
if(age < 10 ){
    console.log("You're Children, So Your are Free.,")
    
}
else if(isStudent){
    const discount = ticketPrice * .50;
    ticketPrice = ticketPrice - discount;
    console.log(ticketPrice)
}
else if(age >= 60){
    const discount = ticketPrice * .15;
    ticketPrice = ticketPrice - discount;
    console.log(ticketPrice)
}
else{
    console.log(ticketPrice)
}
