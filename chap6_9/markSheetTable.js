
function markSheet() {
var sub1 = prompt("Enter first subject: ");
var sub2 = prompt("Enter  second subject: ");
var sub3 = prompt("Enter third subject: ");
var tSub = 100;
var obMark1 =Number(prompt("Obtained marks in : "+sub1));
var obMark2 =Number(prompt("Obtained marks in : "+sub2));
var obMark3 =Number(prompt("Obtained marks in : "+sub3));

// var tobtmarks = eval(obMark1 + obMark2 + obMark3);
    var per1 = eval((obMark1 * 100) / tSub);
    var per2 = eval((obMark2 * 100) / tSub);
    var per3 = eval((obMark3 * 100) / tSub);
    var totalPer = eval((per1 + per2 + per3) / 3);
    document.getElementById('mth5').innerHTML = "<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>" +
        "<tr><td>" + sub1 + "</td><td>" + tmarks + "</td><td>" + obMark1 + "</td><td>" + per1 + "%</td></tr>" +
        "<tr><td>" + sub2 + "</td><td>" + tmarks + "</td><td>" + obMark2 + "</td><td>" + per2 + "%</td></tr>" +
        "<tr><td>" + sub3 + "</td><td>" + tmarks + "</td><td>" + obMark3 + "</td><td>" + per3 + "%</td></tr>" +
        "<tr><td>" + " " + "</td><td>" + eval(tSub*3) + "</td><td>" + " " + "</td><td>" + totalPer + "%</td></tr>" + "<table/>";
}

