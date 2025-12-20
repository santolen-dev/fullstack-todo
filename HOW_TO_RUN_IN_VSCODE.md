# How to Run TodoSanto in VS Code

## Quick Start Guide

### Method 1: Using VS Code Tasks (Easiest)

1. **Open the project in VS Code**
   - File → Open Folder → Select `todoSanto` folder

2. **Install Frontend Dependencies** (First time only)
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Tasks: Run Task"
   - Select "Install Frontend Dependencies"
   - Wait for npm install to complete

3. **Start Both Backend and Frontend**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Tasks: Run Task"
   - Select "Run Both (Backend + Frontend)"
   - This will start both servers in parallel

4. **Open in Browser**
   - Frontend will open at: `http://localhost:5173` (or `http://localhost:3000`)
   - Backend API runs at: `http://localhost:8080`

---

### Method 2: Using Integrated Terminal (Manual)

#### Step 1: Start Backend

1. Open a terminal in VS Code: `Ctrl+`` (backtick) or `View → Terminal`
2. Navigate to backend:
   ```bash
   cd backend
   ```
3. Run Spring Boot:
   ```bash
   mvn spring-boot:run
   ```
4. Wait for "Started TodoApplication" message
5. Backend runs on: `http://localhost:8080`

#### Step 2: Start Frontend (New Terminal)

1. Open a **NEW** terminal: Click the `+` icon in terminal panel or `Ctrl+Shift+``
2. Navigate to frontend:
   ```bash
   cd frontend
   ```
3. Install dependencies (first time only):
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Frontend runs on: `http://localhost:5173` (Vite default port)
   - VS Code will show a notification with the URL
   - Or check the terminal output for the local URL

#### Step 3: Open in Browser

- Click the link in the terminal, or
- Open `http://localhost:5173` in your browser

---

### Method 3: Using Debug Configuration

1. **Install VS Code Java Extension Pack** (if not installed)
   - Press `Ctrl+Shift+X` to open Extensions
   - Search for "Extension Pack for Java" and install it
   - This enables Java debugging in VS Code

2. **Start Debugging**
   - Press `F5` or go to `Run → Start Debugging`
   - Select "Launch Full Stack App" from the dropdown
   - Or select individual configurations:
     - "Launch Spring Boot Application" (backend only)
     - "Launch Frontend (Chrome)" (frontend only)

---

## Prerequisites Check

Before running, make sure you have:

### ✅ Required Software

1. **Node.js** (v16 or higher)
   - Check: Open terminal and run `node --version`
   - Download: https://nodejs.org/

2. **Java 17 or higher**
   - Check: Open terminal and run `java -version`
   - Download: https://adoptium.net/

3. **Maven 3.6 or higher**
   - Check: Open terminal and run `mvn --version`
   - Download: https://maven.apache.org/

### ✅ VS Code Extensions (Recommended)

1. **Extension Pack for Java**
   - Provides Java support, debugging, and Spring Boot tools
   - Install via Extensions panel (`Ctrl+Shift+X`)

2. **ES7+ React/Redux/React-Native snippets**
   - Helpful for React development

3. **Prettier - Code formatter**
   - Code formatting

---

## Troubleshooting

### Backend Won't Start

**Problem**: `mvn: command not found`
- **Solution**: Install Maven and add it to your PATH

**Problem**: `JAVA_HOME not set`
- **Solution**: Set JAVA_HOME environment variable to your JDK path

**Problem**: Port 8080 already in use
- **Solution**: Stop other applications using port 8080, or change port in `application.properties`

### Frontend Won't Start

**Problem**: `npm: command not found`
- **Solution**: Install Node.js from nodejs.org

**Problem**: `Cannot find module` errors
- **Solution**: Run `npm install` in the frontend directory

**Problem**: Port 5173 or 3000 already in use
- **Solution**: Vite will automatically try the next available port

### Connection Errors

**Problem**: Frontend can't connect to backend
- **Solution**: Make sure backend is running on port 8080
- Check: Open `http://localhost:8080/api/todos` in browser - should return `[]`

---

## VS Code Tips

### Running Tasks Quickly

- **Keyboard Shortcut**: `Ctrl+Shift+P` → Type "task" → Select task
- **Shortcut**: `Ctrl+Shift+B` (if you set it as build task)

### Using Multiple Terminals

- Split terminal: `Ctrl+\` or click the split icon
- Create new terminal: `Ctrl+Shift+`` or `Ctrl+Shift+5`
- Switch between terminals: `Ctrl+PageUp/PageDown`

### Debugging

- Set breakpoints: Click left of line numbers
- Debug backend: Use Java debugger (F5 → Select Spring Boot config)
- Debug frontend: Use Chrome DevTools or React Developer Tools

---

## Project Structure

```
todoSanto/
├── backend/              # Spring Boot API
│   ├── src/
│   │   └── main/java/com/teastore/todo/
│   └── pom.xml
├── frontend/            # React + Vite App
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
└── .vscode/            # VS Code configurations
    ├── tasks.json      # Task definitions
    └── launch.json     # Debug configurations
```

---

## Quick Commands Reference

### Backend
```bash
cd backend
mvn spring-boot:run          # Run backend
mvn clean package            # Build JAR file
```

### Frontend
```bash
cd frontend
npm install                  # Install dependencies
npm run dev                  # Start dev server
npm run build                # Build for production
npm run preview              # Preview production build
```

---

## Need Help?

- Check the main `README.md` for more details
- Verify all prerequisites are installed
- Check terminal output for specific error messages
- Make sure both servers are running before testing

---

**Happy Coding! 🚀**

