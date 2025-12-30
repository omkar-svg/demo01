

reg_btn = document.getElementById("rg_btn")
name_f = document.getElementById("r_name")
email_f = document.getElementById("r_email")
pass_f = document.getElementById("r_pass")
num_f = document.getElementById("r_num")
e_e = document.getElementById("e_e")


function validateName(value) {
    return value.trim().length > 0;
}

function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validatePassword(value) {
    return value.length >= 6;
}

function validateNumber(value) {
    return /^\d{10}$/.test(value);
}


reg_btn.addEventListener("click", function () {
    uname = name_f.value;
    uemail = email_f.value;
    upass = pass_f.value;
    unum = num_f.value;
    let cnt = 0;

    if (!validateEmail(uemail)) {
        document.getElementById("emailError").style.display = "block";
        r_email.style.borderColor = "red"
    }
    else {
        cnt++;
        r_email.style.borderColor = "green"
        document.getElementById("emailError").style.display = "none";
    }

    if (!validatePassword(upass)) {
        r_pass.style.borderColor = "red"
        document.getElementById("passError").style.display = "block";
    }
    else {
        cnt++;
        r_pass.style.borderColor = "green"
        document.getElementById("passError").style.display = "none";
    }

    if (!validateName(uname)) {
        r_name.style.borderColor = "red"
        document.getElementById("nameError").style.display = "block";
    }
    else {
        cnt++;
        r_name.style.borderColor = "green"
        document.getElementById("nameError").style.display = "none";
    }

    if (!validateNumber(unum)) {
        r_num.style.borderColor = "red"
        document.getElementById("numError").style.display = "block";
    }
    else {
        cnt++;
        r_num.style.borderColor = "green"
        document.getElementById("numError").style.display = "none";
    }
    if (cnt === 4) {

        fetch("http://localhost:8088/user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: uname,
                email: uemail,
                pass: upass,
                mobile_no: unum
            })
        })
            .then(res => res.text())
            .then(data => {
                console.log(data);
                alert("Registration successful ✅");
            })
            .catch(err => {
                console.log(err);
                alert("Server error ❌");
            });


    }
    else {
        setTimeout(function () {
            alert("login fail");
        }, 1000)
    }

});


