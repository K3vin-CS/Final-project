document.getElementById("destination").addEventListener("change", function () {
  console.log("Selected destination:", this.value);
});

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

function addBooking(id, traveler, destination) {
  const table = document.querySelector('.booking-management table');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${id}</td><td>${traveler}</td><td>${destination}</td>`;
  table.appendChild(row);
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    addBooking('BK-002', 'Emily Carter', 'Spain');
  }, 2000);
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    addBooking('BK-003', 'Michael Lee', 'Spain');
  }, 2000);
});

function addCancellation(id, user, reason) {
  const table = document.querySelector('.cancellation table');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${id}</td><td>${user}</td><td>${reason}</td>`;
  table.appendChild(row);
}

setTimeout(() => {
  addCancellation('CR-002', 'Michael Lee', 'Heatstroke');
}, 3000);

function logPayment(user, method) {
  console.log(`Payment by ${user} using ${method}`);
}

setTimeout(() => {
  logPayment('Sarah Wong', 'Credit Card');
}, 4000);
