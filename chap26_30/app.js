///////////////////////////////// Chapter # 26 - 30
function ask1() {
    var num = 15.454;
    document.write("Number: " + num + "<br>Round of Value: " + Math.round(num) + "<br>Floor Value: " +
        Math.floor(num) + "<br>Ceil Value: " + Math.ceil(num));
}
function task2() {
    var num = Number(prompt('Type a negative number'));
    document.write("Number: " + num + "<br>Round of Value: " + Math.round(num) + "<br>Floor Value: " +
        Math.floor(num) + "<br>Ceil Value: " + Math.ceil(num));
}
function task3() {
    var num1 = Number(prompt('Type a negative number'));
    var num = 1 * (-num1);
    document.write("Absolute Value of " + num1 + " is: " + num);
}
function task4() {
    var a = Math.random();
    var rNum = (a * 6) + 1;
    var fNum = Math.floor(rNum);
    document.write(fNum);
}
function task7() {
    var a = Number(prompt('your weight'));
    document.write("The weight of user is: " + a + " Kilogram");
}
function task8() {
    var userNum = Number(prompt('type a number.'));
    var hNum = 5;
    if (userNum === hNum) {
        document.write("Congrate!");
    }
    else {
        document.write("Not found!");
    }
}
