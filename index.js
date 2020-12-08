
var numUserButtons = document.querySelectorAll(".keyBut").length; 
var numUserButtons2 = document.querySelectorAll(".keyBut2").length; 

for (var i = 0; i < numUserButtons; i ++){
    document.querySelectorAll(".keyBut")[i].addEventListener("click",cLick);
}
for (var i = 0; i < numUserButtons2; i ++){
    document.querySelectorAll(".keyBut2")[i].addEventListener("click",cLick2);
}

function cLick(){
    var buttonName=this.innerHTML;
    this.classList.add("pressed");
    switch (buttonName){
    case "w":
        return "Forward";
        break;
    case "a":
        return "Left";
        break;
    case "s":
        return "Down";
        break;
    case "d":
        return "Forward";
        break;
    default:
        return "Neutral";
    }
}

function cLick2(){
    // alert("I got clicked");
    // console.log(this.innerHTML);
    var buttonName=this.innerHTML;
    this.classList.add("pressed");
    return buttonName;
}

function stringResult(cLick,cLick2){
    var sernum = cLick2;
    var cmd = cLick;
    var outString="Sync " + "Receiver #" + sernum + " Command: " + cmd;
    document.querySelector(".output").innerHTML=outString;
}

stringResult(cLick,cLick2);






