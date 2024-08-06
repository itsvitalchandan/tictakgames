let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let playerX = document.querySelector("#playerX");
let playerO = document.querySelector("#playerO");
let turn0 = true; //playerX , player0
let count = 0; // To Track Draw
let xCount = 0;
let oCount = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () => {
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;        
        }
         box.disabled = true;
         checkWinner();  
         
    });
});
const countWinner = (win0Val)=>{
    if(win0Val === "X"){
        xCount++;
    }else{
        oCount++;
    }
    playerX.innerText = xCount;
    playerO.innerText = oCount;
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let win0Val = boxes[pattern[0]].innerText;
        let win1Val = boxes[pattern[1]].innerText;
        let win2Val = boxes[pattern[2]].innerText;
      
        if(win0Val != "" && win1Val != "" && win2Val !=""){
            if(win0Val === win1Val && win1Val === win2Val){
                showWinner(win0Val);
                countWinner(win0Val);
                return true;
            }
        }
    }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);