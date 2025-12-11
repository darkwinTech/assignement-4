# Aleen AlQarni – Personal Portfolio - Assignment 4
## Demo Video (https://www.youtube.com/watch?v=egVijUat3Zo)

## 📌 Assignment Description
This project represents the final stage of a multi-assignment journey to build a complete, interactive, responsive personal portfolio web application.
Across four assignments, the website evolved from a simple HTML portfolio into a dynamic, user-friendly, API-powered, and professionally structured web application.
This final version showcases:
* A polished UI
* Dynamic content using external APIs
* Interactive features built with JavaScript
* State persistence using localStorage
* Optimized performance
* Clean code structure and enhanced documentation
It is designed to be production-ready, visually appealing, and fully functional as a real personal portfolio website.
## ✨ Features
This section lists all features implemented throughout the development process.
### 1. Core Website Structure (Assignment 1)
* Multi-section personal portfolio website
* Semantic and accessible HTML structure
* Sections included: Home, About, Skills, Projects, Contact
* Embedded profile image and introduction
* Basic responsive layout design
* Footer with social links

### 2. UI/UX Enhancements & Styling (Assignment 2)
* Advanced CSS styling using Flexbox & Grid
* Smooth scrolling navigation
* Active section highlighting in the navbar
* Hover animations and UI transitions
* Updated, professional layout with better spacing
* Improved contact form design with modern UI
* Fully responsive layout across devices

### 3. Dynamic & Interactive Logic (Assignment 3)
* API Integrations
   * GitHub REST API
   * Fetches live repositories
   * Displays name, description, language, and last updated
   * Includes loading spinner & error handling
* Random Cat Image API
   * Fetches and displays random cat images
   * Loading animation + error fallback

#### Interactivity & Logic
* Project filtering (category, skill level)
* Sorting system (date, alphabetical)
* Contact form validation:
  * Empty field detection
  * Email format validation
  * Success/error notifications
* Timer tracking "time spent on website"

### State Management (localStorage)
* Saves selected theme accent color
* Stores user name & displays personalized greeting
* Saves contact form submissions
* Remembers if Projects section is hidden or shown

### Performance Improvements
* Deferred JS loading
* Compressed and optimized images
* Cleaner, modular CSS and JS
* CSS variables (--accent-color) for instant theme changes

### 4. Production-Ready Features (Assignment 4)
* Fully deployed to GitHub Pages
* Clean, organized folder structure and documentation
* Meaningful commit history and version control practices
* Error handling for:
  * API failures
  * Invalid form entries
  * Missing project results
* Cross-browser compatibility testing
* Professional design aligned with real-world portfolio standards

## 📂 Project Structure
```
assignment-4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
└── .gitignore
```

# How to run ?
1. Copy this link (https://github.com/darkwinTech/assignement-4.git) and clone it into your IDE (WebStorm or VSCode)
2. Click Trust Project
3. Go to index.html file and run it
4. It will direct you to the browser (e.g. Chrome)
5. Interact with the website and fill the Contact form 
6. To see local storage of the contact form:
    * Right Click > Inspect > Console > write "JSON.parse(localStorage.getItem("contactSubmissions"))" to see users entered data.

# Live Deployment
The project is fully deployed and accessible here:   
(https://darkwintech.github.io/assignement-4/)

# 🤖 AI Use (Short Summary)
AI tools (ChatGPT) were used responsibly to assist with:
* Code refactoring (CSS cleanup, formatting improvements)
* Debugging small JavaScript issues
* Documentation writing (README + technical notes)
* Suggestions for UI/UX improvements
* Improving code structure for clarity and maintainability
