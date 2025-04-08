function convertTemp() {
  const input = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const result = document.getElementById("result");

  if (isNaN(input)) {
    result.textContent = "Please enter a valid temperature.";
    return;
  }

  let tempInCelsius;

  // Convert input to Celsius
  if (from === "celsius") tempInCelsius = input;
  else if (from === "fahrenheit") tempInCelsius = (input - 32) * (5 / 9);
  else if (from === "kelvin") tempInCelsius = input - 273.15;

  // Convert Celsius to target unit
  let finalTemp;
  if (to === "celsius") finalTemp = tempInCelsius;
  else if (to === "fahrenheit") finalTemp = tempInCelsius * (9 / 5) + 32;
  else if (to === "kelvin") finalTemp = tempInCelsius + 273.15;

  result.textContent = `Converted Temperature: ${finalTemp.toFixed(2)}° ${getUnitLabel(to)}`;
}

function getUnitLabel(unit) {
  if (unit === "celsius") return "C";
  if (unit === "fahrenheit") return "F";
  if (unit === "kelvin") return "K";
}