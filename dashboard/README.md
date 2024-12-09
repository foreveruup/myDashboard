1. General Overview

This project is a personalized dashboard that includes five main sections:
1.	Currency Converter
2. Calculator
3. Weather Widget
4. Calendar with day selection
5. To-Do List
6. Cryptocurrency Growth Chart

The purpose of the project is to demonstrate the use of HTML, CSS, and JavaScript, integration with external APIs, 
event handling, dynamic DOM manipulation, and data visualization.

2. Project Structure

The project consists of three main files:
•	main.html: Provides the structure of the page.
•	style.css: Contains the styling for the user interface.
•	script.js: Implements the functionality using JavaScript.


3. Functional Components

3.1. Currency Converter

	•	Allows the user to input an amount and select the source and target currencies.
	•	On clicking the “Convert” button, it fetches the current exchange rates using an API.
	•	Displays the conversion result on the screen.

Key elements:
•	HTML: Input fields, dropdowns, and a button for user interaction.
•	JavaScript: Handles user input and API requests.
•	API: Fetches the latest exchange rates.

3.2. Calculator

	•	Users can input a mathematical expression (e.g., 5+3 or 4*6).
	•	On clicking the “Calculate” button, the result of the expression is displayed.
	•	Supports basic operations such as addition (+), subtraction (-), multiplication (*), division (/), and exponentiation (^).

Key elements:
•	HTML: Input field for the equation and a button for triggering the calculation.
•	JavaScript:
•	Parses the input using regular expressions.
•	Evaluates the expression and handles invalid input.
•	Provides a clear and concise result display.

Example:
•	Input: 5+5 → Output: Result: 10.
•	Input: 3^3 → Output: Result: 27.
•	Input: 5/0 → Output: Cannot divide by zero.

3.3. Weather Widget

	•	Users input the city name to fetch the current weather, including:
	•	Temperature
	•	Weather description
	•	Minimum and maximum temperatures.

Key elements:
•	HTML: Input field for the city name and display area for weather information.
•	JavaScript: Fetches and processes data using the OpenWeatherMap API.
•	API: Retrieves live weather data.


3.3. Calendar

	•	Displays the current month and days of the week.
	•	Allows users to navigate between months using arrow buttons.
	•	Clicking on a day highlights it in red.

Key elements:
•	HTML: A grid layout for the days and buttons for navigation.
•	CSS: Styles the calendar cells and highlights the selected day.
•	JavaScript: Dynamically generates the calendar based on the current month.


3.4. To-Do List

	•	Allows users to add tasks to a list.
	•	Each task can be removed using a delete button.
	•	The data is not stored between sessions (local storage is not used).

Key elements:
•	HTML: Input field and task list container.
•	JavaScript: Manages the addition and removal of tasks.

3.5. Cryptocurrency Growth Chart

	•	A line chart displays the growth of Bitcoin and Ethereum over a week.
	•	The chart is built with static data but can be connected to a real API for live data.

Key elements:
•	HTML: A <canvas> element for rendering the chart.
•	JavaScript: Configures the chart with fixed data.
•	Chart.js: Used to create and customize the visualization.

4. Technologies

   •	HTML: For structuring the interface.
   •	CSS: For styling and responsive design.
   •	JavaScript: For dynamic interactions and API integration.
   •	APIs:
   •	OpenWeatherMap API for weather data.
   •	Exchange rates API for currency conversion.
   •	Chart.js: For data visualization in the cryptocurrency growth section.

5. Example Usage Scenarios

   1.	Currency Converter:
         •	Input an amount, select USD → EUR.
         •	Click “Convert” → Displays the converted amount in EUR.
   2.	Calculator:
        •	Input: 5+5 → Click “Calculate” → Displays Result: 10. 
        •	Input: 3^3 → Click “Calculate” → Displays Result: 27.
   3. Weather Widget:
        •	Input “Almaty” and click “Get Weather” → Shows the current temperature and description.
   4. Calendar:
        •	Click on a day → Highlights it in red.
        •	Use the arrow buttons to navigate between months → Updates the calendar view.
   5. To-Do List:
        •	Enter a task → Click “Add Task”.
        •	The task appears in the list and can be deleted.
   6. Cryptocurrency Growth:
        •	View the chart upon loading → Displays static data for Bitcoin and Ethereum prices.

6. Extensions

For future improvements:
1.	Add task storage using LocalStorage or session storage.
2.	Connect the cryptocurrency chart to a live API.
3.	Enhance the calendar with task scheduling features.