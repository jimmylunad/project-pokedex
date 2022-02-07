import Home from './Home';
import About from './About';

const routesPages = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/:id',
    element: <About />,
  },
];

export default routesPages;
