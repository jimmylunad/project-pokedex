import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeSC } from './styles/theme';
import './styles/base/index.css';
import routesPages from './Pages';

const App = () => (
  <ThemeProvider theme={themeSC}>
    <BrowserRouter>
      <Routes>
        {
          routesPages.map((pages) => (
            <Route key={pages.path} path={pages.path} element={pages.element} />
          ))
        }
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
