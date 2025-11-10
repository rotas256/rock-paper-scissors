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
    const body = document.querySelector('body');

    /*
    PROCESS CheckResult
        IF humanScore reaches 5 points
            PRINT "You Win!"
        ELSE IF computerScore reaches 5 points 
            PRINT "You lose!"
    END
    */
    function showCurrentScore(){
        const currentScore = document.createElement("div");
        currentScore.textContent = "[Score] You: "+humanScore+", Com: "+computerScore;
        body.appendChild(currentScore);
        if( humanScore === 5 ){
            const gameResult = document.createElement('div');
            gameResult.textContent = "---- You reach 5 points. You win!! ----";
            body.appendChild(gameResult);
        } else if( computerScore === 5 ){
            const gameResult = document.createElement('div');
            gameResult.textContent = "---- Computer reaches 5 points. You lose!! ----";
            body.appendChild(gameResult);
        }
    }

    
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
        const roundMessage = document.createElement('div');
        const roundChoices = document.createElement('p');
        const roundResult = document.createElement('p');
        roundChoices.textContent = "YOU: "+humanChoice+", COM: "+computerChoice;
        roundMessage.appendChild(roundChoices);
        roundMessage.appendChild(roundResult);
        body.appendChild(roundMessage);

        switch(humanChoice){
            case "rock":
                switch(computerChoice){
                    case "rock":
                        roundResult.textContent = "Draw!";
                        break;
                    case "paper":
                        roundResult.textContent = "You lose! Paper beats Rock";
                        computerScore++;
                        break;
                    case "scissors":
                        roundResult.textContent = "You win! Rock beats Scissors";
                        humanScore++;
                        break;
                }
                break;
            case "paper":
                switch(computerChoice){
                    case "rock":
                        roundResult.textContent = "You win! Paper beats Rock";
                        humanScore++;
                        break;
                    case "paper":
                        roundResult.textContent = "Draw!";
                        break;
                    case "scissors":
                        roundResult.textContent = "You lose! Scissors beats Paper";
                        computerScore++;
                        break;
                }
                break;
            case "scissors":
                switch(computerChoice){
                    case "rock":
                        roundResult.textContent = "You lose! Rock beats Scissors";
                        computerScore++;
                        break;
                    case "paper":
                        roundResult.textContent = "You win! Scissors beats Paper";
                        humanScore++;
                        break;
                    case "scissors":
                        roundResult.textContent = "Draw!";
                        break;
                }
                break;
        }
        showCurrentScore();
    }

    /*
    PROCESS CreateButtons
        CREATE 3 buttons one for each selection.
        ADD an event listener to the buttons
            that call playRound func with the correct playerSelection
    END
    */
    function createButtons(){        
        const hands = ["rock", "paper", "scissors"];
        let btnCreateError = hands.reduce((result, hand) => {
            try {
                const currentButton = document.createElement('button');
                currentButton.textContent = hand;
                body.appendChild(currentButton);
                currentButton.addEventListener('click',(e)=>{
                    e.preventDefault();
                    playRound(hand, getComputerChoice());
                });
            } catch(e) {
                console.log("ERROR:", e.message);
                return true;
            }
            return result;
        }, false);
        console.log(btnCreateError);
    }

    createButtons();
}

playGame();