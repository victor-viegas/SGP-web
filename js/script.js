document.addEventListener("DOMContentLoaded", function(){
    const loginButton = document.getElementById("login-button");
    const userInput = document.getElementById("user-input");
    const passwordInput = document.getElementById("password-input");
    
    loginButton.addEventListener("click", function(){
        if(userInput.value.trim()== ""){
            alert("PREENCHA OS CAMPOS CORRETAMENTE!");
        }else{
            window.location.href = "./../pages/dashboard.html";
        }
    })
})