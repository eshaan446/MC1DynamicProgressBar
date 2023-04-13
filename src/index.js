import "./styles.css";

let bar = document.querySelector(".progress-done");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");

let value = 0;
let maxvalue = 0;

const calculation = () => {
  bar.style.width = `${(value / maxvalue) * 100}%`;
  bar.innerText = `${(value / maxvalue) * 100}`;
};

input1.addEventListener("keyup", () => {
  value = parseInt(input1.value, 10);
  calculation();
});
input2.addEventListener("keyup", () => {
  maxvalue = parseInt(input2.value, 10);
  calculation();
});
