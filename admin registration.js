function log_in() {
    const userLogin = document.getElementById('login');
    const userPassword = document.getElementById('password');
    if (userLogin.value == 'admin' && userPassword.value == 'admin') {
        window.open('file:///C:/Users/%D0%90%D1%8F%D0%B3%D0%BE%D0%B7/Desktop/Finaal%20PROJECT%20(2)/FUCKIN%20PROJECT%20(2)/list%20of%20products%20for%20sale.html');
    }
    else{
        alert("Your password or username incorrect!");
        window.open('file:///C:/Users/%D0%90%D1%8F%D0%B3%D0%BE%D0%B7/Desktop/Finaal%20PROJECT%20(2)/FUCKIN%20PROJECT%20(2)/admin%20registration.html');
    }
    
};