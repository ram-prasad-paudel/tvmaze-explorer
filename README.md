# 📺 TVVerse: The Live TV Data Explorer
**Student Name:** Ram Prasad Paudel  
**Project:** AJAX-Enabled Applications (Project 2)

TVVerse is a high-performance, responsive web application that allows users to explore a global database of television shows in real-time. By leveraging the **TVMaze API**, the app provides instant access to show details, ratings, and schedules without ever refreshing the page.

---

## 🔗 Project Links
* **Live App URL:** https://ram-prasad-paudel.github.io/tvmaze-explorer/
* **GitHub Repository:** https://github.com/ram-prasad-paudel/tvmaze-explorer

---

## 📸 Interface Preview

### 🖥️ Desktop Dashboard View
This screenshot shows the application running on a full-size computer screen using a **CSS Grid** layout.
* **Layout:** The show cards are organized in a multi-column grid for maximum visibility.
* **Functionality:** Users can see the high-quality posters, ratings, and "Add to Favorites" buttons clearly.
![Desktop View](desktop-view.png)

### 📱 Mobile Responsive View
This screenshot shows the application running on a smartphone screen using **Media Queries**.
* **Responsiveness:** The interface automatically collapses into a single-column stack, making it easy to scroll with one thumb.
* **Touch-Friendly:** All interactive elements like the search bar and favorite toggles are optimized for touch input.
![Mobile View](mobile-view.png)

---

## 🧐 What is this project?
While Project 1 focused on local data entry, **TVVerse** is about connecting to the world. I realized that users often want a "lean-back" experience when searching for entertainment. 

This app solves the problem of finding reliable show information quickly. It acts as a specialized dashboard that tracks:
1. **Live API Data:** Real-time fetching of show summaries, cast info, and genres.
2. **Personal Watchlist:** A persistent "Favorites" system that remembers what you like, even if you close your browser.

---

## ✨ Main Features
* **Async Fetching:** Uses `async/await` and the `Fetch API` to communicate with TVMaze servers.
* **Dynamic DOM Rendering:** The UI is built on-the-fly using JavaScript template literals based on API results.
* **Data Persistence:** Utilizes the **Web Storage API (localStorage)** to keep your favorite shows saved locally.
* **Data Sanitization:** Implements security measures to clean API strings, preventing XSS (Cross-Site Scripting) attacks from external data.
* **Loading States:** Includes a visual spinner/feedback mechanism to improve UX while waiting for network responses.

---

## 🚀 How to run for Windows & macOS

1. **Download:** Click the green **"Code"** button at the top of this repository and select **"Download ZIP"**.
2. **Unzip:** Extract the folder to your computer.
3. **Launch:**
   * **Windows:** Double-click the `index.html` file to open it in Chrome or Edge.
   * **macOS:** Right-click `index.html` and select **"Open With"** > **"Google Chrome"** or **"Safari"**.
4. **Dev Tools:** For the best experience, open the browser console (`F12`) to see the API headers and data objects being fetched in real-time.

---

## 🛠️ My Learning Reflection

Building the **TVVerse Explorer** was a significant step up from my first project. While Project 1 taught me how to handle user input, this project taught me how to handle **external data**. My main goal was to create a seamless search experience that felt like a professional streaming service.

The most challenging technical part was managing **Asynchronous JavaScript**. I initially struggled with "Race Conditions"—where the app would try to display data before the API had finished sending it. I solved this by mastering `async/await` and implementing `try/catch` blocks. This ensures that if the API is down or the user is offline, the app displays a helpful error message instead of simply crashing.

I also spent a lot of time on **Data Integrity**. API data can be "messy" (sometimes missing images or containing weird HTML tags). I wrote logic to check for null values and provide "Placeholder" images so the layout never looks broken. Learning to use `localStorage` again was helpful, but this time I applied it to complex objects (entire show arrays) rather than just simple numbers.

In the future, I plan to expand this by adding a "Cast Explorer" where clicking an actor shows all their other movies. This project has made me feel like a "Full Stack" front-end developer, capable of connecting any web app to the vast amount of data available on the internet.

---

## ✅ Project Self-Assessment

| Rubric Category | Self-Score | Technical Justification |
| :--- | :---: | :--- |
| **API & AJAX** | 10 / 10 | Successfully implemented the Fetch API with async/await. Handles real-time search queries efficiently. |
| **Dynamic DOM** | 10 / 10 | UI updates dynamically without page reloads. Responsive CSS Grid/Flexbox used for all screen sizes. |
| **Data Handling** | 5 / 5 | Used `localStorage` for favorite shows. Properly parsed and stringified JSON objects. |
| **Security & Quality** | 5 / 5 | All API data is sanitized before rendering. Code is clean, modular, and well-commented. |
| **Deployment** | 5 / 5 | Live on GitHub Pages with a working `.gitignore` and comprehensive README documentation. |
| **TOTAL** | **35 / 35** | |

---

## 👨‍💻 Author
**Ram Prasad Paudel** *Passionate about building clean, data-driven web experiences.*
