
// Get DOM Elements
const modal = document.getElementById("modalview");
const modal2 = document.getElementById("modalview2");
const modal3 = document.getElementById("modalview3");
// Events
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.visibility = "visible";
}
function openModal2() {
  modal2.style.visibility = "visible";
}
function openModal3() {
  modal3.style.visibility = "visible";
}
// Close
function closeModal() {
  modal.style.visibility = "hidden";
}
function closeModal2() {
  modal2.style.visibility = "hidden";
}
function closeModal3() {
  modal3.style.visibility = "hidden";
}
// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.visibility = "hidden";
  } else if (e.target == modal2) {
    modal2.style.visibility = "hidden";
  } else if (e.target == modal3) {
    modal3.style.visibility = "hidden";
  }
}

