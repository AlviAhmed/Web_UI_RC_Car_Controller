
var numUserButtons = document.querySelectorAll(".keyBut").length; 
var numUserButtons2 = document.querySelectorAll(".keyBut2").length; 


document.addEventListener("keydown", alertKey);

function alertKey(event){
    cmdKeys(event.key);
    cmdPressAnim(event.key);
    updateFunc();
}

document.addEventListener("keyup", setNeutral);
var serNum = "Receiver #1";
var cmd = "Neutral";
updateFunc();


document.addEventListener("click",updateFunc);
for (var i = 0; i < numUserButtons; i ++){
    document.querySelectorAll(".keyBut")[i].addEventListener("mousedown",cmdClick);
    
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
        cmd =  "Back";
        break;
    case "d":
        cmd = "Right";
        break;
    case "1":
        serNum = "Receiver #1";
        break;
    case "2":
        serNum =  "Receiver #2";
        cmdPressAnim("rx2");
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
    console.log(event.target.innerHTML);
    var buttonName=this.innerHTML;
    cmdPressAnim(buttonName);
    cmdKeys(buttonName);
}

function cmdPressAnim(currentkey){
    var activeKey = "hello";
    if (currentkey == "1"){
        activeKey = document.querySelector(".rx1");
    }
    else if (currentkey == "2"){
        activeKey = document.querySelector(".rx2");
    }
    else{
        activeKey = document.querySelector("."+currentkey);
    }
    activeKey.classList.add("pressed");
    setTimeout(function (){activeKey.classList.remove("pressed");},100);
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



