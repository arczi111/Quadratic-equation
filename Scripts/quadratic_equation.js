"use strict";
exports.__esModule = true;
var output = document.querySelector('.programContainer__divResult');
var calculateButton = document.querySelector('.programContainer__calculateButton');
var resetButton = document.querySelector('.programContainer_resetButton');
// -------SOLUTION WITH REGULAR EXPRESSION IN PROGRESS---------
// const singelExpression = document.querySelector('#input-single-expression');
// const proba = "4x^2 + 5x -3"
// const pattern = /(-? ?\d+) ?x\^2 ([+-] ?\d+) ?x ([+-] ?\d+)/g;
// let match = pattern.exec(proba);
// console.log("oki", match[1] );
// console.log("oki", match[2] );
// console.log("oki", match[3] );
// if(pattern.test('4x^2 + 5x -3')){
//     console.log("pasuje", match[1] );
// }else{
//     console.log("cos nie tak ", proba.toString())
// }
//-------------------------------------------------------------------
function calculate() {
    var a = document.querySelectorAll('input')[0].valueAsNumber;
    var b = document.querySelectorAll('input')[1].valueAsNumber;
    var c = document.querySelectorAll('input')[2].valueAsNumber;
    if (Number(document.querySelectorAll('input')[0].value) === 0 && Number(document.querySelectorAll('input')[1].value) === 0 &&
        Number(document.querySelectorAll('input')[2].value) === 0) {
        alert("Please provide numbers.");
    }
    else if (a === 0) {
        alert("Number 'a' cannot be a zero");
        document.querySelectorAll('input')[0].value = "";
        document.querySelectorAll('input')[1].value = "";
        document.querySelectorAll('input')[2].value = "";
    }
    else {
        var discriminant = (b * b) - (4 * a * c);
        output.innerHTML = "Discrimination is: " + discriminant.toString();
        var x1 = 0;
        var x2 = 0;
        switch (true) {
            case discriminant < 0:
                output.innerHTML += ', no solutions.';
                break;
            case discriminant === 0:
                x1 = -b / (2 * a);
                output.innerHTML += ', only one solution ' + x1;
                break;
            case discriminant > 0:
                x1 = (-b - Math.sqrt(discriminant)) / (2 / a);
                x2 = (-b + Math.sqrt(discriminant)) / (2 / a);
                output.innerHTML += (', two solutions: x1: ' + x1.toFixed(1) + ", x2: " + x2.toFixed(1));
                break;
        }
    }
}
function reset() {
    document.querySelectorAll('input')[0].value = "";
    document.querySelectorAll('input')[1].value = "";
    document.querySelectorAll('input')[2].value = "";
    output.innerHTML = "";
}
calculateButton.addEventListener('click', calculate);
resetButton.addEventListener('click', reset);
