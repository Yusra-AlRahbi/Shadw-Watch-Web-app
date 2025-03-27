
# 🚔 Shadow Watch Frontend

Shadow Watch is an interactive web application that enables users to report and track crimes using a dynamic map interface. The project is built with **React.js, Vite, Leaflet.js, and Tailwind CSS**.

---

## 📌 Features Completed (Levels 1 & 2)

### ✅ Level 1: Basic UI  
- Designed the **main interface** with a crime **map**.  
- Added a **Header (Navigation Bar)** and **Footer** for better navigation.  

### ✅ Level 2: Crime Reporting Form  
- Implemented a **"Report Crime"** button that opens a reporting form.  
- Users can enter:  
  - **Report Details**  
  - **Crime Type** (Assault, Robbery, Homicide, Kidnapping, Theft)  
  - **National ID** (valid number input)  
  - **Crime Location** (latitude & longitude)  
- Crimes are stored in **LocalStorage**, ensuring data persistence.  
- Newly reported crimes are displayed **dynamically** on the map.  
- **Form validation** added to ensure valid data input.  

---

## 🚀 Getting Started

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
- **Node.js** (version 16 or later)  
- **Git** (for cloning the repository)  

### **2️⃣ Installation Steps**  

```sh
# Clone the repository from GitHub
git clone https://github.com/Yusra-AlRahbi/Shadw-Watch-Web-app.git

# Navigate to the project directory
cd shadow-watch

# Install dependencies
npm install
 ```

---
## 3️⃣ Running the Application
``` npm run dev ```

Then, open your browser and visit:
http://localhost:5173 

---

## 📂Project Structure
``` 
📂 shadow-watch
 ├── 📂 src
 │   ├── 📂 components
 │   │   ├── CrimeMap.js         # Displays reported crimes on the map
 │   │   ├── CrimeReportForm.js  # Crime reporting form
 │   │   ├── Header.js           # Navigation bar
 │   │   ├── Footer.js           # Footer section
 │   ├── App.js  # Main application component
 │   ├── main.jsx  # Application entry point
 ├── 📜 index.html  # Main HTML file
 ├── 📜 package.json  # Dependencies and scripts
 ├── 📜 README.md  # Project documentation
``` 

