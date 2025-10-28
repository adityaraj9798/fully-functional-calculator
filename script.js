const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (button.id === "clear") {
      currentInput = "";
      display.value = "";
    } else if (button.id === "del") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (button.id === "equal") {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});