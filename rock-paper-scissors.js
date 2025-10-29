/*
PROCESS GetComputerChoice
    CREATE a random decimal
    CALCULATE an integer from random decimal
    CALCULATE remainder of a integer divide by 3
    IF remainder = 0
        RETURN "rock"
    ELSE IF remainder = 1
        RETURN "paper"
    ELSE
        RETURN "scissors"
END
*/
function getComputerChoice(){
    const maxNum = 65535;
    let rand = Math.random();
    let randInt = parseInt(rand*maxNum, 10);
    
    let remainder = randInt % 3;

    if( remainder == 0 ) return "rock"
    else if( remainder == 1) return "paper"
    else return "scissors"
}

/*
PROCESS GetHumanChoice
    INPUT humanChoice
    RETURN humanChoice
END
*/
function getHumanChoice(){
    let humanChoice = prompt("Input your choice :");
    return humanChoice;
}

console.log(getHumanChoice());