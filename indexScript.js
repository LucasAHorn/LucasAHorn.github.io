const startOfProject = 1695775081033; //for the nostalgia
console.log(Date.now() - startOfProject + " seconds ago I created this project");
var x = 0;
const a = document.getElementById("secs");
//const timerResetButton = document.getElementById("resetTimerButton");
let temp;

//runtime Fn's
TimePassed();

//changes the str showing how much time has passed
function TimePassed(){
    setInterval(function(){
        x++;
        a.innerHTML = "You have been on this website for " + x + " seconds";
    }, 1000);
    return;
}

//resets timer (it will show zero before 1)
function resetTimer(){
    x = -1;
    return;
}

//mouseOver button (ID should be th Fn input)
function mouseOn(temp){
    idFinder(temp);
    temp.style.backgroundColor = "#222288";
    temp.style.color = "#EEEEEE";
    // temp.style.border-style = "inset";
    return;
}

//mouseOff button (ID should be th Fn input)
function mouseOff(temp){
    idFinder(temp);
    temp.style.backgroundColor = "#3333AA";
    temp.style.color = "#EEEEEE";
    return;
}

//used in mouseOn() and mouseOff() to get the item in doc
function idFinder(temp){
    temp = document.getElementById(temp);
    return;
}