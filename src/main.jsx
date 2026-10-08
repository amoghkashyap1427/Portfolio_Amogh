import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// CSS load order matters:
// 1. global (reset, tokens)
// 2. typography (type utilities)
// 3. animations (keyframes, reveal classes)
// 4. App
import './styles/global.css';
import './styles/typography.css';
import './styles/animations.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
