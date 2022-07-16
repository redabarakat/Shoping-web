const userName = document.getElementById("username");
const Email = document.getElementById("email");
const passWord = document.getElementById("password");
const signup = document.getElementById("signup");
let data;


if(window.localStorage.user) {
    data = JSON.parse(window.localStorage.getItem("user"))
} else {
    data = []
}

signup.addEventListener("click" , newUser)

function newUser(e){
    e.preventDefault()
    if(userName.value == "" || Email.value == "" || passWord.value == "") {
        alert("please fill data")
    } else {
        saveData()
        userName.value = "";
        passWord.value = "";
        Email.value = "";
        setTimeout(() => {
            window.location = "../login.html"
        }, 1000);
    }
}

function saveData(){
    let obj = {
        username: userName.value.trim(),
        password: passWord.value.trim(),
        Email:Email.value.trim()
    }
    data.push(obj)
    window.localStorage.setItem("user",JSON.stringify(data))
}