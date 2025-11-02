# Professional Portfolio Website

A modern, responsive portfolio website showcasing cloud architecture expertise, technical skills, and professional experience. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy customization.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Interactive Animations**: Smooth transitions, hover effects, and particle animations
- **Custom Cursor**: Unique cursor design for enhanced user experience
- **About Me Slider**: Interactive carousel showcasing professional highlights
- **Expandable Sections**: Collapsible experience and project details for clean presentation
- **AWS Service Logos**: Professional display of AWS certifications and skills with official logos
- **Dark Theme**: Modern dark color scheme with green accent (#10b981)
- **Performance Optimized**: Fast loading with minimal dependencies

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `yourusername.github.io` (replace with your GitHub username)
   - Make it public

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save

4. **Access Your Site**
   - Your portfolio will be live at: `https://yourusername.github.io`
   - Wait 2-5 minutes for initial deployment

### Option 2: Local Development

1. **Clone or Download**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # All styles and animations
├── images/                 # Image assets
│   ├── aws_sdk.png        # AWS SDK logo
│   ├── aws_lambda.png     # Lambda logo
│   ├── DynamoDB.png       # DynamoDB logo
│   └── ...                # Other AWS service logos
├── Anisha_Salunkhe_Resume.pdf  # Resume PDF
├── README.md              # This file
├── DEPLOYMENT.md          # Deployment guide
└── .gitignore            # Git ignore file
```

## 🎨 Customization Guide

### 1. Personal Information

**Update in `index.html`:**

```html
<!-- Hero Section -->
<h1 class="hero-name"><span class="typing-effect">Your Name</span></h1>
<h2 class="hero-title">Your Title</h2>

<!-- Contact Section -->
<a href="mailto:your.email@example.com">Email</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### 2. Color Scheme

**Update in `style.css` (`:root` section):**

```css
:root {
    --primary: #10b981;      /* Main green color */
    --secondary: #34d399;    /* Secondary green */
    --accent: #6ee7b7;       /* Accent green */
    --dark: #0a0a0a;         /* Background dark */
    --light: #1a1a1a;        /* Card background */
}
```

### 3. Logo

**Update in `index.html` (navigation):**

```html
<h1 class="logo"><a href="#hero">YI</a></h1>  <!-- Your Initials -->
```

### 4. Content Sections

Each section can be customized by editing the corresponding HTML in `index.html`:

- **About**: Update `.about-card` content
- **Experience**: Modify `.experience-item` entries
- **Projects**: Edit `.project-card` details
- **Skills**: Add/remove `.skill-item` entries
- **Education**: Update `.education-item` content
- **Certifications**: Modify `.cert-item` links

### 5. Images

Replace images in the `images/` folder:
- AWS service logos (60x60px recommended)
- Profile photos
- Project screenshots

### 6. Resume

Replace `Anisha_Salunkhe_Resume.pdf` with your own PDF resume.

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: 
  - Space Grotesk (headings and body)
  - JetBrains Mono (code/technical text)
- **Icons**: Font Awesome 6.5.1
- **External**: Credly badge embed script

## 🎯 Key Components

### Custom Cursor
Interactive cursor that follows mouse movement with smooth animations.

### Particle Animation
Floating particles in hero section for visual interest.

### About Me Slider
3-card carousel with navigation arrows and dots:
- Professional Role
- Impact & Results
- Expertise

### Expandable Sections
"Show More/Less" buttons for:
- Experience details
- Project descriptions
- Achievement information

### Interactive Skills
Hover effects on skill items with:
- 3D rotation animations
- Glow effects
- Scale transformations

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, reach out via:
- Email: anisha.salunkhe@gmail.com
- GitHub: [@Anisha-Salunkhe](https://github.com/Anisha-Salunkhe)
- LinkedIn: [anishasalunkhe](https://linkedin.com/in/anishasalunkhe)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- AWS for service logos
- Credly for certification badges

---

**Made with ❤️ by Anisha Salunkhe**
