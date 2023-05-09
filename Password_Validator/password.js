function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("confirm").value;
    console.log(password,cnfrmPassword);

    let message = document.getElementById("message");
    let valid = document.getElementById("box");

    if(password.length != 0){
        if(password == cnfrmPassword){
            console.log("Password matched. Validation successful");
            valid.textContent = "Password matched. Password validation successful ✅";
            valid.style.backgroundColor = "#FCF3CF";
            valid.style.boxShadow = "0 0 10px black";
            valid.style.padding = "20px 30px";
            valid.style.textAlign = "center";
            valid.style.borderRadius = "10px";
            valid.style.margin = "300px 300px";
        }
        else{
            console.log("Password didn't match. Validation unsuccessful");
            message.textContent = "Password didn't match. Password validation unsuccessful";
            message.style.color = "red";
            message.style.backgroundColor = "white";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}