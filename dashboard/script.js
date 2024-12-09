// виджет погоды
const getWeatherBtn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("city");
const cityNameElement = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const highTemp = document.getElementById("high-temp");
const lowTemp = document.getElementById("low-temp");

const weatherApiKey = "292d9c6c0c1e5308b7b5cd75745a6504";

getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value;
    cityNameElement.textContent = city;
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherApiKey}`;
    try {
        const response = await fetch(weatherUrl);
        const data = await response.json();
        if (data.cod === 200) {
            temperature.textContent = `${Math.round(data.main.temp)}°`;
            condition.textContent = data.weather[0].description;
            highTemp.textContent = `${Math.round(data.main.temp_max)}°`;
            lowTemp.textContent = `${Math.round(data.main.temp_min)}°`;
        } else {
            alert(`Error: ${data.message}`);

        }
    } catch (error) {
        alert("Failed to fetch weather data.");
    }
});


const calcInput = document.getElementById("calcInput");
const calculateBtn = document.getElementById("calculateBtn");
const calcResult = document.getElementById("calcResult");

calculateBtn.addEventListener("click", () => {
    const equation = calcInput.value.trim();

    const regex = /^(\d+)([+\-*/^%])(\d+)$/;
    const match = equation.match(regex);

    if (!match) {
        calcResult.textContent = "Enter a valid equation (e.g., 5+3)";
        return;
    }

    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                calcResult.textContent = "Cannot divide by zero";
                return;
            }
            result = num1 / num2;
            break;
        case "^":
            result = Math.pow(num1, num2);
            break;
        case "%":
            result = num1 % num2;
            break;
        default:
            calcResult.textContent = "Unsupported operator!";
            return;
    }

    calcResult.textContent = `Result: ${result}`;
});

// виджет конвертации валют
const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const conversionResult = document.getElementById("conversionResult");

const currencyApiKey = "45d13eb0734cf2aae4b61290814480f2";

convertBtn.addEventListener("click", async () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    // получение всех курсов валют
    const currencyUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=${currencyApiKey}`;

    try {
        // запрос к апи
        const response = await fetch(currencyUrl);
        const data = await response.json();

        // начличие курсов
        if (data.rates) {
            const fromRate = data.rates[from];
            const toRate = data.rates[to];
            const convertedAmount = (amount / fromRate) * toRate;
            conversionResult.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
        } else {
            alert("Failed to fetch exchange rates!");
        }
    } catch (error) {
        alert("Failed to fetch currency conversion data!");
    }
});



// виджет календаря
const calendarContainer = document.getElementById("calendar");
const currentMonthElement = document.getElementById("currentMonth");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

let currentDate = new Date();

function generateCalendar(date) {
    calendarContainer.innerHTML = "";
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    currentMonthElement.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day", "inactive");
        calendarContainer.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;

        dayElement.addEventListener("click", () => {
            const previouslySelected = document.querySelector(".selected-day");
            if (previouslySelected) previouslySelected.classList.remove("selected-day");

            dayElement.classList.add("selected-day");
        });

        calendarContainer.appendChild(dayElement);
    }
}

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate);
});

generateCalendar(currentDate);

// виджет задачника
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.addEventListener("click", () => taskItem.remove());
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
});

// виджет криптовалюты
const ctx = document.getElementById("cryptoChart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
            {
                label: "Bitcoin (USD)",
                data: [20000, 20500, 21000, 21500, 22000, 22500, 23000],
                borderColor: "#FF5733",
                backgroundColor: "rgba(255, 87, 51, 0.2)",
                borderWidth: 2,
            },
            {
                label: "Ethereum (USD)",
                data: [1500, 1550, 1600, 1620, 1650, 1700, 1750],
                borderColor: "#33FF57",
                backgroundColor: "rgba(51, 255, 87, 0.2)",
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
        scales: {
            x: { title: { display: true, text: "Days" } },
            y: { title: { display: true, text: "Price (USD)" } },
        },
    },
});