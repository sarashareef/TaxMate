document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('taxForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      calculateTax();
    });
  });
  
    async function calculateTax() {
    var zipInput = document.getElementById('zipInput');
    var zipCode = zipInput.value;
    var amountInput = document.getElementById('amountInput');
    var amount = parseFloat(amountInput.value);
    
    // Add logic to calculate sales tax based on the ZIP code
    
    var finalPrice = amount + await calculateSalesTax(zipCode, amount);
    var result = document.getElementById('result');
    result.innerHTML = 'Sales tax for $' + amount.toFixed(2) + ' in ZIP code ' + zipCode + ' is $' + finalPrice.toFixed(2);
  }

  async function calculateSalesTax(zipCode, amount) {
    const response = await fetch('https://api.api-ninjas.com/v1/salestax?zip_code=' + zipCode, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        'X-Api-Key': 't0K33busQDRy2LElwt07iw==whVxjpUCZ7Osk6RL',
        "Content-Type": "application/json"
      }
    });
    var result = await response.json(); // parses JSON response into native JavaScript objects
    return amount * (result[0].total_rate); 
}






