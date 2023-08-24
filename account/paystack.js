const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_a65bd2d4a1785ebe1eeb3ff8c688bcb87f946e7c', // Replace with your public key
    email: 'mickeyj@loanpay.com',
    amount: document.getElementById("amount").value * 100,
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Transaction terminated!.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}