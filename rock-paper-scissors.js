/*
PROCESS GetComputerChoice
    CREATE a random number from 1 to 3
    IF remainder = 0
        RETURN "rock"
    ELSE IF remainder = 1
        RETURN "paper"
    ELSE
        RETURN "scissors"
END
*/
function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    
    if( rand == 0 ) return "rock"
    else if( rand == 1) return "paper"
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
}

playGame();