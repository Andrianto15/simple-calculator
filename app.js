// selectors
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

// variable for check if new input after "=" or not
let flagNew = "0";

// event listener
keys.forEach((key) => {
  key.addEventListener("click", calculate);
});

function calculate() {
  let buttonText = this.innerText;

  if (buttonText === "AC") {
    output.innerText = "";
    result.innerText = "";

    flagNew = "0";

    result.style.animation = "";
    output.style.animation = "";

    return;
  }

  if (buttonText === "DEL") {
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
    return;
  }

  if (buttonText === "=") {
    try {
      result.innerText = eval(output.innerText);

      result.style.animation = "big 0.5s ease-in-out";
      output.style.animation = "small 0.5s ease-in-out";

      result.style.animationFillMode = "forwards";
      output.style.animationFillMode = "forwards";

      flagNew = "1";
    } catch (err) {
      result.innerText = err;
    }
  } else {
    if (flagNew === "1") {
      output.innerText = "";
      result.innerText = "";

      result.style.animation = "";
      output.style.animation = "";

      flagNew = "0";
    }

    output.textContent += buttonText;
    return;
  }
}
