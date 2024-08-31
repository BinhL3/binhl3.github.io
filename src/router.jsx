import { createHashRouter } from 'react-router-dom';
import App from './App.jsx';
import Experience from './routes/Experience.jsx';
import Projects from './routes/Projects.jsx';
import About from './routes/About.jsx';
import Resume from './routes/Resume.jsx';

export const router = createHashRouter(
  [
    { path: '/', element: <App /> },
    { path: '/experience', element: <Experience /> },
    { path: '/projects', element: <Projects /> },
    { path: '/about', element: <About /> },
    { path: '/resume', element: <Resume /> }
  ]
);


