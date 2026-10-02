const studentScore = 69;

if(studentScore >= 90 && studentScore <= 100){
    console.log('Grade: A');
}
else if(studentScore >= 80 && studentScore <= 89){
    console.log('Grade: B');
}
else if(studentScore >= 70 && studentScore <= 79){
    console.log('Grade: C');
}
else if(studentScore >= 60 && studentScore <= 69){
    console.log('Grade: D');
}
else if(studentScore >= 0 && studentScore <= 59){
    console.log('Grade: F');
}
else{
    console.log('Invalid Input')
}

// * A: 90-100
// * B: 80-89
// * C: 70-79
// * D: 60-69
// * F: 0-59