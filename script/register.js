
document.getElementById("signup-submit").addEventListener("click", SignupForm);
var error = document.getElementById("error")
var arr = JSON.parse(localStorage.getItem("user")) || [];
function SignupForm(){

    var obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    // console.log(obj)
    if(obj.email == "" || obj.password == ""||obj.name ==""){
        // error.innerText = "Do Not Empty!"
        // error.style.color = "red";
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Do not empty!',
          })
    }
    else{
        arr.push(obj)
        localStorage.setItem("user", JSON.stringify(arr));
        // error.innerText = "Signup Successful!"
        // error.style.color = "green";
        Swal.fire(
            'Good job!',
            'Signup Successful!',
            'success'
          )
        setTimeout(()=>{
            window.location.href="./login.html"
        }, 4000);
    }
}
