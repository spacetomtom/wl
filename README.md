# 🎨 Rijks Explorer

A modern web application for exploring the Rijksmuseum's extensive art collection. Built with React, TypeScript, and Vite.

## 🚀 Features

- Search through thousands of artworks
- Responsive grid layout
- Lazy loading images
- Modern, minimalist UI

## 🛠️ Technologies

- React 18
- TypeScript
- Vite
- SCSS Modules
- React Query
- Zustand for state management
- Lucide React for icons

## 📦 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm 7.x or later

### Installation

1. Clone the repository
2. Copy the environment variables file:
   ```bash
   cp .env.example .env
   ```
3. Update the `.env` file with your Rijksmuseum API key
4. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Linting

Run ESLint:

```bash
npm run lint
```

## 🔑 Environment Variables

The following environment variables are required:

- `VITE_RIJKSMUSEUM_API_KEY`: Your Rijksmuseum API key
- `VITE_RIJKSMUSEUM_API_URL`: The Rijksmuseum API base URL

## 📝 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## 🎨 Project Structure

```
src/
├── components/        # React components
├── services/         # API services
├── store/           # Zustand store
└── styles/          # Global styles and variables
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request