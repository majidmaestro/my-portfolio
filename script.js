// // DOM Manipulation & Event Handling

// // Booking Form
// document.addEventListener("DOMContentLoaded", () => {
//   const bookingForm = document.getElementById("booking-form");
//   const bookingMessage = document.getElementById("booking-message");
//   const shopForm = document.getElementById("shop-form");
//   const cartList = document.getElementById("cart-list");
//   const feedbackForm = document.getElementById("feedback-form");
//   const feedbackMessage = document.getElementById("feedback-message");
//   const playerList = document.getElementById("player-list");

//   // Load players from localStorage
//   if (playerList) {
//     const players = JSON.parse(localStorage.getItem("players")) || ["Player A", "Player B", "Player C"];
//     players.forEach(player => {
//       const li = document.createElement("li");
//       li.textContent = player;
//       playerList.appendChild(li);
//     });
//   }

//   // Booking form
//   if (bookingForm) {
//     bookingForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const name = document.getElementById("name").value;
//       const tickets = document.getElementById("tickets").value;
//       bookingMessage.textContent = `Thank you ${name}, you booked ${tickets} ticket(s)!`;
//     });
//   }

//   // Shop form
//   if (shopForm) {
//     shopForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const item = document.getElementById("item").value;
//       let cart = JSON.parse(localStorage.getItem("cart")) || [];
//       cart.push(item);
//       localStorage.setItem("cart", JSON.stringify(cart));

//       cartList.innerHTML = "";
//       cart.forEach(product => {
//         const li = document.createElement("li");
//         li.textContent = product;
//         cartList.appendChild(li);
//       });
//     });
//   }

//   // Feedback form
//   if (feedbackForm) {
//     feedbackForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const email = document.getElementById("email").value;
//       const message = document.getElementById