document.querySelector(".book-trip .btn").addEventListener("click", function () {
  alert("Searching trips...");
});

document.querySelector(".package .btn").addEventListener("click", function () {
  alert("Processing payment...");
});

document.querySelectorAll('input[name="pay"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    console.log("Payment method selected:", radio.parentElement.textContent.trim());
  });
});

document.getElementById("confirmPaymentBtn").addEventListener("click", function () {
  const name = document.getElementById("customerName").value.trim();
  const method = document.querySelector('input[name="payment"]:checked');

  if (!name) {
    alert("Please enter customer name");
    return;
  }

  if (!method) {
    alert("Please select payment method");
    return;
  }

  const amount = 1200;

  const table = document.getElementById("paymentList");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${method.value}</td>
    <td>$${amount}</td>
  `;

  table.appendChild(row);

  calculateTotalPayment();
  
function calculateTotalPayment() {
  let total = 0;

  const rows = document.querySelectorAll("#paymentList tr");

  rows.forEach(row => {
    const amountCell = row.children[2];
    if (!amountCell) return;

    const amount = parseFloat(
      amountCell.textContent.replace(/[^0-9.]/g, "")
    );

    if (!isNaN(amount)) {
      total += amount;
    }
  });

  document.getElementById("totalPayment").textContent =
    "$" + total.toFixed(0);
}

document.addEventListener("DOMContentLoaded", calculateTotalPayment);

  alert("Payment confirmed successfully!");
});

