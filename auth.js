function login(){

let user=document.getElementById("user").value
let pass=document.getElementById("pass").value

let found=USERS.find(u=>u.username===user && u.password===pass)

if(found){

localStorage.setItem("user",user)
localStorage.setItem("role",found.role)

window.location.href="dashboard.html"

}else{

document.getElementById("msg").innerText="Invalid login"

}

}
