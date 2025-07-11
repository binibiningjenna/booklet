# Booklet - E-Commerce Website

A responsive e-commerce website for browsing and purchasing books across various categories.

## Live Demo

**[Experience Booklet Store Now](https://binibiningjenna.github.io/booklet/v1-static/)**

![Booklet ](v1-static/assets/img/image.png)

## Technology Stack

### Version 1 (Static Frontend)

| Technology                                                                                               | Purpose               | Used in                 |
| -------------------------------------------------------------------------------------------------------- | --------------------- | ----------------------- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)                | Page structure        | `index.html`, `assets/` |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)                   | Styling               | `assets/css/styles.css` |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Dynamic functionality | `assets/js/populate.js` |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)    | Responsive layout     | All pages               |
| ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github&logoColor=white) | Hosting               | Live deployment         |

### Version 2 (PHP)

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

```booklet/
├── v1-static/          # Original static version (hosted)
│   ├── assets/         # CSS, JS, images
│   └── index.html      # Entry point
│
├── v1-php/             # PHP fullstack version
│   ├── BE/             # Backend
│   │   ├── booklet.sql
│   │   ├── categories.php
│   │   ├── connect.php
│   │   └── products.php
│   │
│   └── FE/             # Frontend
│       ├── img/        # Book covers
│       ├── script.js   # Updated fetch logic
│       ├── styles.css
│       └── index.html
│
└── README.md           # This documentation
```

## Dual Version System

### v1-static (Hosted Frontend)
- **Location**: `/v1-static`
- **Tech**: HTML/CSS/JS
- **Access**: [Live Demo](https://binibiningjenna.github.io/booklet/v1-static/)

### v1-php (Fullstack Local)
- **Location**: `/v1-php`
- **Tech**: PHP/MySQL + Frontend
- **Setup**:
  ```bash
  cd v1-php/FE
  php -S localhost:8000

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
