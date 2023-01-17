const apiKey = "78599114ba331c17a00955f6b6ae7699";
let cityInput = document.getElementById("city");
let result = document.getElementById("result");

async function search() {
  let value = cityInput.value;
  console.log(calculate(value));
  let report = await calculate(value);
  console.log(report);

  // console.log(value);
  // calculate(value);
}

async function calculate(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  // .then((response) => response.json());
}
