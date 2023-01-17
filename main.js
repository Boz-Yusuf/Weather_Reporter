const apiKey = "78599114ba331c17a00955f6b6ae7699";
let cityInput = document.getElementById("city");
let result = document.getElementById("result");

async function search() {
  let value = cityInput.value;
  let report = await calculate(value);
  result.innerHTML = `Today ${value} will be ${report}`;
  cityInput.value = "";
}

async function calculate(city) {
  let a = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  let i = await a.json();
  return i.weather[0].description;
}
