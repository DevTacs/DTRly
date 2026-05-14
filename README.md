# 🧾 DTRly

DTRly is a **Daily Time Record (DTR) Maker System** that allows users to create, manage, and export structured time records using predefined templates. It is designed to simplify DTR creation, ensure consistency, and generate print-ready outputs.

---

## 🚀 MVP (Minimum Viable Product)

Start with only the core essentials:

- 👤 Employee Information Form
- 📅 DTR Table (manual input)
- 🧮 Basic hours computation
- 💾 Save DTR as JSON

> No OCR, export, dashboard, or advanced features in MVP.

---

## ✨ Features

### 🧾 1. Predefined DTR Templates

Standard formats for consistent records:

- Daily Time Record (Basic)
- Weekly DTR
- Monthly DTR

✔ Ensures uniform structure  
✔ Reduces input errors

---

### 👤 2. Employee Information Module

Stores employee details:

- Employee Name
- Employee ID
- Department
- Position
- Pay Period (From / To)

---

### 📅 3. Time Record Table

Main DTR input system:

- Add date row
- Time In / Time Out
- Optional Break Time
- Auto-computed hours worked

---

### 🧮 4. Automatic Computation

- Total hours per day
- Total hours per week/month
- Optional:
    - Late computation
    - Undertime
    - Overtime

---

### ✏️ 5. Editable Table UI

- Inline editing
- Add/remove rows
- Auto-save drafts
- Optional row reordering

---

### 📄 6. DTR Preview Generator

- Real-time preview
- Print-ready A4 layout
- Company-style formatting

---

### 📤 7. Export System

- Export to PDF (official DTR format)
- Export to Excel (.xlsx)
- Download support

---

### 💾 8. Save & History

- Save multiple DTR records per user
- View past records
- Edit previous entries
- Duplicate DTR for next period

---

### 🔍 9. Search & Filter

- Search by employee name
- Filter by date range
- Filter by department

---

### 🧠 10. OCR Feature (Phase 2)

- Upload image of handwritten/printed DTR
- Auto-fill extracted data
- User confirmation before saving

---

### 🔐 11. Validation System

- Prevent missing time-in/time-out
- Validate time format
- Ensure time-out is after time-in
- Required field checks

---

### 📊 12. Admin Dashboard (Optional)

- Total users
- Total DTR created
- Export logs
- Template management

---

### 📱 13. Responsive UI

- Mobile-friendly input
- Tablet-friendly table editing
- Desktop print optimization

---

### 🧾 14. Print-Ready Format

- Clean A4 layout
- Signature fields:
    - Employee
    - Supervisor
    - HR

---

## 🛠 Suggested Tech Stack

### Backend

- Node.js
- Express.js

### Frontend

- React (recommended)
- Any modern UI framework

### Database

- MSSQL / PostgreSQL / MongoDB

### Export Tools

- PDF: puppeteer / pdf-lib
- Excel: xlsx

---

## 📦 Data Structure (MVP)

```json
{
    "employee": {
        "name": "",
        "id": "",
        "department": "",
        "position": ""
    },
    "payPeriod": {
        "from": "",
        "to": ""
    },
    "records": [
        {
            "date": "",
            "timeIn": "",
            "timeOut": "",
            "hoursWorked": 0
        }
    ]
}
```
