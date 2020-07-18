//////Q1
// var a =prompt("Enter base: ");
// var b =prompt("Enter power: ");
// function power( a, b ){
//     var p=Math.pow(a,b);
//     return p;
// }

// r = power(a,b);
// document.write("Value of a raised to b is: ",r);

// //////Q leap year funtion
// function isLeapYear() { 
//     var year= document.getElementById("year").value; 
      
//     document.getElementById("GFG").innerHTML  
//         = (year % 100 === 0) ? (year % 400 === 0) 
//                              : (year % 4 === 0); 
// } 

//////////Q3 area of triangle using 2 fun
var x=2 ,y=3,z=4,s;
function S(x,y,z){
    s = (x+y+z)/2; 
    function area(){
        return (s(s-x)(s-y)(s-z));
    }   
       return area();
}
re = S(x,y,z);
document.write("Area of triangle is :",re);