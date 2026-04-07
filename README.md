# 🚀 Manual Tester – Automated QA Document Generator

## 📌 Overview
Manual Tester is a full-stack web application that helps QA engineers automatically generate professional testing documents.

Users can fill forms, upload attachments, and download documents in **PDF, Word, or Image format**.

---

## ✨ Features

### 🧪 Test Plan Generator
- Generate structured test plans
- Includes:
  - Project Name
  - Version
  - Scope
  - Objectives
  - Test Environment
  - Schedule

---

### 📋 Test Case Generator (Table Format)
- Generates test cases in table format
- Fields:
  - Test Case ID
  - Description
  - Steps
  - Expected Result
  - Actual Result
  - Status

---

### 🐞 Bug Report Generator (Table Format)
- Professional bug report format
- Fields:
  - Bug ID
  - Summary
  - Severity
  - Priority
  - Steps to Reproduce
  - Assigned To

---

### 📎 Attachments
- Upload screenshots/files
- Images included in generated documents

---

### 📄 Export Options
- PDF (with tables)
- Word (.docx)
- Image (PNG)

---

### 👀 Preview Feature
- Preview documents before downloading
- Supports PDF and Image preview

---

### 🎨 UI Features
- Modern React UI
- Responsive design
- Animations and gradients
- Tab-based navigation

---

## 🏗️ Tech Stack

### Frontend
- React.js
- HTML, CSS, JavaScript
- Axios

### Backend
- Node.js
- Express.js

### Libraries
- pdfkit + pdfkit-table
- docx
- multer
- puppeteer

---

## 📂 Project Structure

```
ManualTester/
│
├── backend/
│   ├── index.js
│   ├── uploads/
│   └── generated/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/your-username/manual-tester.git
cd manual-tester
```

---

### 2. Run Backend
```bash
cd backend
npm install
node index.js
```

Backend runs at:
```
http://localhost:5000
```

---

### 3. Run Frontend
```bash
cd frontend
npm install
npm start
```

Frontend runs at:
```
http://localhost:3000
```

---

## 🚀 Usage

1. Select document type (Test Plan / Test Case / Bug Report)
2. Fill in required fields
3. Upload attachments (optional)
4. Select format (PDF / Word / Image)
5. Click **Generate Document**
6. Preview and download

---

## 💡 Future Improvements
- User authentication
- Cloud storage
- Dashboard for reports
- AI-based test suggestions
- PWA support

---

## 🤝 Contributing
Feel free to fork this repository and contribute.

---

## 📜 License
MIT License

---

## 👨‍💻 Author
Roshan Khawash  
GitHub: https://github.com/roshan43210

---

## ⭐ Support
If you like this project, give it a ⭐ on GitHub!
