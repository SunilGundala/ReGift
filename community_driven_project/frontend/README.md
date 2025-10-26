# Community-Driven E-Commerce Platform - Frontend

This is the React frontend for the Community-Driven E-Commerce Platform, a platform where people can give away unwanted items for free to those in need.

## 🚀 Features

- **Modern React Application** - Built with React 18, TypeScript, and Material-UI
- **Responsive Design** - Mobile-first design that works on all devices
- **Landing Page** - Comprehensive landing page showcasing platform features
- **Component Library** - Reusable components for consistent UI
- **Performance Optimized** - Code splitting, lazy loading, and optimized builds
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Material-UI (MUI)** - Comprehensive React component library
- **React Router** - Client-side routing
- **Emotion** - CSS-in-JS styling solution

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm 9+

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

### Docker Development

1. **Build the Docker image**
   ```bash
   docker build -t community-frontend .
   ```

2. **Run the container**
   ```bash
   docker run -p 3001:3001 community-frontend
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer)
│   └── sections/       # Landing page sections
├── pages/              # Page components
├── theme.ts            # Material-UI theme configuration
├── index.tsx           # Application entry point
├── App.tsx             # Main application component
└── index.css           # Global styles
```

## 🎨 Design System

The application uses a custom Material-UI theme with:

- **Primary Color**: Blue (#1976d2)
- **Secondary Color**: Pink (#dc004e)
- **Typography**: Inter font family
- **Spacing**: 8px base unit
- **Border Radius**: 12px default, 8px for buttons

## 📱 Responsive Breakpoints

- **xs**: 0px and up (mobile)
- **sm**: 600px and up (tablet)
- **md**: 900px and up (desktop)
- **lg**: 1200px and up (large desktop)
- **xl**: 1536px and up (extra large)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:ci

# Run tests in watch mode
npm test -- --watch
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:3000
REACT_APP_FRONTEND_URL=http://localhost:3001
```

## 🚀 Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Docker Production

```bash
# Build production image
docker build -t community-frontend:prod .

# Run production container
docker run -p 3001:3001 community-frontend:prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new components
- Follow the existing component structure
- Add proper TypeScript types
- Include responsive design considerations
- Test components thoroughly
- Follow accessibility best practices

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- React team for the amazing framework
- All contributors who help make this project better

---

**Made with ❤️ by the community**