////////////Q1 declare and initialize multi di array
// var arr = [[],[]];
// document.write("_______________________table___________________________<br>")
/////////////q2
var aray = [[0 ,1, 2, 3]+"<br>"+[1,0,1,2]+"<br>"+[2,1,0,1]]
 document.write(aray+"<br>");



////////////Q3 Write a program to print numeric counting from 1 to 10
var n = [1,2,3,4,5,6,7,8,9,10];
for(var nu=0 ; nu< n.length ; nu++){
    document.write(n[nu]+"<br>");
}
document.write("_______________________table___________________________<br>")
///////////////Q4
var table = prompt("Enter a number to get its table ");
var l = prompt("Enter length table ");
for(var t=1 ; t<= l; t++){
    document.write(table+"*"+[t]+"="+(table*t)+"<br>");
}
document.write("_______________________fruits___________________________<br>")
//////////////Q5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var j=0 ; j<=4 ; j++){
    document.write(fruits[j]+"<br>");  
}

for(var i=0 ; i<=4 ;i++){
    document.write("The element at index "+[i]+" is "+ fruits[i]+"<br>");
}

///////////////Q6
