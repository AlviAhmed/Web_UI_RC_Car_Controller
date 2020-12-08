
var numUserButtons = document.querySelectorAll(".keyBut").length; 
var numUserButtons2 = document.querySelectorAll(".keyBut2").length; 

var serNum = "Receiver #1";
var cmd = "Neutral";
updateFunc();

document.querySelector("body").addEventListener("click",updateFunc);
for (var i = 0; i < numUserButtons; i ++){
    document.querySelectorAll(".keyBut")[i].addEventListener("click",cLick);
    
}
for (var i = 0; i < numUserButtons2; i ++){
    document.querySelectorAll(".keyBut2")[i].addEventListener("click",cLick2);
}

function updateFunc(){
console.log("Command: " + cmd + " RX: " + serNum);
document.querySelector(".output").innerHTML = "Command: " + cmd + " RX: " + serNum;
}

function cLick(){
    var buttonName=this.innerHTML;
    this.classList.add("pressed");
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
    default:
        cmd = "Neutral";
    }
}

function cLick2(){
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



