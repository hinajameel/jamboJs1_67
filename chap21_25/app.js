///////////Q1
// var fName= prompt("Enter your first name: ");
// var lName= prompt("Enter your last  name: ");
// var fullName = fName + lName;
// document.write("Good Day "+fullName);


///////////Q2:Write a program to take a user input about his
// favorite mobile phone model.
// Find and display the length of user input in your browser

// var mobile = prompt("Write your favourit mobile model","Favorite mobile phone model<br>");
// document.writeln("Your favorite mobile phone model is: "+mobile+"<br>");
// document.writeln("The string length is: "+mobile.length )


// //////q3 Write a program to find the index of letter “n” in the word “Pakistani”
// //  and display the result in your browser .
// var a = "Pakistani"
// for( var s=0 ; s<=a.length ; s++){
//     if (a[s]==="n"){
//         document.write("Index of n is: "+[s]+"<br>");
//     }
// }

// //////Q4 last index of Hello World
// var h = "Hello World";
// var l =h.lastIndexOf("l");
// document.write("The last index of  l is: "+l+"<br>")

// //////Q5 Letter at index-3
// var p = "Pakistani";
// var chat = p.charAt(3);
// document.write("String is: "+p+"<br>");
// document.write("Letter at index-3 is: "+chat+"<br>");



// /////Q6 conct()
var fiName= prompt("Enter your first name: ");
var laName= prompt("Enter your last  name: ");
var fulName =fiName.concat(" ",laName);
document.write("Good Day "+fulName);

// /////////Q7
var city= "Hyderabad";
document.write("<br>City is: "+city+"<br>");
var repl =city.replace("Hyder","Islam") 
document.write("<br>After replacement: "+repl+"<br>");


////////Q8   replace all accurance of and with &
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newmessage = message.replace(/and/g, "&");
document.write("<br>After replacement: "+newmessage+"<br>");


///////Q9
var st = "471";
document.write("Value: "+st);
document.write("<br>Type: "+typeof(st));
var num = Number(st);
document.write("<br>Valeu: "+num);
document.write("<br>Type: "+typeof(num)+"<br>");


////////Q10 upper case
var inp = prompt("Enter some alphabets: ");
document.write("User input: "+inp+"<br>");
document.write("To upper case: "+inp.toUpperCase()+"<br>");



///////Q11 in title case.
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 var inpu = prompt("Enter text for title case: ");
 titleCase(inpu);

//  ////////////Q12 23.36 to string remove decimal point
 var flot = 25.36;
 document.write("<br> Number"+flot+"<br>");
 var stri =flot.toString();
 var subStr = stri.substr(0,2);
 var sub2 = stri.substr(3);
 var cat = subStr + sub2
 document.write("Result: "+cat+"<br>");


//  ////// Q13 a.charCodeAt()
 var name = prompt("Enter user name: ");
 for(var n = 0; n<=name.length ; n++){
     if(name[n]=="@"){
         alert("Enter a valid user name not includinh @");
     }
     else if(name[n]=="."){
        alert("Enter a valid user name not includinh .");
     }
     else if(name[n]==","){
        alert("Enter a valid user name not includinh ,");
     }
     else if(name[n]=="!"){
        alert("Enter a valid user name not includinh !");
     }
     else 
        alert("Welcome "+name);
        break;
 }
 

 //////////Q14

 var ToCheck = prompt("Welkom to backery, what do you want to order");
 var ToCheckn = ToCheck.toLowerCase();
 var snacks = ["cake", "apple pie", "cookie", "chips", "patties"];
for (var i = 0; i <= snacks.length; i++) {
   if (ToCheckn == snacks[i]) {
      alert(snacks[i]+" is found in our bakery at index "+[i]);
      break;
 }
   else{
   alert("We are sorry "+ToCheckn+" is not found in our bakery");
   //break;
}
}


////////Q15 valid passward
var pwd = prompt("Enter Passward: ");
for (var p=0 ; p<=pwd.length ; p++){
   if(pwd.length<6){
      alert("Passward must contain more then six charecter");
   }
   else if(pwd[0]>=48 && pwd[0]<=57){
      alert("Passward must not start with number charecter");
   }
   else if(pwd[p]!= /[a-z]/g){
      alert("Passward must contain Cpital Letter charecter");
   }
   
}