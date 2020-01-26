let turn = 0;
let sign = "X";
let isGameOver = false;
let textLabel = document.getElementById("heading_text");
let mainContainer = document.getElementById("main_container");

function btn_change(id){
    var btn = document.getElementById("container" + id);
    
    if(btn.textContent == ""){
        btn.textContent = sign;
    } else {
        btn.textContent = sign;
    }
    
    btn.style.pointerEvents = "none";
    
    checkIfThereIsWinner();
    
    if(!isGameOver){
        changeSign();
        changePlayerText(sign);
        if(turn == 9){
            textLabel.textContent = "Draw!";
        }
    }
}
function changeSign(){
    
    if(sign == "O"){
        sign = "X";
    } else {
        sign = "O";
    }
    turn++;
}
function changePlayerText(sign){
    textLabel.textContent = "Player " + sign
}
function checkIfThereIsWinner(){
    checkRow(1,2,3);
    checkRow(4,5,6);
    checkRow(7,8,9);
    
    checkRow(1,4,7);
    checkRow(2,5,8);
    checkRow(3,6,9);
    
    checkRow(1,5,9);
    checkRow(3,5,7);
}
function checkRow(first, second, third){
    
    if(getDivText(first) != ""){
        if(getDivText(first) == getDivText(second) && getDivText(second) == getDivText(third)){
            textLabel.textContent = "The winner is player " + sign + " !";
            isGameOver = true;
            mainContainer.style.pointerEvents = "none";
        }
    }
    
}
function getDivText(id){
    return document.getElementById("container" + id).textContent;
}