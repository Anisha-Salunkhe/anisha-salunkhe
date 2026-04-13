# Setup Guide

## Local Development

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3 or Node.js (for local server)

### Quick Start

#### Option 1: Python Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/Anisha-Salunkhe/anisha-salunkhe.github.io.git
cd anisha-salunkhe.github.io

# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

#### Option 2: Node.js Server
```bash
# Install live-server globally
npm install -g live-server

# Navigate to project directory
cd anisha-salunkhe.github.io

# Start server
live-server

# Browser opens automatically
```

#### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Open project folder
3. Right-click `index.html` → "Open with Live Server"

## Project Structure

```
anisha-salunkhe/
├── assets/
│   ├── css/               # Stylesheets
│   │   ├── style.css
│   │   ├── animations.css
│   │   └── aws-icons.css
│   ├── js/                # JavaScript modules
│   │   └── script.js
│   ├── images/            # Images and logos
│   │   ├── logos/         # Company logos
│   │   └── aws-services/  # AWS service icons
│   └── documents/         # PDF resume
├── config/                # Configuration files
│   └── site-config.json
├── docs/                  # Documentation
├── index.html             # Main HTML file
└── README.md
```

## Configuration

Edit `config/site-config.json` to customize:
- Personal information
- Social media links
- Google Analytics ID
- Feature toggles
- Stats data

## Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
    --primary: #10b981;    /* Main green color */
    --secondary: #34d399;  /* Lighter green */
    --accent: #6ee7b7;     /* Accent green */
}
```

### Content
- **Personal Info**: Edit `index.html` sections
- **Experience**: Update experience items in HTML
- **Projects**: Modify project cards
- **Skills**: Add/remove skill items

### Images
- **Company Logos**: Place in `assets/images/logos/`
- **AWS Icons**: Place in `assets/images/aws-services/`
- **Resume PDF**: Update in `assets/documents/`

## Testing

1. **Cross-browser**: Test in Chrome, Firefox, Safari, Edge
2. **Responsive**: Test on mobile, tablet, desktop
3. **Performance**: Use Lighthouse in Chrome DevTools
4. **Accessibility**: Check with WAVE or axe DevTools

## Troubleshooting

### Images not loading
- Check file paths in HTML
- Verify images are in correct folder
- Check file extensions (case-sensitive on some systems)

### Animations not working
- Check browser console for errors
- Verify JavaScript is enabled
- Check browser compatibility

### Styling issues
- Clear browser cache
- Check CSS file is linked correctly
- Verify CSS syntax

## Need Help?

- **Issues**: [GitHub Issues](https://github.com/Anisha-Salunkhe/anisha-salunkhe.github.io/issues)
- **Email**: anisha.salunkhe@gmail.com
