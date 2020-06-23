// Developer : Rosette Lopez Pardillo 
// ID 768425
// Topic: Promise Homework

var isMomHappy = false;

// Promise
var willIGetANewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand : 'Samsung',
                colo : 'black'
            };
            console.log("I want an iphone!");
            resolve(phone)
        } else {
            var reason = new Error('Mom is not happy');
            reject(reason);
        }
    }
).catch((error) => {
    console.log("We have an error: " + error);
  });
 

