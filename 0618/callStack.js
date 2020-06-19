function method_1(a, b) {
    console.log("1 I am in method 1");
    a = 1;
    b = 1;
    console.log(method_2(a, b));
    console.log("2 I am in method 1");
    return "method 1";
}

function method_2(a, b) {
    console.log("1 I am in method 2");
    a = 2;
    b = 2;
    console.log(method_3(a, b));
    console.log("2 I am in method 2");
    return "method 2";
}

function method_3(a, b) {
    console.log("1 I am in method 3");
    a = 3;
    b = 3;
    console.log("A and B values are: " + a + " and " + b);
    console.log("2 I am in method 3");
    return "method 3";
}

console.log(method_1(1,2));