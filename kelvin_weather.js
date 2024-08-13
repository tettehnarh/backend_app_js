// Forecast for the day in Kelvin
let kelvin = 0;

// Forecast for the day in Celsius
let celsius = kelvin - 273;

// Forecast in Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Round down the Fahrenheit result
fahrenheit = Math.floor(fahrenheit);

// Display result of Kelvin -> Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton
let newton = celsius * (33 / 100);

// Round down the Newton result
newton = Math.floor(newton);

// Display result of Celsius -> Newton
console.log(`The temperature is ${newton} degrees Celsius.`);
