# Haresh Chandrasekhar - Portfolio Website

A professional portfolio website featuring LSU's iconic purple and gold colors, showcasing research, publications, and experience in Computational Fluid Dynamics and Machine Learning.

## 🎨 Features

- **LSU Colors Theme**: Purple (#461D7C) and Gold (#FDD023)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Navigation**: Sticky navbar with active section highlighting
- **Multiple Sections**:
  - Home (Hero section)
  - About
  - Experience (Timeline view)
  - Education
  - Research Highlights
  - Publications & Presentations
  - Skills & Expertise
  - Contact

## 🚀 Deployment to GitHub Pages

### Quick Setup

1. **Make sure your repository is named correctly**: `ori0902.github.io`

2. **Upload the files to your repository**:
   ```bash
   git add index.html styles.css script.js README.md
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"

4. **Access your website**:
   - Your portfolio will be live at: `https://ori0902.github.io`
   - It may take a few minutes for changes to appear

### File Structure

```
ori0902.github.io/
├── index.html          # Main HTML file
├── styles.css          # CSS styling with LSU colors
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎯 Customization

### Update Your Information

1. **Social Media Links** (in index.html):
   - Update GitHub link: Replace `https://github.com/ori0902` with your actual GitHub URL
   - Update LinkedIn: Replace `https://linkedin.com` with your LinkedIn profile
   - Update Google Scholar: Replace `https://scholar.google.com` with your Scholar profile

2. **Contact Information**:
   - All contact details are pulled from your resume
   - Phone: +1 334-552-1513
   - Email: hchand5@lsu.edu
   - Location: Baton Rouge, Louisiana

### Adding New Sections

The portfolio is built with a modular structure. To add a new section:

1. Add a new `<section>` in `index.html`
2. Add styling in `styles.css`
3. Add the navigation link in the navbar

### Color Customization

All colors are defined as CSS variables in `styles.css`:
```css
:root {
    --primary-purple: #461D7C;  /* LSU Purple */
    --primary-gold: #FDD023;    /* LSU Gold */
    --dark-purple: #2d1250;
    --light-purple: #6b3ba8;
    --dark-gold: #d4ad0a;
    --light-gold: #fff4a3;
}
```

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 600px - 968px
- Mobile: < 600px

## ✨ Features Breakdown

### Navigation
- Sticky navbar that changes on scroll
- Mobile-responsive hamburger menu
- Active section highlighting
- Smooth scroll to sections

### Animations
- Fade-in animations for sections
- Counter animations for statistics
- Typing effect for hero subtitle
- Parallax effect on hero section
- Hover effects on cards and buttons

### Sections

1. **Hero Section**: Eye-catching introduction with gradient background
2. **About**: Summary with animated statistics
3. **Experience**: Timeline view of all positions
4. **Education**: Card-based layout for degrees
5. **Research**: Highlighted research projects with tags
6. **Publications**: Organized by journals and conferences
7. **Skills**: Categorized technical skills
8. **Contact**: Contact information and social links

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Poppins)

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio, but if you find any bugs or have suggestions:
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

- **Email**: hchand5@lsu.edu
- **Phone**: +1 334-552-1513
- **Location**: Baton Rouge, Louisiana

## 📝 License

This project is open source and available for personal use.

---

**Last Updated**: January 2025

Built with 💜 and 💛 for LSU
