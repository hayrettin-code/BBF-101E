# 💼 Job Application System: Modular Validation

This folder contains a comprehensive web-based job application form. The project focuses heavily on complex client-side validation logic, modular JavaScript architecture, and dynamic user feedback.

## 🔗 Live Demo
You can view the live deployed version of this project here: 
**[👉 Click here to view the live job application](https://itu-itis.github.io/introduction-to-information-systems-2025-itu-itis25-yazicih24/jobApplication/)**

## 📝 About the Project
Unlike basic forms, this project ensures strict data integrity before submission. It uses real-world algorithms (such as the official Turkish National ID validation algorithm) and logical cross-checking (comparing age against years of experience) to simulate a professional enterprise application form.

**Key Features of This Project:**
* **Modular Architecture:** JavaScript logic is decoupled from the HTML structure. Validation algorithms for TCKN, Name, Date of Birth, Salary, and Experience are separated into individual `.js` files for clean, maintainable code.
* **Real-time 'Blur' Validation:** Implemented `blur` event listeners that validate user input instantly as they leave a field, providing immediate visual feedback without waiting for form submission.
* **Complex TCKN Algorithm:** Successfully implemented the official mathematical verification algorithm for the 11-digit Turkish National Identity Number (TCKN) to ensure authenticity.
* **Logical Cross-Validation:** 
  * Calculates exact age based on the Date of Birth and restricts applicants to the 17-36 age range.
  * Validates "Years of Experience" by logically ensuring it cannot exceed the applicant's age minus 10 years.
* **Dynamic Data Rendering:** Upon successful submission, the system automatically parses arrays (like checked skills) and variables to generate a clean, read-only summary within a `<textarea>`.

## 🛠️ Technologies Used
* **HTML5:** Semantic form inputs, checkboxes, radio buttons, and select dropdowns.
* **JavaScript (Vanilla - Modular):** Event delegation, array manipulation, date objects, mathematical algorithms, and external script linking.
