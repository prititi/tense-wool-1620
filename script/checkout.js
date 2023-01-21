let btn = document.getElementById("close")

btn.addEventListener("click",()=>{
    // alert("First step for payment is Successful🎉")
    Swal.fire(
    'First step for verification is completed😊',
    'You clicked the button!',
    'success'
    
  )
    setTimeout(()=>{
        window.location.href = "payment.html"
    },2000)
    
})