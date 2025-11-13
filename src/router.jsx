import { createHashRouter } from "react-router-dom";
import App from "./App.jsx";
import Experience from "./routes/Experience.jsx";
import Founder from "./routes/Founder.jsx";
import About from "./routes/About.jsx";
import Resume from "./routes/Resume.jsx";
import Goals from "./routes/Goals.jsx";
import Press from "./routes/Press.jsx";

export const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "/experience", element: <Experience /> },
  { path: "/founder", element: <Founder /> },
  { path: "/about", element: <About /> },
  { path: "/resume", element: <Resume /> },
  { path: "/goals", element: <Goals /> },
  { path: "/press", element: <Press /> },
]);
