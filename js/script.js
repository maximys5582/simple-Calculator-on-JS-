const resultElement = document.getElementById("result");
const firstNum = document.getElementById("firstNum");
const secondNum = document.getElementById("secondNum");
const sum = document.getElementById("sum");
const min = document.getElementById("min");
const mul = document.getElementById("mul");
const division = document.getElementById("division");
const submit = document.getElementById("submit");

let action = "+";

sum.onclick = function () {
  action = "+";
};

min.onclick = function () {
  action = "-";
};

mul.onclick = function () {
  action = "*";
};

division.onclick = function () {
  action = "/";
};

function output(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else if (result > 0) {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function calculate(fnum, snum, action) {
  const num1 = Number(fnum.value);
  const num2 = Number(snum.value);

  if (action == "+") {
    return num1 + num2;
  } else if (action == "-") {
    return num1 - num2;
  } else if (action == "*") {
    return num1 * num2;
  } else if (action == "/") {
    return num1 / num2;
  }
}

submit.onclick = function () {
  const res = calculate(firstNum, secondNum, action);
  output(res)
};
