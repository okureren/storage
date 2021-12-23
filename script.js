let counter = localStorage.getItem("countervalue")
  ? Number(localStorage.getItem("countervalue"))
  : 0;

const counterDOM = document.querySelector("#counter");
const increaseDOM = document.querySelector("#increase");
const decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

function clickEvent() {
  this.id === "increase" ? (counter += 1) : (counter -= 1);
  counterDOM.innerHTML = counter;
  localStorage.setItem("countervalue", counter);
}

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);
