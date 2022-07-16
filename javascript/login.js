const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const signin = document.getElementById("signin");

let dummuUser;
let data;
if(window.localStorage.user) {
    data = JSON.parse(window.localStorage.getItem("user"))
}

userName.value = "";
signin.addEventListener("click" , check)
function check(e){
    e.preventDefault();
    if(userName.value &&  passWord.value) {
        for (let i = 0; i < data.length; i++) {
            if (
                userName.value.trim() === data[i].username &&
                passWord.value.trim() ===  data[i].password
            ) {
                window.localStorage.setItem("login", data[i].username)
                setTimeout(() => {
                    window.location = "../index.html";
                    userName.value = "";
                }, 1000);
            } else {
                alert("userName or passWord wrong");
            }
        }
    }else {
        alert("please fill data")
    }
}
