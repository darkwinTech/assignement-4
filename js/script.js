// ===== Mobile drawer =====
const sidebar = document.querySelector('.sidebar');
// grab the sidebar element so later we can show/hide it
function showSidebar() {
    // Show the sidebar (mobile menu)
    sidebar.classList.add('show');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function hideSidebar() {
    // Hide the sidebar (mobile menu)
    sidebar.classList.remove('show');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// ===== Smooth scroll with fixed-nav offset =====
const NAV_HEIGHT = 76;
document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});

// ===== Simple tab logic =====
const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

function openTab(event, tabId) {
    Array.from(tabLinks).forEach((el) => el.classList.remove('active-link'));
    Array.from(tabContents).forEach((el) => el.classList.remove('active-tab'));
    event.currentTarget.classList.add('active-link');
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active-tab');
}

// Expose to inline HTML handler
window.openTab = openTab;
window.showSidebar = showSidebar;
window.hideSidebar = hideSidebar;

// === Personalized Greeting ===
const greetingText = document.getElementById('greetingText');
const nameInput = document.getElementById('nameInput');
const nameForm = document.getElementById('nameForm');
const clearName = document.getElementById('clearName');

// Function to show the greeting based on the time of the day
function updateGreeting() {
    const hour = new Date().getHours();
    const partOfDay = hour < 12 ? "Good Morning": hour < 18 ?"Good Afternoon": "Good Evening";
    const savedName = localStorage.getItem("visitorName") || "";
    greetingText.textContent = savedName
        ? `${partOfDay}, ${savedName}!`
        : `${partOfDay}!`;
    greetingText.classList.remove("fade-in");
    void greetingText.offsetWidth; // forces reflow (restarts animation)
    greetingText.classList.add("fade-in");
}

// When user saves their name
nameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
        localStorage.setItem("visitorName", name);
        updateGreeting();
    }
});

// When user clears their name
clearName.addEventListener("click", () => {
    localStorage.removeItem("visitorName");
    nameInput.value = "";
    updateGreeting();
});

// Run greeting on page load
updateGreeting();

// Sort By Date
document.getElementById("sortBtn").addEventListener("click", function () {
    const grid = document.getElementById("projectsGrid");
    const projects = Array.from(grid.children);

    // Sort by descending date (newest first)
    projects.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));

    // Re-append in new order
    projects.forEach((project) => grid.appendChild(project));
});

// Contact Form Handling
const contactForm = document.getElementById("contactForm");
const statusMsg = contactForm.querySelector(".form-status");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    statusMsg.textContent = "";

    const formData = new FormData(contactForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    // Simple validation
    if (!name || !email || !message) {
        statusMsg.textContent = "Please fill out all fields.";
        statusMsg.style.color = "#ff6b6b";
        return;
    }

    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        statusMsg.textContent = "Please enter a valid email address.";
        statusMsg.style.color = "#ff6b6b";
        return;
    }

    // Simulate data handling (store locally)
    try {
        const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
        submissions.push({ name, email, message, time: new Date().toISOString() });
        localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

        statusMsg.textContent = "Thank you! Your message has been sent.";
        statusMsg.style.color = "#6bff91";
        contactForm.reset();
    } catch (error) {
        statusMsg.textContent = "Something went wrong. Please try again later.";
        statusMsg.style.color = "#ff6b6b";
    }
});
// Git Hub API
const reposContainer = document.getElementById("reposContainer");
const GitHubUserName = "darkwinTech"

async function fetchGitHubReps() {
    try {
        const response = await fetch(`https://api.github.com/users/${GitHubUserName}/repos?sort=updated&per_page=6`)
        if (!response.ok) {
            throw new Error(`Failed to fetch repositories: ${response.status}`);
        }
        const repos = await response.json();
        reposContainer.innerHTML = repos.map(repo => `
            <article class="repo-card">
                <div class="repo-header">
                    <h3>
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                            ${repo.name}
                        </a>
                    </h3>
                    ${repo.private ? '<span class="repo-badge private">Private</span>' : '<span class="repo-badge public">Public</span>'}
                </div>
                <p class="repo-description">${repo.description || 'No description available.'}</p>
                <div class="repo-meta">
                    <span class="repo-language">
                        ${repo.language ? `<span class="language-dot"></span>${repo.language}` : ''}
                    </span>
                    <span class="repo-stats">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        ${repo.stargazers_count}
                    </span>
                    <span class="repo-stats">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                        </svg>
                        ${repo.forks_count}
                    </span>
                    <span class="repo-updated">Updated ${formatDate(repo.updated_at)}</span>
                </div>
            </article>
        `).join('');
    }
    catch (error) {
        reposContainer.innerHTML =  `<div class="error-state">
                <p>Unable to load repositories at this time.</p>
                <p class="error-detail">${error.message}</p>
                <p class="error-hint">Please check your internet connection and try again later.</p>
            </div>`;
        console.error("GitHub API Error:", error);
    }
}

// THE CAT API - RANDOM PHOTO
const photoBtn = document.getElementById("fetchPhoto");
const photoContent = document.getElementById("photoContent");

photoBtn.addEventListener("click", async () => {
    photoContent.innerHTML = `
    <div class="loader"></div>
    <p>Loading a cute cat...</p>
  `;

    try {
        // Fetch a random cat image
        const response = await fetch("https://api.thecatapi.com/v1/images/search");
        if (!response.ok) throw new Error("Failed to fetch image.");

        const data = await response.json();
        const imageUrl = data[0].url; // Extract the image URL

        photoContent.innerHTML = `
      <img src="${imageUrl}" alt="Random Cat" class="random-img" />
      <p>Here's a random cat for you </p>
    `;
    } catch (error) {
        photoContent.innerHTML = `<p> Could not load photo. Please try again later.</p>`;
        console.error("Cat API Error:", error);
    }
});

