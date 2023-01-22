var data = JSON.parse(localStorage.getItem("user"));
var error = document.getElementById("error")
document.getElementById("login-submit").addEventListener("click", LoginData)

function LoginData(){
    // console.log(data);
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if(email == "" || password == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Do not empty!',
          })
    }
    else{
        let istrue=false;let name;
        for(let i=0;i<data.length;i++){        
            if(data[i].email==email && data[i].password==password){
                istrue=true;
                name=data[i].name;
                break;
            }        
        }
        if(istrue==true){
            Swal.fire(
                'Login successfully🎉..',
                'You clicked the button!',
                // 'success'
              )
            localStorage.setItem("auth",true);
            localStorage.setItem("name",JSON.stringify(name));
            setTimeout(()=>{
                window.location.href="./index.html"
            }, 3000);
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'enter valid credentials!'
              })
        }
    }
}