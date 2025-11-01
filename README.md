# 📝 README Generator

### Create Beautiful README Files Effortlessly

A modern, interactive web application that helps you generate professional README files for your projects. Built with React, Vite, and Tailwind CSS with multi-language support.

🌐 **[Try it Live!](https://megreadmegenerator.netlify.app/)**

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_SITE_ID/deploy-status)](https://app.netlify.com/sites/megreadmegenerator/deploys)

## ✨ Features

### Core Features
- **📝 Interactive Form Builder** - Easy-to-use form fields for all README sections
- **👁️ Live Preview** - See your README rendered in real-time as you type
- **⬇️ One-Click Download** - Download your generated README.md file instantly
- **🌐 Multi-Language Support** - Switch between English and Turkish with one click
- **🎨 Beautiful UI** - Clean, modern interface with a split-pane layout
- **📱 Responsive Design** - Works perfectly on all screen sizes

### Customizable Sections
Add/remove and customize any section:
- **Basic Information** - Project name, emoji, subtitle, and description
- **Badges** - Version, license, build status, and technology badges
- **Screenshots** - Image gallery with titles and descriptions
- **Features** - Organized feature groups with detailed items
- **Tech Stack** - Core technologies and libraries/frameworks
- **Installation** - Prerequisites and step-by-step installation guide
- **API Endpoints** - Document your API with methods, paths, and sample responses
- **License** - Choose from MIT, Apache, GNU GPL, BSD, ISC, or custom
- **Footer** - Customizable footer with center alignment option

### Language Support
- **English (🇬🇧)** - Full English interface
- **Turkish (🇹🇷)** - Complete Turkish translation
- **Persistent Preference** - Language choice saved in browser
- **Instant Switching** - Toggle between languages without reload

## 🌐 Live Demo

**Access the app here:** [https://megreadmegenerator.netlify.app/](https://megreadmegenerator.netlify.app/)

No installation required! Simply visit the link and start creating beautiful README files instantly.




## 🛠️ Tech Stack

### Core Technologies

| Category | Technology |
|----------|------------|
| **UI Library** | React 19.2.0 |
| **Build Tool** | Vite 7.1.12 |
| **Styling** | Tailwind CSS 3.4.18 |

### Key Dependencies

- **react-markdown** (v10.1.0) - Render Markdown as React components
- **remark-gfm** (v4.0.1) - GitHub Flavored Markdown support
- **rehype-raw** (v7.0.0) - Enable HTML rendering in markdown
- **@tailwindcss/typography** (v0.5.19) - Beautiful prose styling
- **autoprefixer** (v10.4.21) - PostCSS plugin for vendor prefixes
- **postcss** (v8.5.6) - CSS transformations

## 📖 How to Use

**Visit:** [https://megreadmegenerator.netlify.app/](https://megreadmegenerator.netlify.app/)

### 1. Fill in the Form (Left Panel)
- Enter your project details
- Add badges for technologies, version, build status
- Upload screenshot URLs and descriptions
- List features and capabilities
- Document your tech stack
- Add installation steps and API documentation
- Configure license and footer

### 2. Preview in Real-Time (Right Panel)
- Live updates as you type
- Markdown formatting preview
- HTML rendering support
- View raw markdown option

### 3. Switch Language
- Click the language button (🇬🇧 English / 🇹🇷 Türkçe) in the header
- All labels, buttons, and placeholders update instantly
- Language preference is saved automatically

### 4. Download
- Click the "Download README.md" button in the top-right corner
- Saves as `README.md`
- Ready to add to your project

## 🎯 Use Cases

- **New Projects** - Quick start with a professional README
- **Open Source** - Create comprehensive documentation
- **Personal Projects** - Present your work professionally
- **Learning** - Understand README best practices
- **Multi-Language Projects** - Document in English or Turkish

## 📁 Project Structure

```
ReadmeGenerator/
├── src/
│   ├── components/
│   │   ├── FormSection.jsx       # Left panel form
│   │   └── PreviewSection.jsx    # Right panel preview
│   ├── contexts/
│   │   └── LanguageContext.jsx   # Language state management
│   ├── utils/
│   │   └── generateMarkdown.js   # Markdown generation logic
│   ├── translations.js           # EN/TR translations
│   ├── App.jsx                   # Main app component
│   ├── index.css                 # Global styles
│   └── main.jsx                  # App entry point
├── public/                       # Static assets
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
└── vite.config.js                # Vite configuration
```

## 🌍 Internationalization

The app supports two languages with complete translations:

- **English (EN)** - Default language
- **Turkish (TR)** - Full translation

All UI elements, labels, buttons, placeholders, and help text are translated. The language preference is stored in `localStorage` and persists across sessions.

## 📄 License

This project is licensed under the ISC License.

---

<div align="center">

### ⭐ Made with ❤️ using React and Vite

**Start creating beautiful READMEs today!**

</div>
