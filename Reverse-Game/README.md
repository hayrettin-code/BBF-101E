# 🎮 Reverse Text Game: Interactive JS Challenge

This folder contains a time-based browser game developed using HTML, CSS, and Vanilla JavaScript. It serves as a practical demonstration of game logic, string manipulation, and dynamic DOM updates.

## 🔗 Live Demo
You can play the live deployed version of this game here: 
**[👉 Click here to play Reverse Text Game](https://itu-itis.github.io/introduction-to-information-systems-2025-itu-itis25-yazicih24/reverseGame/)**

## 📝 About the Project
The "Reverse Text Game" challenges players to type the exact reverse of a randomly generated string before the time runs out. The game features progressive difficulty levels, a real-time countdown timer, and immediate visual feedback.

**Key Features of This Project:**
* **Dynamic Level Progression:** The game scales in difficulty across 3 levels. 
  * *Level 1:* Random Month.
  * *Level 2:* Random Month + Number.
  * *Level 3:* Random Month + Number + Color.
* **String Manipulation:** Utilizes JavaScript's built-in array methods (`.split().reverse().join()`) to accurately calculate and validate the winning condition.
* **Real-time Timer:** Implements a 45-second countdown using `setInterval` and `clearInterval`, automatically triggering a "Game Over" state if time expires.
* **DOM Manipulation:** Dynamically updates the user interface by hiding/showing buttons, changing message colors (red/green) based on user success, and clearing inputs for the next round.
* **Responsive Layout:** Designed with a clean, centralized CSS Flexbox layout ensuring the game container is perfectly aligned on the screen.

## 🛠️ Technologies Used
* **HTML5:** Game interface and structural elements.
* **CSS3:** Flexbox layout, styling, and UI state classes (e.g., hidden elements).
* **JavaScript (Vanilla):** Randomization algorithms, timing events, event listeners, and game state management.
