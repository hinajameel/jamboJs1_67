///dom element
var mainCont = document.getElementById('main-content')
 console.log(mainCont.childNodes)

//viii..get all child and innerHTMl of class render
var rend = document.getElementsByClassName("render");
console.log(rend)
console.log(rend.nodeValue);

///iv fill element id first-name 
var fName = document.getElementById('first-name');
var fText = document.createTextNode("Hina");
fName.appendChild(fText);
console.log(fName)


//v reapet for id last name & email
var lName = document.getElementById('last-name');
var lText = document.createTextNode("Jameel");
lName.appendChild(lText);
console.log(lName)

var eName = document.getElementById('email');
var eText = document.createTextNode("Hina@gmail.com");
eName.appendChild(eText);
console.log(eName)

//2. use HTML code of question 1 and show the result on browser.
///i. What is node type of element having id “form-content”.
var form_Cont = document.getElementById('form-content')
document.write("<br>Node type of id= form-content is: "+form_Cont.nodeType)

//ii. Show node type of element having id “lastName” and its child node.

var last_Name = document.getElementById('last-name')
document.write("<br>Node type of id= lastName is: "+last_Name.nodeType)


// iii. Update child node of element having id “lastName”.
var lName = document.getElementById('last-name');
var lText = document.createTextNode("M.Jameel");
lName.appendChild(lText);
document.write("<br>Updated node of id= lastName is: "+lName)


//iv. Get First and last child of id “main-content”
var mainCont = document.getElementById('main-content')
console.log(mainCont.firstChild)
console.log(mainCont.lastChild)

// v. Get next and previous siblings of id “lastName”
var lName = document.getElementById('last-name');
console.log(lName.nextSibling)
console.log(lName.previousSibling)
// vi. Get parent node and node type of element having id “email”
var eName = document.getElementById('email');
console.log(eName.nodeType);
console.log(eName.parentNode);