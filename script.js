let counter = localStorage.getItem("counterValue")
  ? Number(localStorage.getItem("counterValue"))
  : 0;

const counterDOM = document.querySelector("#counter");
const increaseDOM = document.querySelector("#increase");
const decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

function clickEvent() {
  this.id === "increase" ? (counter += 1) : (counter -= 1);
  counterDOM.innerHTML = counter;
  localStorage.setItem("counterValue", counter);
}

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);
