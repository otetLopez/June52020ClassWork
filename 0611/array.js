var counter = 0;
for( ; true; ) {
    counter++;
    if (counter === 2) break;
}
console.log("The End");

const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [
    [1, 2, 3],
    ["one", 2, "three"]
]; // array containing arrays
const arr4 = [ // nonhomogeneous array
    { name: "Fred", type: "object", luckyNumbers: [5, 7, 13] },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function() { return "arrays can contain functions too"; },
    "three",
];