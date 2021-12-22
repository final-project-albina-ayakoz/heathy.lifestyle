var x = document.getElementById("login");
var y = document.getElementById("reg");
var z = document.getElementById("btn");

function reg(){
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login(){
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}
//fucntion for registration
function regUser(){
const nameOfUser = document.getElementById('userName');
const passOfUser = document.getElementById('userPass');
localStorage.setItem('name', nameOfUser.value);
localStorage.setItem('pass', passOfUser.value);
}
//function for log in
function logUser(){
const regNameOfUser = document.getElementById('regNameOfUser');
const regPassOfUser = document.getElementById('regPassOfUser');
const nU = localStorage.getItem('name');
const pU = localStorage.getItem('pass');
if (regNameOfUser.value == nU && regPassOfUser.value == pU) {
  window.open('file:///C:/Users/HP/Downloads/FUCKIN%20PROJECT%20(2)/FUCKIN%20PROJECT%20(2)/index.html');
}
else {
          alert("Your password or username incorrect");
      }
  };