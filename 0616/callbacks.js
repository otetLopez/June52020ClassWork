console.log("Before timeout: " + new Date()); 
function f() {
    console.log("After timeout: " + new Date());   
}
// setTimeout(f, 60*1000); // one minute 
setTimeout(f,15*1000); //3 secs
// setTimeout()
console.log("I happen after setTimeout!"); 
console.log("Me too!");
    

setTimeout(function() {
    console.log("After timeout in Anonymous: " + new Date());
    }, 20*1000);


const start = new Date();
let i=0;
const intervalId = setInterval(function() {
                                    let now = new Date();
                                    if(now.getMinutes() !== start.getMinutes() || ++i>10)
                                        return clearInterval(intervalId);
                                    console.log(`${i}: ${now}`);
                                }, 2*1000);