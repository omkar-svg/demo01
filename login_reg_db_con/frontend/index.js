const lg_btn = document.getElementById("lg_btn");
const email_area = document.getElementById("email1");
const pass_area = document.getElementById("pass1");
const input_div = document.getElementById("input_div");
const e_w = document.getElementById("n_w")
lg_btn.addEventListener("click", function () {

    let email = email_area.value;
    let pass = pass_area.value;

    if (email.includes("@") && pass) {
        fetch("http://127.0.0.1:8088/user/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                pass: pass
            })
        })  
             .then(res => res.json())
            .then(data => {
                if(data.success){
                    console.log(data);
                    localStorage.setItem("token", data.token);
                    alert("Login successful");
                     window.location.href = "dashbord.html";
                }
                else{
                    alert("Invalid email or password");
                }
            })
            .catch(err => {
                console.log(err);
                alert("Login failed");
            });


    } else {
        alert("Invalid email or password");
    }
});

lg_btn.add