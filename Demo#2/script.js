var num1 = parseInt(prompt("Enter Number1:"));
var num2 = parseInt(prompt("Enter Number2:"));

document.getElementById("Number1").innerText = `Number1 is ${num1}`;
document.getElementById("Number2").innerText = `Number2 is ${num2}`;

document.getElementById("Sum").innerText = `Sum is ${num1+num2}`;
document.getElementById("Sum").style.color = "red";
