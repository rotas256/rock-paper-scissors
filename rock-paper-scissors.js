/*
PROCESS GetComputerChoice
    CREATE a random number
    CALCULATE random integer from random number
    CALCULATE remainder of a random number divide by 3
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