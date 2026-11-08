let value = 0;
let tempValue = 0;
let symbol = "";

function clickedPlus() {
    tempValue = parseInt(document.getElementById("display2").innerText);
    console.log("tempValue: " + tempValue);
    if (symbol === "+") {
        value += tempValue;
    } else if (symbol === "-") {
        value = value - tempValue;
    } else if (symbol === "*") {
        value += tempValue;
    } else if (symbol === "/") {
        value += tempValue;
    } else {
        value += tempValue;
        symbol = "+";
    }
    document.getElementById("display1").innerText += "+";
    document.getElementById("display2").innerText = "";
    console.log(value);
}

function clickedMin() {
    tempValue = parseInt(document.getElementById("display2").innerText);
    console.log("tempValue: " + tempValue);
    if (symbol === "+") {
        value += tempValue;
    } else if (symbol === "-") {
        value = value - tempValue;
    } else if (symbol === "*") {
        value += tempValue;
    } else if (symbol === "/") {
        value += tempValue;
    } else {
        value = value - tempValue;
        symbol = "-";
    }
    document.getElementById("display1").innerText += "-";
    document.getElementById("display2").innerText = "";
    console.log(value);
}

function clickedStar() {
    if (value == 0) value = 1;
    tempValue = parseInt(document.getElementById("display2").innerText);
    console.log("tempValue: " + tempValue);
    if (symbol === "+") {
        value += tempValue;
    } else if (symbol === "-") {
        value = value - tempValue;
    } else if (symbol === "*") {
        value *= tempValue;
    } else if (symbol === "/") {
        value = tempValue/value;
    } else {
        value *= tempValue;
        symbol = "*";
    }
    document.getElementById("display1").innerText += "*";
    document.getElementById("display2").innerText = "";
    console.log(value);
}

function clickedDiv() {
    if (value == 0) value = 1;
    tempValue = parseInt(document.getElementById("display2").innerText);
    console.log("tempValue: " + tempValue);
    if (symbol === "+") {
        value += tempValue;
    } else if (symbol === "-") {
        value = value - tempValue;
    } else if (symbol === "*") {
        value *= tempValue;
    } else if (symbol === "/") {
        value = tempValue/value;
    } else {
        value = tempValue / value;
        symbol = "/";
    }
    document.getElementById("display1").innerText += "/";
    document.getElementById("display2").innerText = "";
    console.log(value);
}

function clickedEqual() {
    tempValue = parseInt(document.getElementById("display2").innerText);
    if (symbol === "+") {
        value += tempValue;
    } else if (symbol === "-") {
        value = value - tempValue;
    } else if (symbol === "*") {
        value *= tempValue;
    } else if (symbol === "/") {
        value /= tempValue;
    }
    document.getElementById("display2").innerText = value;
    document.getElementById("display1").innerText = "";
    console.log(value);
    value = 0;
}

function clickedC() {
    document.getElementById("display1").innerText = "";
    document.getElementById("display2").innerText = "";
    value = 0;
    tempValue = 0;
}

function clicked(num) {
    if (document.getElementById("display1").innerText === "") {
        document.getElementById("display2").innerText === "";
    }

    document.getElementById("display1").innerText += num;
    document.getElementById("display2").innerText += num;
}