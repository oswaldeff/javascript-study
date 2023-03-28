// function declaration
// function name(param1, param2) {body ... return;}
function imName(a, b) {
    console.log("I am a function");
}
imName();

// naming
let functionName = "camelcase";

// default parameter
function showMessage(message, from="unknown") {
    console.log(`${message} by ${from}`);
}
showMessage("Hello World");

// reset parameter
function attribute(...args) {
    console.log(args); // 배열로 할당
}
attribute("a", "b", "c");

// Early return
// bad
function upgradeSpeedV1(speed) {
    if (speed.v > 10) {
        
    }
}
// good
function upgradeSpeedV2(speed) {
    if (speed.v <= 10) {
        return; // 조건이 맞지 않으면 빠르게 return
    }
}

// function expression
// anonymous function
const func1 = function () {
    console.log("func1");
}
// named function
const func2 = function namedFunc(input) {
    print(input);
}
func2
// arrow function simple return
const func3 = (a, b) => a + b;
// arrow function complex return
const func4 = (a, b) => {
    return a + b;
}
