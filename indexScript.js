const startOfProject = 1695775081033; //for the nostalgia
console.log(Date.now() - startOfProject + " seconds ago I created this project");
var x = 0, z = 0;
const a = document.getElementById("secs");
let temp;

//runtime Fn's
TimePassed();

//changes the str showing how much time has passed
function TimePassed(){
    setInterval(function(){
        x++;
        a.innerHTML = "You have been on this website for " + (x - z)  + " seconds";
    }, 1000);
    return;
}

//resets timer (it will show zero before 1)
function resetTimer(){
    z = x + 1;
    return;
}

//used in mouseOn() and mouseOff() to get the item in doc
function idFinder(temp){
    temp = document.getElementById(temp);
    return;
}

//changes time back to total time on site
function totalTime(){
    z = 0;
    return;
}