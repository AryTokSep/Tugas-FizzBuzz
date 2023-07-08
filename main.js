let numberInput = document.getElementById("number");
let button = document.getElementById("btnFizzBuzz");
let resultBox = document.getElementById("result");
let result;

let fizzBuzz = function (i) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} fizzbuzz`);
    result = `${i} fizzbuzz`;
  } else if (i % 3 == 0) {
    console.log(`${i} fizz`);
    result = `${i} fizz`;
  } else if (i % 5 == 0) {
    console.log(`${i} buzz`);
    result = `${i} buzz`;
  } else {
    console.log(`${i} bukan fizz, buzz ataupun Fizzbuzz`);
    result = `${i} bukan fizz, buzz ataupun Fizzbuzz`;
  }
};

let clickHere = function (event) {
  event.preventDefault();
  let number = numberInput.value;
  numberInput.value = "";
  let clickHere = fizzBuzz(number);
  resultBox.textContent = clickHere;
  resultBox.innerHTML = result;
};

button.addEventListener("click", clickHere);
numberInput.addEventListener("submit", clickHere);
