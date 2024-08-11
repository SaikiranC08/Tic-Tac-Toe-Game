let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelectorAll(".msg-container");
const element = document.getElementById("mydiv");
const msg = document.getElementById("msg");

let turnO = true;

const WinPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame= ()=>{
    turnO= true;
    EnableBox();
    element.classList.add('hide');
}

boxes.forEach((box) =>{
box.addEventListener("click",
    () => {
    if(turnO){
        box.innerText = "O";
        turnO = false;
    } 
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
    });
});  

const disableBox = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const EnableBox = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}


const showwinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    element.classList.remove('hide');
    disableBox();
}


const checkWinner = () => {
    let filledBoxes = 0;
    let winnerFound = false;
    for (let pattern of WinPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""  ){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
               
                showwinner(pos1Val);
                winnerFound = true;
            }

        }
    }
    boxes.forEach((box) => {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    });

    if (filledBoxes === boxes.length && !winnerFound) {
        msg.innerText = "It's a Draw!";
        element.classList.remove('hide');
        disableBox();
    }
};
newGamebtn.addEventListener("click",resetGame);
ResetBtn.addEventListener("click",resetGame);

