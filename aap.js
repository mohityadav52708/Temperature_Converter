function convertTemperature() {
    const inputTemperature = document.getElementById("inputTemperature").value;
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;
  
    if (unitFrom === unitTo) {
      document.getElementById("result").textContent = "Same unit selected";
      return;
    }
  
    let result;
    if (unitFrom === "celsius") {
      if (unitTo === "fahrenheit") {
        result = (inputTemperature * 9 / 5) + 32;
      } else if (unitTo === "kelvin") {
        result = parseFloat(inputTemperature) + 273.15;
      }
    } else if (unitFrom === "fahrenheit") {
      if (unitTo === "celsius") {
        result = (inputTemperature - 32) * 5 / 9;
      } else if (unitTo === "kelvin") {
        result = (inputTemperature - 32) * 5 / 9 + 273.15;
      }
    } else if (unitFrom === "kelvin") {
      if (unitTo === "celsius") {
        result = inputTemperature - 273.15;
      } else if (unitTo === "fahrenheit") {
        result = (inputTemperature - 273.15) * 9 / 5 + 32;
      }
    }
  
    document.getElementById("result").textContent = `${inputTemperature} ${unitFrom} is ${result.toFixed(2)} ${unitTo}`;
  }
  