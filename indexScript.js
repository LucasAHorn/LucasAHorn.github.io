// Using Date objects in js
const startOfProject = 1695775081033; //for the nostalgia
console.log(Date.now() - startOfProject + " seconds ago I created this project");
let x = 0;
const a = document.getElementById("secs");

function TimePassed(){
    setInterval(function(){
        a.innerHTML = "You have been on this website for " + x + " seconds";
        x+=1;
        }, 1000);
    return;
}
TimePassed();