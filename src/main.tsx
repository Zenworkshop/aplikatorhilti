import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app.tsx';

// ✅ Tambahkan ini untuk react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
