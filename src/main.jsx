import { createRoot } from 'react-dom/client'
import './app/globals.css';
import { StrictMode } from 'react';
import Home from './app/page';
import ThemeProvider from '@/components/theme-provider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
