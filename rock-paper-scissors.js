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

/*
PROCESS PlayGame
    INIT humanScore
    INIT computerScore
    FOR 5 rounds
        INPUT humanChoice
        SET computerChoice
        CALL playRound(humanChoice, computerChoice)
    ENDFOR
    IF humanScore > computerScore THEN
        PRINT "You win!"
    ELSE IF humanScore < computerScore THEN
        PRINT "You lose!"
    ELSE
        PRINT "Draw!"
END
*/
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    /*
    PROCESS PlayRound
        CONVERT humanChoice to lowercase
        CASE humanChoice = rock :
            CASE computerChoice = rock : 
                PRINT "Draw!"
            CASE computerChoice = paper :
                PRINT "You lose! Paper beats Rock"
                INCREMENT computerScore
            CASE computerChoice = scissors :
                PRINT "You win! Rock beats Scissors"
                INCREMENT humanScore
        CASE humanChoice = paper :
            CASE computerChoice = rock :
                PRINT "You win! Paper beats Rock"
                INCREMENT humanScore
            CASE computerChoice = paper :
                PRINT "Draw!"
            CASE computerChoice = scissors :
                PRINT "You lose! Scissors beats Paper"
                INCREMENT computerScore
        CASE humanChoice = scissors :
            CASE computerChoice = rock :
                PRINT "You lose! Rock beats Scissors"
                INCREMENT computerScore
            CASE computerChoice = paper :
                PRINT "You win! Paper beats Scissors"
                INCREMENT humanScore
            CASE computerChoice = scissors :
                PRINT "Draw!"
    END
    */
    function playRound(humanChoice, computerChoice){
        const unifiedHumanChoice = humanChoice.toLowerCase();
        switch(unifiedHumanChoice){
            case "rock":
                switch(computerChoice){
                    case "rock":
                        console.log("Draw!");
                        break;
                    case "paper":
                        console.log("You lose! Paper beats Rock");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("You win! Rock beats Scissors");
                        humanScore++;
                        break;
                }
                break;
            case "paper":
                switch(computerChoice){
                    case "rock":
                        console.log("You win! Paper beats Rock");
                        humanScore++;
                        break;
                    case "paper":
                        console.log("Draw!");
                        break;
                    case "scissors":
                        console.log("You lose! Scissors beats Paper");
                        computerScore++;
                        break;
                }
                break;
            case "scissors":
                switch(computerChoice){
                    case "rock":
                        console.log("You lose! Rock beats Scissors");
                        computerScore++;
                        break;
                    case "paper":
                        console.log("You win! Scissors beats Paper");
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("Draw!");
                        break;
                }
                break;
        }
    }
    
    const rounds = 5;
    let humanSelection;
    let computerSelection;
    for( let i=0 ; i<rounds; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("COM:"+computerSelection);

        playRound(humanSelection, computerSelection);
    }
    console.log("-----");
    console.log("Score: [You:"+humanScore+"] [Com:"+computerScore+"]");
    if(humanScore > computerScore){
        console.log("You win!");
    }else if(humanScore < computerScore){
        console.log("You lose!");
    }else{
        console.log("Draw!");
    }
}

playGame();