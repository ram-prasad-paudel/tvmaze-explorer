# 📺 TVVerse: The Live Data Explorer
**Student Name:** Ram Prasad Paudel  
**Project:** AJAX-Enabled Applications (Project 2)

TVVerse is a responsive web application that explores a database of TV shows in real-time using the **TVMaze API**.

## 🔗 Project Links
* **Live App URL:** https://ram-prasad-paudel.github.io/tvmaze-explorer/
* **GitHub Repository:** https://github.com/ram-prasad-paudel/tvmaze-explorer

---

## 📸 Interface Showcases

### **Desktop View**
On large screens, the app uses a multi-column CSS Grid to display show cards efficiently.
![Desktop View](desktop-view.png)

### **Mobile View**
On mobile, the layout stacks vertically to ensure easy navigation and readability.
![Mobile View](mobile-view.png)

---

## ✨ Key Features
* **Async Fetching:** Uses `async/await` to pull data from the API without page reloads.
* **Live Search:** Instant results for any TV show query.
* **Favorites System:** Saves data to `localStorage` so your list persists after refreshing.
* **UX Design:** Includes loading spinners and a fully responsive grid.
* **Security:** Data is sanitized to prevent XSS vulnerabilities.

---

## 🚀 How to Run the Project

### **For Windows Users**
1. **Download:** Click the green "Code" button on GitHub and select **Download ZIP**.
2. **Extract:** Right-click the downloaded folder and select **Extract All**.
3. **Launch:** Open the folder and double-click `index.html` to view it in Chrome or Edge.
4. **Dev Mode:** Right-click the folder and select "Open with Code" to use VS Code with the **Live Server** extension.

### **For macOS Users**
1. **Download:** Download the ZIP file from GitHub and double-click it to unzip.
2. **Launch:** Right-click `index.html` and select **Open With > Google Chrome** (or Safari).
3. **Terminal:** Alternatively, open Terminal, navigate to the project folder, and type `open index.html`.

---

## 🛠️ Technical Reflection
This project focused on handling real-time data and mastering asynchronous flows. I learned how to ensure that the UI stays in sync with `localStorage` for persistent data. I also focused on defensive coding by using `try/catch` for API calls to prevent the app from crashing during network errors and implemented data sanitization to ensure security.

---

## 📊 Self-Assessment (Rubric)
| Criteria | Points | Notes |
| :--- | :---: | :--- |
| API & AJAX | 10/10 | Fetch API used correctly with async/await. |
| Dynamic DOM | 10/10 | Responsive Grid and Template Literals used for UI. |
| Code Quality | 5/5 | Clean structure, naming, and error handling. |
| Persistence | 5/5 | LocalStorage implemented for persistent favorites. |
| Deployment | 5/5 | Live on GitHub Pages with working .gitignore. |
| **TOTAL** | **35/35** | |

---

## ⚙️ Technologies
* HTML5 & CSS3 (Grid/Flexbox)
* JavaScript (ES6+)
* TVMaze API
