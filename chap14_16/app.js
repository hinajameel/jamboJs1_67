//======================================== Capter # 14 - 16
function arr() {
    var arr1 = [];
    var arr2 = new Array();
    arr1 = new Array("Student Name");
    document.getElementById('arr').innerHTML = arr1;
}
function fun2() {
    var person = {
        firstName: "",
        lastName: ""
    };
    document.getElementById('fun2').innerHTML = person;
}
function fun3() {
    var fruit = ["Apple", " Mango", " Banana"];
    document.getElementById('frt').innerHTML = fruit;
}
function fun4() {
    var numbr = [1, 2, 3, 4, 5];
    document.getElementById('fun4').innerHTML = numbr;
}
function fun6() {
    var mixedArray = [1, "Bob", "Now is", true];
    document.getElementById('fun6').innerHTML = mixedArray;
}
function fun7() {
    var deg = ['SSC', ' HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
    var mydeg = "";
    for (var i = 0; i <= 7; i++) {
        mydeg += i + ") " + deg[i] + "<br>";
        document.getElementById('fun7').innerHTML = mydeg;
    }
}
// function fun8() {
//     var stName = [ 'Ali','Ahmed', 'Ahsan'];
//     var a1 =Number(prompt('type score'));
//     for (var i = 0 ; i <= 2 ; i++){

//     }
//     var tmarks = 500;
//     var per = "";
//     for (var i = 0 ; i <= 2 ; i++){
//         per += "Score of " + stName[i] + ". Percentage : " + eval(()) + "<br>";
//     document.getElementById('fun8').innerHTML = mydeg;
//     }
// }
// }
function fun9() {
    var deg = ['red', 'yellow', 'blue', 'green'];
    var mydeg = "";
    for (var i = 0; i <= deg.length; i++) {
        mydeg += i + ") " + deg[i] + "<br>";
        document.getElementById('fun9').innerHTML = mydeg;
    }
}
function fun10() {
    var fruits = [22, 14, 10, 12, 25];
    document.getElementById('fun9').innerHTML = "Score of Students : " + fruits;
    fruits.sort();
    document.getElementById('fun10').innerHTML = "Ordered Score of Students : " + fruits;
}
function fun11() {
    var deg = [' Karachi ', ' Lahore', ' Islamabad'];
    var mydeg = "";
    for (var i = 0; i <= 2; i++) {
        mydeg += deg[i];
        document.getElementById('fun11').innerHTML = mydeg;
    }
}
// function cal() {
//     var x=Number(prompt('type a 1st number','type here'));
// 	var y=Number(prompt('type a 2nd number','type here'));
// 	var sum=eval(x+y);
// 	document.getElementById('sum').innerHTML="the Addition of " + x + " and " + y + " is " + sum ; 
// 	var sub=eval(x-y);
// 	document.getElementById('sub').innerHTML="the subtraction of " + x + " and " + y + " is " + sub ; 
// 	var mul =eval(x*y);
// 	document.getElementById('mul').innerHTML="the multiplication of " + x + " and " + y + " is " + mul ; 
// }
