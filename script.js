let value = 0;
let tempValue = 0;

function clickedEqual() {
    let val = document.getElementById("display").innerText;
    console.log(val);
    let val1 = parseInt(val);
    console.log(val1);
}

function clickedPlus() {
    document.getElementById("display1").innerText += "+";
    tempValue = parseInt(document.getElementById("display2").innerText);
    value += tempValue;
    document.getElementById("display2").innerText = "";
    console.log(value);
}

function clickedMin() {
    document.getElementById("display1").innerText += "-";
    tempValue = parseInt(document.getElementById("display2").innerText);
    value = -value-tempValue;
    document.getElementById("display2").innerText = "";
    console.log(value);
}

function clickedStar() {
    document.getElementById("display1").innerText += "*";
    tempValue = parseInt(document.getElementById("display2").innerText);
    document.getElementById("display2").innerText = "";
    value *= tempValue;
    console.log(value);
}

function clickedDiv() {
    document.getElementById("display1").innerText += "/";
    tempValue = parseInt(document.getElementById("display2").innerText);
    document.getElementById("display2").innerText = "";
    value /= tempValue;
    console.log(value);
}

function clickedC() {
    document.getElementById("display1").innerText = "";
    document.getElementById("display2").innerText = "";
    value = 0;
    tempValue = 0;
}

function clicked(num) {
    document.getElementById("display1").innerText += num;
    document.getElementById("display2").innerText += num;
}

function clicked1() {
    clicked(1);
}

function clicked2() {
    clicked(2);
}

function clicked3() {
    clicked(3);
}

function clicked4() {
    clicked(4);
}

function clicked5() {
    clicked(5);
}

function clicked6() {
    clicked(6);
}

function clicked7() {
    clicked(7);
}

function clicked8() {
    clicked(8);
}

function clicked9() {
    clicked(9);
}

function clicked0() {
    clicked(0);
}
