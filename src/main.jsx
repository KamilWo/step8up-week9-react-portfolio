import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/index.jsx';
import Projects from './pages/projects.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
