import App from "./App";
import { createRoot } from 'react-dom/client';
import "./css/style.css"

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);