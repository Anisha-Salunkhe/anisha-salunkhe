# Portfolio Customization Guide

This guide will help you customize the portfolio template for your own use.

## Table of Contents
1. [Personal Information](#personal-information)
2. [Colors and Branding](#colors-and-branding)
3. [Content Sections](#content-sections)
4. [Images and Assets](#images-and-assets)
5. [Skills and Technologies](#skills-and-technologies)
6. [Advanced Customization](#advanced-customization)

---

## Personal Information

### 1. Update Your Name and Title

**File: `index.html`**

Find and replace in the Hero section (around line 60):

```html
<!-- REPLACE THIS -->
<h1 class="hero-name"><span class="typing-effect">Anisha Salunkhe</span></h1>
<h2 class="hero-title">Cloud Applications Architect & Full-Stack Engineer</h2>

<!-- WITH YOUR INFO -->
<h1 class="hero-name"><span class="typing-effect">Your Full Name</span></h1>
<h2 class="hero-title">Your Professional Title</h2>
```

### 2. Update Logo/Initials

**File: `index.html`** (around line 30)

```html
<!-- REPLACE THIS -->
<h1 class="logo"><a href="#hero">AS</a></h1>

<!-- WITH YOUR INITIALS -->
<h1 class="logo"><a href="#hero">YI</a></h1>
```

### 3. Update Contact Information

**File: `index.html`** (Contact section, around line 800)

```html
<!-- UPDATE THESE LINKS -->
<a href="mailto:your.email@example.com"><i class="fas fa-envelope"></i> Email</a>
<a href="https://github.com/yourusername" target="_blank"><i class="fab fa-github"></i> GitHub</a>
<a href="https://www.linkedin.com/in/yourprofile/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
```

### 4. Update Footer

**File: `index.html`** (around line 820)

```html
<footer>
    <p>&copy; 2025 Your Name. All rights reserved.</p>
    <p>Your City, State</p>
</footer>
```

---

## Colors and Branding

### Change Color Scheme

**File: `style.css`** (lines 35-42)

```css
:root {
    --primary: #10b981;      /* Main brand color - change this */
    --secondary: #34d399;    /* Secondary color */
    --accent: #6ee7b7;       /* Accent color */
    --dark: #0a0a0a;         /* Background color */
    --light: #1a1a1a;        /* Card background */
    --gradient: linear-gradient(135deg, #059669 0%, #10b981 100%);
}
```

**Popular Color Schemes:**

**Blue Theme:**
```css
--primary: #3b82f6;
--secondary: #60a5fa;
--accent: #93c5fd;
```

**Purple Theme:**
```css
--primary: #8b5cf6;
--secondary: #a78bfa;
--accent: #c4b5fd;
```

**Orange Theme:**
```css
--primary: #f97316;
--secondary: #fb923c;
--accent: #fdba74;
```

---

## Content Sections

### About Me Section

**File: `index.html`** (around line 100)

Update the three cards in the slider:

```html
<div class="about-card active">
    <div class="card-icon"><i class="fas fa-briefcase"></i></div>
    <h3>Your Card Title</h3>
    <p>Your description here...</p>
</div>
```

**Tips:**
- Keep descriptions concise (2-3 sentences)
- Use action verbs
- Highlight key achievements

### Experience Section

**File: `index.html`** (around line 150)

Each experience item follows this structure:

```html
<div class="experience-item">
    <h3>Job Title</h3>
    <p class="company">Company Name, Location</p>
    <p class="duration">Start Date – End Date</p>
    
    <!-- Key highlights (always visible) -->
    <ul class="experience-highlights">
        <li>Key achievement with <strong>metrics</strong></li>
        <li>Another achievement with <strong>impact</strong></li>
    </ul>
    
    <!-- Expandable button -->
    <button class="expand-btn" onclick="...">+ Show More</button>
    
    <!-- Detailed description (hidden by default) -->
    <ul class="experience-details">
        <li>Detailed point 1</li>
        <li>Detailed point 2</li>
    </ul>
</div>
```

**Best Practices:**
- Use 2-3 highlights (always visible)
- Include quantifiable metrics (%, numbers, $)
- Keep detailed points for expandable section
- Use strong action verbs

### Projects Section

**File: `index.html`** (around line 400)

```html
<div class="project-card">
    <div class="glow-effect"></div>
    <h3>Project Name</h3>
    <p class="project-summary"><strong>Key Metric</strong> • <strong>Impact</strong></p>
    
    <button class="expand-btn" onclick="...">+ Details</button>
    
    <p class="project-details">Detailed project description...</p>
    
    <div class="tags">
        <span>Technology 1</span>
        <span>Technology 2</span>
        <span>Technology 3</span>
    </div>
</div>
```

### Skills Section

**File: `index.html`** (around line 600)

**For Font Awesome Icons:**
```html
<div class="skill-item">
    <i class="fab fa-python" style="color: #3776AB;"></i>
    <span>Python</span>
</div>
```

**For Custom Logos:**
```html
<div class="skill-item">
    <img src="images/your-logo.png" alt="Technology" class="skill-logo">
    <span>Technology Name</span>
</div>
```

**Finding Icon Classes:**
- Visit [Font Awesome](https://fontawesome.com/icons)
- Search for your technology
- Copy the class name (e.g., `fab fa-python`)

---

## Images and Assets

### Logo Images

**Location:** `images/` folder

**Requirements:**
- Format: PNG with transparent background
- Size: 60x60px (or larger, will be scaled)
- Naming: Use lowercase with underscores (e.g., `aws_lambda.png`)

**Adding New Logo:**

1. Save image to `images/` folder
2. Add to HTML:
```html
<div class="skill-item">
    <img src="images/your-logo.png" alt="Technology Name" class="skill-logo">
    <span>Technology Name</span>
</div>
```

### Resume PDF

**File:** Replace `Anisha_Salunkhe_Resume.pdf`

1. Save your resume as PDF
2. Name it: `YourName_Resume.pdf`
3. Update link in HTML:
```html
<a href="YourName_Resume.pdf" download="YourName_Resume.pdf" class="btn btn-primary btn-download">
    <i class="fas fa-download"></i> Download Resume (PDF)
</a>
```

---

## Skills and Technologies

### Organizing Skills

Skills are grouped into categories. Customize these in `index.html`:

```html
<div class="skill-category">
    <h3>Your Category Name</h3>
    <div class="skills-grid">
        <!-- Add skill items here -->
    </div>
</div>
```

**Suggested Categories:**
- Programming Languages
- Frameworks & Libraries
- Cloud & Infrastructure
- Databases
- Tools & Platforms
- Soft Skills

---

## Advanced Customization

### Changing Fonts

**File: `index.html`** (head section)

Current fonts:
- Space Grotesk (body and headings)
- JetBrains Mono (code/technical)

**To change:**

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the link in HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
```

4. Update CSS:
```css
body {
    font-family: 'Your Font', sans-serif;
}
```

### Adjusting Animations

**File: `style.css`**

**Disable custom cursor:**
```css
.custom-cursor,
.custom-cursor-dot {
    display: none;
}

* {
    cursor: auto !important;
}
```

**Disable particles:**
```css
#hero .particles {
    display: none;
}
```

**Adjust animation speed:**
```css
/* Find animation and change duration */
animation: float-particle 20s infinite; /* Change 20s to your preference */
```

### Adding New Sections

1. Copy an existing section structure
2. Update the ID:
```html
<section id="your-section">
    <div class="container">
        <h2><i class="fas fa-icon"></i> Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

3. Add navigation link:
```html
<li><a href="#your-section">Section Name</a></li>
```

### Responsive Design

Breakpoints are defined in `style.css` (bottom of file):

```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 480px) { /* Small mobile */ }
```

Test your changes on different screen sizes!

---

## Testing Checklist

Before deploying, test:

- [ ] All links work (email, GitHub, LinkedIn, etc.)
- [ ] Resume PDF downloads correctly
- [ ] All images load properly
- [ ] Expandable sections work
- [ ] Slider navigation works
- [ ] Mobile responsive design
- [ ] All personal information updated
- [ ] No placeholder text remains
- [ ] Colors match your brand
- [ ] Spelling and grammar checked

---

## Need Help?

- Check the main [README.md](README.md) for general information
- See [DEPLOYMENT.md](DEPLOYMENT.md) for hosting instructions
- Open an issue on GitHub for bugs or questions

**Happy customizing! 🎨**
