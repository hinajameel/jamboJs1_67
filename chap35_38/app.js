/////////Q1
function currentDate(){
    var dat = new Date();
    document.write(dat);
}
currentDate();


////////Q2
function great(){
   var fiName= prompt("Enter your first name: ");
    var laName= prompt("Enter your last  name: ");
    var fulName =fiName.concat(" ",laName);
    alert("Good Day "+fulName);
}
great();

//////Q3 sum
function sum(){
    var num1 = prompt("Enter a number : ");
    // alert(typeof(num1))
    var num2 = prompt("Enter a number for +,-,*,/: ");
    var add = Number(num1)+Number(num2);
    alert("Sum of two number is: "+add);
}
sum();

///////Q4 calculator
function cal(){
    var n1 = prompt("Enter a number for +,-,*,/: ");
    var n2 = prompt("Enter a number for +,-,*,/: ");
    var op = prompt("What operation do you want from +,-,*,/: ");
    if(op==="+"){
        var ad = Number(n1)+Number(n2); 
        alert("addition: "+ad);
    }
    else if(op==="-"){
        var sub = Number(n1)-Number(n2); 
        alert("subtration: "+sub);
    }
    else if(op==="*"){
        var mul = Number(n1)*Number(n2);
        alert("Multiplication: "+mul); 
    }
    else if(op==="/"){
        var di = Number(n1)/Number(n2);
        alert("division: "+di); 
    }
    else {
        
        alert("Invalid operator"); 
    }
}
cal();


/////Q5 squar
function sq(){
    var n = prompt("Enter a number to find its squar: ");
    var a =  Number(n)
    alert("square is: "+(a*a));
}
sq();


 ///Q6 Fatorial of num
 var x;
 var ans = 1;
 function factorial(x){
    if(x==1 || x==0){
        return ans;
    }
    else{
        for (var f = x ; f>=1 ; f--){
            ans=ans*f;
    }
        return ans;
    }
 } 
 x =prompt("Enter a number to find its factorial: ");
 ans = factorial(x);
 alert("factorial of "+ x +" is: "+ans);


 ///////Q7



 ////Q8nested function that computes hypotenuse
//  var b;
//  var p;
//  var hyp;
//  function hypo(){
//     squ(3,5);
//     hyp = Math.sqrt(hSq)
//     return hyp;
//     function squ(b,p){
//         var hSq = b*b + p*p 
//         return hSq;
//         }
//  }
// //  b =prompt("Enter base of triangle: ");
// //  p =prompt("Enter perpendicular of triangle: ");
//  hy = hypo();
//  alert("Hypotanous of right angle triangle is: "+hy);
