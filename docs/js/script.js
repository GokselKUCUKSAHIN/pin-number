function reduceNumber(number) {
  const strNum = number + "";
  if (strNum.length > 1) {
    const sum = strNum
      .split("")
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b);
    return reduceNumber(sum);
  } else {
    return strNum;
  }
}

function calculateNumberOne(date) {
  return reduceNumber(date.day);
}

function calculateNumberTwo(date) {
  return reduceNumber(date.month);
}

function calculateNumberThree(date) {
  return reduceNumber(date.year);
}

function calculateNumberFour(n1, n2, n3) {
  return reduceNumber(n1 + n2 + n3);
}

function calculateNumberFive(n1, n4) {
  return reduceNumber(n1 + n4);
}

function calculateNumberSix(n1, n2) {
  return reduceNumber(n1 + n2);
}

function calculateNumberSeven(n2, n3) {
  return reduceNumber(n2 + n3);
}

function calculateNumberEight(n6, n7) {
  return reduceNumber(n6 + n7);
}

function calculateNumberNine(n1, n2, n3, n4, n5, n6, n7, n8) {
  return reduceNumber(n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8);
}

function calculatePin(date) {
  const n1 = calculateNumberOne(date);
  const n2 = calculateNumberTwo(date);
  const n3 = calculateNumberThree(date);
  const n4 = calculateNumberFour(n1, n2, n3);
  const n5 = calculateNumberFive(n1, n4);
  const n6 = calculateNumberSix(n1, n2);
  const n7 = calculateNumberSeven(n2, n3);
  const n8 = calculateNumberEight(n6, n7);
  const n9 = calculateNumberNine(n1, n2, n3, n4, n5, n6, n7, n8);
  return [n1, n2, n3, n4, n5, n6, n7, n8, n9];
}

function createResultHTML(resultArray) {
  let result = "<pre>";
  for (const num of resultArray) {
    result += `<b>${num}</b>  `;
  }
  return result + "</pre>";
}

const resultElement = document.querySelector("#result");
document.querySelector("#date-pick").addEventListener("change", function () {
  const input = this.value;
  const dateEntered = new Date(input);
  const [day, month, year] = dateEntered
    .toLocaleDateString()
    .split(".");
  const date = new MyDate(day, month, year);
  const resultArray = calculatePin(date);
  resultElement.innerHTML = createResultHTML(resultArray);
});