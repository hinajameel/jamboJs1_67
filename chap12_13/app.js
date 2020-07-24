///////////////////////////////// Cap # 12 - 13
function ascii() {

}
function lrger() {
    var num1 = Number(prompt('Type Number to chaeck equal/larger'));
    var num2 = Number(prompt('Type Number to chaeck equal/larger'));
    if (num1 == num2) {
        document.getElementById('lrger').innerHTML = num1 + " is equal to " + num2;
    }
    else if (num1 > num2) {
        document.getElementById('lrger').innerHTML = num1 + " is larger than " + num2;
    }
    else {
        document.getElementById('lrger').innerHTML = num1 + " is smaller than " + num2;
    }
}
function posNegZe() {
    var val = Number(prompt('Type Number to chaeck positive/negative/zero', 'type number'));
    if (val > 0) {
        document.getElementById('posNegZe').innerHTML = val + " is a possitive number ";
    }
    else if (val < 0) {
        document.getElementById('posNegZe').innerHTML = val + " is a negative number ";
    }
    else {
        document.getElementById('posNegZe').innerHTML = " The value is zero ";
    }
}
function vowel() {
    var str = prompt('type a character to check vowel', 'type a character');
    if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u' ||
        str == 'A' || str == 'E' || str == 'I' || str == 'O' || str == 'U') {
        document.getElementById('vowel').innerHTML = "Vowel";
    }
    else {
        document.getElementById('vowel').innerHTML = "Not vowel";
    }
}
function password() {
    var pwd = "MobileApp";
    var userpwd = prompt('type your password', 'Hint: MobileApp');
    if (pwd === userpwd) {
        document.getElementById('pass').innerHTML = "Correct password! ";
    }
    else {
        document.getElementById('pass').innerHTML = "Incorrect password";
    }
}
function time() {
}
function calculator() {
    var a = 20;
    var b = 10;
    document.getElementById('cal1').innerHTML = "The sum of " + a + " and " + b + " is : " + eval(a + b);
    document.getElementById('cal2').innerHTML = "The sub of " + a + " and " + b + " is : " + eval(a - b);
    document.getElementById('cal3').innerHTML = "The mul of " + a + " and " + b + " is : " + a * b;
    document.getElementById('cal4').innerHTML = "The div of " + a + " and " + b + " is : " + a / b;
}