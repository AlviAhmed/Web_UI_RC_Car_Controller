
var numUserButtons = document.querySelectorAll(".keyBut").length; 
var numUserButtons2 = document.querySelectorAll(".keyBut2").length; 


document.addEventListener("keydown", alertKey);
function alertKey(event){
    cmdKeys(event.key);
    updateFunc();
}

document.addEventListener("keyup", setNeutral);
var serNum = "Receiver #1";
var cmd = "Neutral";
updateFunc();


document.addEventListener("click",updateFunc);
for (var i = 0; i < numUserButtons; i ++){
    document.querySelectorAll(".keyBut")[i].addEventListener("click",cmdClick);
    
} 
for (var i = 0; i < numUserButtons2; i ++){
    document.querySelectorAll(".keyBut2")[i].addEventListener("click",rxClick);
}

function updateFunc(){
console.log("Command: " + cmd + " RX: " + serNum);
document.querySelector(".output").innerHTML = "Command: " + cmd + " RX: " + serNum;
}

function setNeutral(){
    cmd = "Neutral";
    updateFunc();
}
function cmdKeys(buttonName){
    switch (buttonName){
    case "w":
        cmd = "Forward";
        break;
    case "a":
        cmd =  "Left";
        break;
    case "s":
        cmd =  "Down";
        break;
    case "d":
        cmd = "Right";
        break;
    case "1":
        serNum = "Receiver #1";
        break;
    case "2":
        serNum =  "Receiver #2";
        break;
    default:
        cmd = "Neutral";
    }
}

// function rxKeys(buttonName){
//     switch (buttonName){
//     default:
//         serNum = "Receiver #1";
//     }
// }

function cmdClick(event){
    console.log(event);
    var buttonName=this.innerHTML;
    this.classList.add("pressed");
    cmdKeys(buttonName);
}



function rxClick(){
    // alert("I got clicked");
    // console.log(this.innerHTML);
    var buttonName=this.innerHTML;
    this.classList.add("pressed");
    switch (buttonName){
    case "Receiver #1":
        serNum = "Receiver #1";
        break;
    case "Receiver #2":
        serNum = "Receiver #2";
        break;
    default:
        serNum = "Receiver #1";
    }
}




