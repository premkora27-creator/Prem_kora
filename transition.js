<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Transaction Page</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  body.fade-in {
    opacity: 1;
  }

  .transaction-container {
    background: #fff;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    text-align: center;
    width: 300px;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 20px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  }

  button:hover {
    background-color: #45a049;
  }

  .success-message {
    display: none;
    color: green;
    font-weight: bold;
    margin-top: 20px;
  }
</style>
</head>
<body>
<div class="transaction-container">
  <h2>Complete Your Transaction</h2>
  <p>Amount: $49.99</p>
  <button onclick="processTransaction()">Pay Now</button>
  <div class="success-message" id="successMsg">Payment Successful!</div>
</div>

<script>
  // Fade in page on load
  window.onload = () => {
    document.body.classList.add('fade-in');
  };

  // Simulate transaction
  function processTransaction() {
    const msg = document.getElementById('successMsg');
    msg.style.display = 'block';
    msg.innerText = 'Processing...';
    setTimeout(() => {
      msg.innerText = 'Payment Successful!';
      document.body.style.opacity = 0;
      setTimeout(() => {
        window.location.href = "thankyou.html"; // Redirect to thank you page
      }, 1000);
    }, 2000);
  }
</script>
</body>
</html>
