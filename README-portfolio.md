# Yanina — Portfolio

A clean, responsive portfolio website to showcase selected projects, skills, and contact details.

> **Tech:** HTML5, modern CSS (custom properties, Grid/Flexbox, `clamp()`), vanilla JS (IntersectionObserver, scrollspy, accessible burger menu).

## Live

- **Production:** https://yaninaholubenko.github.io/yanina-portfolio
- **Repository:** https://github.com/YaninaHolubenko/yanina-portfolio

## Features

- ✨ **Polished UI** with a hero section, projects grid, certifications, skills, and a personal journey block.
- 📱 **Responsive layout** with mobile-first styles and adaptive typography using CSS variables and `clamp()`.
- 🧭 **Accessible navigation:** semantic landmarks (`header`, `nav`, `main`, `footer`), focusable burger menu with ARIA (`aria-controls`, `aria-expanded`), and Escape-to-close.
- 🎯 **Scroll reveal** animations via `IntersectionObserver` (`.reveal` → `.is-visible`).
- 🔗 **Project cards** include *Live* and *GitHub* links (open safely with `rel="noopener"`).
- 🪪 **Certificates** section with links to PDF proofs.
- 🛡️ **Basic a11y:** all images include `alt`, external links use `rel="noopener"` when `target="_blank"`.

## Project Structure

```
.
├── index.html
├── contact.html
├── styles/
│   └── base.css
├── scripts/
│   └── main.js
└── assets/
    ├── images/        # project thumbnails & photography
    └── certificates/  # PDF certificates
```

## Getting Started (Local)

1. Clone the repository:
   ```bash
   git clone https://github.com/YaninaHolubenko/yanina-portfolio.git
   cd yanina-portfolio
   ```

2. Open `index.html` in your browser (no build step required).  
   For live reload during development, you can use VS Code’s *Live Server* extension or:
   ```bash
   python3 -m http.server 5173
   # then open http://localhost:5173
   ```


## Accessibility Notes

- Semantic HTML5 landmarks are used across pages.
- All images include `alt` text.
- Burger menu toggles `aria-expanded` and closes on outside click or `Esc`.
- Focus styles are preserved for keyboard users.


## License

This project is open for personal portfolio use. If you reuse code, please add attribution.


