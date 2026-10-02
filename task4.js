const myScore = 82;
const friendScore = 89;

if(myScore > 80){
    if(friendScore >= 80){
        console.log('Go for lunch.');
    }
    else if(friendScore < 80 && friendScore >= 60){
        console.log('Good luck next time.');
    }
    else if (friendScore >= 40 && friendScore < 60){
        console.log('unseen Friend messages');
    }
    else if(friendScore < 40){
        console.log('Block Her')
    }
    else{
        console.log('Invalid Input')
    }

}
else if(myScore > 0 && myScore < 80){
    console.log('Go to home and sleep and act sad')
}
else{
    console.log('Invalid Input')
}

