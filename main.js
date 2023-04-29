const calc = document.querySelector(".calc");
const calcScreen = document.querySelector(".calc__screen");

calc.addEventListener("click", (event) => {
  if (!event.target.classList.contains("calc__btn")) {
    return;
  }
  const value = event.target.innerText;

  if (value === "C") {
    calcScreen.innerText = "";
  } else if (value === "=") {
    calcScreen.innerText = eval(calcScreen.innerText).toFixed(2);
  } else {
    calcScreen.innerText += value;
  }
});
