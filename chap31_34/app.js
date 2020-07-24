////////////////////////////////////////// Capter # 31 - 34
function dateTask1() {
    var currdate = new Date();
    document.write(currdate);
}
function dateTask2() {
    var monthName = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var currDate = new Date();
    var currMonth = currDate.getMonth();
    var month = monthName[currMonth];
    alert("Current Month : " + month);
}
function dateTask3() {
    var dayName = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var currdate = new Date();
    var currday = currdate.getDay();
    var day = dayName[currday];
    alert("Today is : " + day);
}
function dateTask4() {
    var dayName = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var cdate = new Date();
    var cday = cdate.getDay();
    var day = dayName[cday];
    if (day == 'sun' || day == 'sat') {
        alert("It's Fun day ");
    }
}
function dateTask5() {
    var dat = new Date();
    var day = dat.getDate();
    if (day <= 15) {
        document.write("First Fifteenth days");
    }
    else {
        document.write("Last day of month");
    }
}
function dateTask6() {
    var dat = new Date();
    var speDate = new Date("jan 01,1970");
    var t = speDate.getTime();
    var mint = t / (1000 * 60);
    document.write("Current Date: " + dat + "<br>Elapsed millisecond since january 1, 1970: " + t + "<br>Elapsed minutes since january 1, 1970: " + mint)
}
function dateTask7() {
    var dat = new Date();
    var hr = dat.getHours();
    if (hr <= 12) {
        document.write(hr + " AM");
    }
    else {
        document.write(hr + " PM");
    }
}
function dateTask8() {
    var preDate = new Date("dec 31,2020");
    document.write(preDate);
}
function dateTask9() {
    var a = new Date();
    var atime = a.getTime();
    var b = new Date("june 18, 2015");
    var btime = b.getTime();
    var d = atime - btime;
    var day = Math.round(d / (1000 * 60 * 60 * 24 * 12));
    document.write(day + " days have passed since ramdan 1st, 2015");
}
function dateTask10() {
    var a = new Date();
    var atime = a.getTime();
    var b = new Date("january 1, 2015");
    var btime = b.getTime();
    var d = atime - btime;
    var sec = Math.round(d / (1000));
    document.write("on reference date " + a + "<br>" + sec + " seconds has passed since beginning of 2015")
}
function dateTask11() {
    //smjh nh aya proper result jesa chah rhi nh mila :(
    var a = new Date();
    var b = a.getHours();
    var x = b - 1;
    document.write("current date " + a + "<br>1 an hour ago " + x)
}
function dateTask12() {
    var a = new Date();
    var currDate = a.getFullYear();
    var yearBack = currDate - 100;
    document.write("current date: " + a + "<br>100 year back: " + yearBack);
}
function dateTask13() {
    var age = prompt('type your age');
    var currDate = new Date();
    var year = currDate.getFullYear();
    var currAge = year - age;
    document.write(currAge);
}
function dateTask14() {
    var nam = prompt('customer name');
    var month = prompt('current month');
    var u = prompt('no. of unit');
    var chPu = prompt('charges per unit');
    var t = u * chPu ;
    var p = prompt('late payment charges');
    var gross = t * p;
    document.write("<h1>K-Electric Bill</h1><br>Customer Name: " + nam + "<br>Current Month: " + month  + "<br>No. of unnit: " + u +
        "<br>Chrges per unit: " + chPu  + "<br><br>Net Amount payable(Within Due Date: )" + t + "<br>Late payment Charges: " + p +
        "<br>Gross Amount Payable (After Due Date): " + gross );
}
