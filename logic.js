let screen = document.getElementById("screen");

let screenValue = "";

let buttons = document.querySelectorAll("button");
for (item of buttons) {
  item.addEventListener("click", (b) => {
    buttonText = b.target.innerText;
    // console.log('button text is ', buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "c") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else if (buttonText == "Del") {
      screen.value.slice(0, -1);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
