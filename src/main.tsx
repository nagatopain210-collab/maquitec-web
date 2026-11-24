import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Remove legacy localStorage temporary image overrides so all products use official static images
if (typeof window !== 'undefined') {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith('maquitec_custom_product_image_'))
      .forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignore
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
