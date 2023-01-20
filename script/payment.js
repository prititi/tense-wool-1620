let walletBalance = 100000;

let payAmt = document.getElementById("pay-amt");
let balanceAmt = document.getElementById("balance-amt");
let payButton = document.getElementById("pay-btn");
let feedbackText = document.getElementById("feedback-text");

// set the text content of balanceAmt to be the wallet balance.
balanceAmt.innerHTML = walletBalance;
// write a function called makePayment that returns a promise.
// promise resolves after 2 seconds if the payAmount is >= balanceAmt
// promise rejects after 2 seconds if the payAmount is < balanceAmt
// the makePayment function should take in amt which is used
// to decide if the payment passes or fails.

// On click of payButton invoke makePayment()
// in case the returned promise resolves, the feedback text & walletBalance is updated.
// in case the returned promise rejects, the feedback text is updated.
function makePayment(payAmount) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (payAmount <= walletBalance) {
       resolve("Payment Successful🤑");
      //  window.location.replace("./index.html")

      // whole screen alert
      Swal.fire(
        'Payment Successful🤑',
        'You clicked the button!',
        'success'
      )
       
      } else {
        reject("Payment Fail😥");
        Swal.fire({
          icon: 'error',
          title: 'Payment Fail😥',
          text: 'Something went wrong!',
        })
      }
    }, 3000);
  });
}

payButton.addEventListener("click", function (e) {

  feedbackText.innerText = "Loading..";
  if (payAmt.value === "") {
    feedbackText.innerText = "write proper amount☝...";
    Swal.fire(
      'write proper amount☝...',
      'You clicked the button!',
      'error'
    )
    return;
  }

  makePayment(payAmt.value)
    .then((message) => {
      feedbackText.innerText = message;
      walletBalance = walletBalance - payAmt.value;
      balanceAmt.innerText = walletBalance; //ui
      payAmt.innerText = "";
      
    })
    .catch((msg) => {
      feedbackText.innerText = msg;
    });
});
