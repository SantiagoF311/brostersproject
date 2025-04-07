import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Variables.jsx'; // Asegúrate de que la ruta sea correcta
import './styles/index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}> {/* Envuelve App con ThemeProvider */}
      <App />
    </ThemeProvider>
  </StrictMode>
);