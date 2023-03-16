const container = document.querySelector(".container");
const pwshowhide = document.querySelectorAll(".showhidepw");
const pwfield = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

pwshowhide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () =>{
        pwfield.forEach(pwfield => {
            if(pwfield.type === "password"){
                pwfield.type = "text";
                pwshowhide.forEach(Icon =>{
                    Icon.classList.replace("uil uil-eye-slash", "uil uil-eye");
                })
            }else{
                pwfield.type = "password";

                pwshowhide.forEach(icon =>{
                    icon.classList.replace("uil uil-eye", "uil uil-eye-slash")
                })
            }
        })
    })
});


signUp.addEventListener("click", function () {
    container.classList.add("active");
});

login.addEventListener("click", function(){
    container.classList.remove("active");
});


//form validation
function loginvalidation() {
    let email = document.forms.loginform.email.value;
    let password = document.forms.loginform.password.value;
    let regemail = /^[A-Za-z0-9 ]+$/;
    if(email == "" || !regemail.test(email)){
        alert("please enter your email correctly.");
        email.focus();
        return false;
    }if (password == ""){
        alert("please enter your password.");
        password.focus;
        return false;
    }else{
        alert("Login Successful");
    }
}

function signUpvalidation() {
    let name = document.forms.signUp.name.value
    let email = document.forms.signUpform.email.value;
    let password = document.forms.signUpform.password.value;
    let confirmpsw = document.forms.signUpform.confirmpsw.value;
    let regemail = /^[A-Za-z0-9 ]+$/;
    let regName = /\d+/g;
    if(name == "" || !regName.test(name)){
        alert("Please enter your name.");
        name.focus();
        return false;
    }
    if(email == "" || !regemail.test(email)){
        alert("Please enter your email.");
        email.focus();
        return false;
    }
    if(password == ""){
        alert("Please enter your password.");
        password.focus();
        return false;
    }if(confirmpsw == ""){
        alert("Please confrim your password.");
        confirmpsw.focus();
        return false;
    }
}