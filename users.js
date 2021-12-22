document.getElementById('userN').innerHTML = localStorage.getItem('name');
document.getElementById('userP').innerHTML = localStorage.getItem('pass');

//function
function block() {
    localStorage.removeItem("name");
    localStorage.removeItem("pass");
}