# Booklet - E-Commerce Website

A responsive e-commerce website for browsing and purchasing books across various categories.

## Live Demo

**[Experience Booklet Store Now](https://binibiningjenna.github.io/booklet)**

![Booklet ](assets/img/image.png)

## Tech Stack

## Technology Stack

### Version 1 (Static Frontend)

| Technology                                                                                               | Purpose               | Used in                 |
| -------------------------------------------------------------------------------------------------------- | --------------------- | ----------------------- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)                | Page structure        | `index.html`, `assets/` |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)                   | Styling               | `assets/css/styles.css` |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Dynamic functionality | `assets/js/populate.js` |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)    | Responsive layout     | All pages               |
| ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github&logoColor=white) | Hosting               | Live deployment         |

### Version 2 (PHP Fullstack)

| Technology                                                                                               | Purpose           | Used in                    |
| -------------------------------------------------------------------------------------------------------- | ----------------- | -------------------------- |
| ![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)                      | Backend logic     | `version-2/BE/*.php`       |
| ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white)                | Database          | `version-2/BE/booklet.sql` |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Frontend logic    | `version-2/FE/script.js`   |
| ![Fetch API](https://img.shields.io/badge/Fetch_API-FF6A00?style=flat&logo=mdnwebdocs&logoColor=white)   | API communication | `version-2/FE/script.js`   |
| ![XAMPP](https://img.shields.io/badge/XAMPP-FB7A24?style=flat&logo=xampp&logoColor=white)                | Local server      | Development setup          |

### Shared Technologies

| Technology                                                                                                    | Purpose         | Used in Both Versions |
| ------------------------------------------------------------------------------------------------------------- | --------------- | --------------------- |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)                           | Version control | Entire repository     |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat&logo=fontawesome&logoColor=white) | Icons           | UI elements           |

## Features

### Core Functionality

- **Category Navigation** (Non-Fiction, Fiction, Education, Kids)
- **Book Display** with covers, details, and prices
- **Interactive Shopping Cart**:
  - Add/remove items
  - Quantity adjustment (± buttons)
  - Real-time total calculation
  - Checkout system

## Dual Version Architecture

```
booklet/
├── assets/ # Version 1 Resources
│ ├── css/styles.css
│ ├── js/
│ │ ├── data.js
│ │ └── populate.js
│ └── img/
│
├── version-2/ # Version 2 (PHP)
│ ├── BE/ # Backend
│ │ ├── booklet.sql
│ │ ├── categories.php
│ │ ├── connect.php
│ │ └── products.php
│ │
│ └── FE/ # Frontend
│ ├── img/
│ ├── index.html
│ ├── script.js
│ └── styles.css
│
├── index.html # Version 1 Entry
└── README.md
```

## 🚀 Version Access

### Version 1 (Static Frontend)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Hosted-green)](https://binibiningjenna.github.io/booklet)

- **Instant Access**: Loads automatically from root `index.html`
- **Tech**: Pure HTML/CSS/JS
- **Data**: Static JSON (`data.js`)

### Version 2 (PHP Fullstack)

[![Local Setup](https://img.shields.io/badge/Version_2-Local_Setup-blue)]()

- **Requires**:
  ```bash
  php -S localhost:8000 -t version-2/FE/
  ```

## Quick Start

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/booklet-store.git
   cd booklet-store

   ```

2. Open in browser
   ```
   open index.html  # Or double-click the file
   ```
