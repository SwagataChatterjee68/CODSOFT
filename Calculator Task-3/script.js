let display = (result) => {
  document.getElementById("answer").value += result;
};
let calculate = () => {
  let a = document.getElementById("answer").value;
  let b = eval(a);
  document.getElementById("answer").value = b;
};
let clearscreen = () => {
  document.getElementById("answer").value = "";
};
let remove = () => {
  let input = document.getElementById("answer");
  input.value = input.value.substring(0, input.value.length - 1);
};
