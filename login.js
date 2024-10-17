function formValidation(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === '' || !emailPattern.test(email)){
        alert('Please enter valid email!');
        return;
    }

    if(password === ''){
        alert('Please enter valid password!');
        return;
    }

    alert('Login success...');
}

document.getElementById("buttonL").addEventListener("click", function(event){
    event.preventDefault();
    formValidation();
});