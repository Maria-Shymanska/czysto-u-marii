import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const root = document.getElementById('root');
if (!root) throw new Error('Root element is missing');
const app = <StrictMode><App /></StrictMode>;
// Production HTML is pre-rendered; development starts with an empty root.
if (root.hasChildNodes() && root.querySelector('header')) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
