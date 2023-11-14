function Strength(password){
    let i = 0;
    if (password.length >= 8) {
        i++;
    }
    if (password.length >= 10){
        i++;
    }
    if (/[A-Z]/.test(password)){
        i++ ;
    }
    if(/[a-z]/.test(password)){
        i++ ;
    }
    if(/[0-9]/.test(password)){
        i++ ;
    }
    if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g.test(password)){
        i++;
    }
    return i;
}

function calculatePasswordStrength(password){
    let strength = 0;
    if(password.length >=8) strength++;
    if(password.length >=10) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[a-z]/.test(password)) strength++;
    if(/\d/.test(password))strength++;
    if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) strength++;
    return strength;

}

function generateStrongPassword(length){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]|;:,.<>?';
    let password = "";
    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;

}

document.getElementById("generatePassword").addEventListener("click", function(){
    const passwordInput = document.getElementById("MakePassword");
    const generatePassword = generateStrongPassword(12);
    passwordInput.value = generatePassword;
    const strength = calculatePasswordStrength(generatePassword);

    const strengthMeter = document.querySelector(".StrengthMeter");
    
    strengthMeter.computedStyleMap.width = (strength * 20) + "%";
    if(strength >= 4){
        strengthMeter.classList.add("strong");
    }else{
        strengthMeter.classList.remove("strong");
    }
   // strengthMeter.className = "StrengthMeter strong";
});

document.getElementById("copyPassword").addEventListener("click", function(){
    const passwordInput = document.getElementById("MakePassword");
    passwordInput.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Password copied to clipboard !");
});

document.getElementById("clearPassword").addEventListener("click", function() {
    const passwordInput = document.getElementById("MakePassword");
    passwordInput.value = "";
});





let container = document.querySelector(".container");
document.addEventListener("keyup", function(e){
    let password = document.querySelector("#MakePassword").value;
    let strength = Strength(password);
    if(strength <= 2){
        container.classList.add("weak");
        container.classList.remove("moderate");
        container.classList.remove("strong");
    }else if (strength >=2 && strength <= 4){
        container.classList.remove("weak");
        container.classList.add("moderate");
        container.classList.remove("strong");
    }else{
        container.classList.remove("weak");
        container.classList.remove("moderate");
        container.classList.add("strong");
    }
});

let password = document.querySelector("#MakePassword");
let show = document.querySelector(".show");
show.onclick = function () {
    if (password.type === "password"){
        password.setAttribute("type", "text");
        show.classList.add("hide");
    }else{
        password.setAttribute("type", "password");
        show.classList.remove("hide");
    }

};