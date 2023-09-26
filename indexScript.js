// Using Date objects in js
let start = Date.now();
console.log(Date.now());
  
// random fn
function greeting(){
    console.log("Hey nerdlets (small nerds)\nThis is a new line");
}
greeting();


//tells time in seconds
let end = Date.now();
let elapsed = end - start;   
console.log(elapsed);
console.log(Date.now());