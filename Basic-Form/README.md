# 📋 Form Validation & User Input Practice

This folder contains a front-end practice project focused on building structured web forms and implementing custom client-side validation using JavaScript.

## 🔗 Live Demo
You can view the live deployed version of this project here: 
**[👉 Click here to view the live form](https://itu-itis.github.io/introduction-to-information-systems-2025-itu-itis25-yazicih24/form/)**

## 📝 About the Project
The primary goal of this project is to handle user inputs effectively and ensure data integrity before submission. It demonstrates how to use various HTML input types alongside JavaScript logic to create a robust and user-friendly form experience.

**Key Features of This Project:**
* **Comprehensive Form Structure:** Utilized a wide range of HTML5 input fields including text, numbers, dates, emails, passwords, checkboxes, and radio buttons within a semantic `<fieldset>` structure.
* **Event Handling:** Used `event.preventDefault()` to intercept the default form submission and trigger custom validation functions.
* **Custom JavaScript Validation:** 
  * Checks for empty required fields (Name).
  * Dynamically calculates and verifies if the user's inputted age matches their selected birth year.
  * Validates the Student ID to ensure it is exactly 9 characters long and contains only numeric values.
* **Dynamic Feedback:** Provides specific error alerts based on the validation step that failed, and displays a dynamically generated success message with the current date upon successful submission.

## 🛠️ Technologies Used
* **HTML5:** Semantic structuring and input types.
* **JavaScript (Vanilla):** DOM element selection, date objects, conditional logic, and form event handling.
