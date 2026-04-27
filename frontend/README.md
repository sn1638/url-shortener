# URL Shortener Frontend

A modern React + Tailwind CSS frontend for the URL shortener application.

## Features

- Clean, responsive design with Tailwind CSS
- Fast URL shortening
- Copy to clipboard functionality
- Error handling and user feedback
- Real-time validation

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client

## Environment Variables

Create a `.env` file based on `.env.example`:
```
VITE_API_URL=http://localhost:8000
```

## Project Structure

```
src/
├── components/
│   └── URLShortener.jsx    - Main shortener component
├── services/
│   └── api.js              - API calls
├── App.jsx                 - Main app component
├── main.jsx                - React entry point
└── index.css               - Tailwind CSS imports
```

## API Integration

The frontend connects to the backend API running on `http://localhost:8000`:

- **POST** `/url` - Create a shortened URL
  - Request body: `{ url: "https://example.com/long/url" }`
  - Response: `{ id: "shortId" }`
