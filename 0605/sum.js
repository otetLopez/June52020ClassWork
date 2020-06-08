// REPORT on the SUM of all numbers from 1000 going down to 17
// Count down by 11 each time
// ADD UP all the numbers you step over as you are counting down from 1000, 
// going down 11 each time, until you get to 17
// Output the result

sum = 0;
for (i=1000; i>= 17; i-=11) {
    sum += i
}
console.log("Sum is : " + sum);