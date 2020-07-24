//=========================================== Cap# 10 - 11
function city() {
    var city = prompt('type your city name here', 'your city name is');
    if (city == "karachi") {
        document.getElementById('city').innerHTML = "Welcome to city of light " + city;
    }
    else {
        document.getElementById('city').innerHTML = city + " is not city of light";
    }
}
function gender() {
    var gender = prompt('type your gender here', 'your gender is');
    if (gender == "male") {
        document.getElementById('gender').innerHTML = "Good Morning Sir";
    }
    else if (gender == "female") {
        document.getElementById('gender').innerHTML = "Good Morning";
    }
    else {
        document.getElementById('gender').innerHTML = "Good Morning";
    }
}
function signal() {
    var color = prompt('type color for signal red/yellow/green', 'type red/yelleow/green');
    if (color == "red") {
        document.getElementById('signal').innerHTML = "Must Stop";
    }
    else if (color == "yellow") {
        document.getElementById('signal').innerHTML = "Ready to Move";
    }
    else if (color == "green") {
        document.getElementById('signal').innerHTML = "Move Now";
    }
    else {
        document.getElementById('gender').innerHTML = "No Message For you Please correct your Message";
    }
}
function fuel() {
    var fuel = prompt('type remaining fuel', 'type remining fuel in litter');
    if (fuel <= 0.25) {
        document.getElementById('fuel').innerHTML = "Please refill the fuel in your car";
    }
    else {
        document.getElementById('fuel').innerHTML = "No Need to fill the Fuel";
    }
}
function condition1() {
    var a = 4;
    if (++a === 5) {
        alert("given condition for variable a is true");
    }
}
function condition2() {
    var b = 82;
    if (b++ === 83) {
        alert("given condition for variable b is true");
    }
}
function condition3() {
    var c = 12;
    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }
}
function condition4() {
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
    }
}
function condition5() {
    if (true) {
        alert("True");
    }
    if (false) {
        alert("False");
    }
}
function condition6() {
    if ("car" < "cat") {
        alert("car is smaller than cat");
    }
}
function markSheet() {
    var tMarks = 300;
    var obtMarks = Number(prompt('Type here Obtained Marks (1-300)', 'ontained marks'));
    var percentage = eval((obtMarks * 100) / tMarks);
    if (percentage < 60 && percentage >= 10) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" +
            "Grade : Fail" + "<br>" + "Remarks : Sorry";
    }
    else if (percentage >= 60 && percentage < 70) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" +
            "Grade : B" + "<br>" + "Remarks : You Need to improve";
    }
    else if (percentage >= 70 && percentage < 80) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" +
            "Grade : A" + "<br>" + "Remarks : Goode";
    }
    else if (percentage >= 80 && percentage <= 100) {
        document.getElementById('mSheet').innerHTML = "Total Marks : " + tMarks + "<br>" +
            "Obtained Marks : " + obtMarks + "<br>" + "Percentage : " + percentage + "% <br>" + "Grade : A-One"
            + "<br>" + "Remarks : Excellent";
    }
    else {
        document.getElementById('mSheet').innerHTML = "Grade : Not Existing";
    }
}
function game() {
    var scrtNum = Number(prompt('Type a number from 1 to 10', 'type here'));
    var a = 5;
    if (scrtNum === a) {
        document.getElementById('game').innerHTML = "Bingo! Correct Answer";
    }
    else {
        document.getElementById('game').innerHTML = "“Close enough to the correct answer”";
    }
}
function chNum() {
    var a = Number(prompt('type num to check divisible by 3 or not', 'type number'));
    if (a % 3 == 0) {
        document.getElementById('chNum1').innerHTML = a + " is divisible by 3";
    }
    else {
        document.getElementById('chNum1').innerHTML = a + " is not divisible by 3";
    }
    var b = Number(prompt('type num to check Even/Odd', 'type number'));
    if (b % 2 == 0) {
        document.getElementById('chNum2').innerHTML = b + " is Even Number";
    }
    else {
        document.getElementById('chNum2').innerHTML = b + " is Odd Number";
    }
}
function temperature() {
    var t = Number(prompt('Type num for temperature'));
    if (t > 40) {
        document.getElementById('temp').innerHTML = "“It is too hot outside.”";
    }
    else if (t > 30) {
        document.getElementById('temp').innerHTML = " “The Weather today is Normal.”";
    }
    else if (t > 20) {
        document.getElementById('temp').innerHTML = "“Today’s Weather is cool.”";
    }
    else if (t > 10) {
        document.getElementById('temp').innerHTML = "“Amazing! Today’s weather is so Cool.”";
    }
    else {
        document.getElementById('temp').innerHTML = "Give Correct Temperature";
    }
}