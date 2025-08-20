# MLD Solutions - Static Website

A modern, responsive website for MLD Solutions built with React and Tailwind CSS.

## Features

- **5 Complete Pages**: Home, About Us, Join Us, Services, and Contact
- **Static Content**: No API calls, all data is static and dummy data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Navigation**: Consistent navigation across all pages

## Pages

### 1. Home (`/`)
- Hero section with call-to-action buttons
- Company statistics
- Featured services overview
- Portfolio highlights
- Client testimonials
- Call-to-action section

### 2. About Us (`/about`)
- Company story and mission
- Key statistics and achievements
- Core values
- Leadership team
- Company culture

### 3. Join Us (`/join-us`)
- Career opportunities
- Company benefits
- Open positions with requirements
- Application process
- Company culture highlights

### 4. Services (`/services`)
- Comprehensive service offerings
- Detailed service descriptions
- Technology stacks
- Pricing information
- Client testimonials
- Work process

### 5. Contact (`/contact`)
- Contact form (static, no API calls)
- Company information
- Office address and hours
- Social media links
- Contact details

## Technology Stack

- **Frontend**: React 17
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: AOS (Animate On Scroll)
- **Build Tool**: Create React App

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── NavBar.js
│   │   └── NavLinks.js
│   ├── Footer.js
│   └── ScrollToTop.js
├── pages/
│   ├── Home.js
│   ├── About.js
│   ├── JoinUs.js
│   ├── Services.js
│   └── Contact.js
├── App.js
└── index.js
```

## Key Features

- **No External Dependencies**: All data is static and contained within components
- **Consistent Design**: Uniform UI/UX across all pages
- **Responsive Layout**: Works perfectly on all device sizes
- **Fast Loading**: No API calls or external data fetching
- **Easy Maintenance**: Simple to update content and styling

## Customization

All content is stored as dummy data objects within each component. To customize:

1. Update the data objects in each page component
2. Modify the styling using Tailwind CSS classes
3. Add or remove sections as needed
4. Update images and assets in the `src/images/` directory

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for MLD Solutions internal use.
