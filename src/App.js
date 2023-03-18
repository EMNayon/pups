// import logo from './logo.svg';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Gallery from './components/entities/Gallery';
import Home from './components/entities/Home';
import Wrapper from "./components/handler/Wrapper";
import Blog from './components/entities/Blog';
import Contact from './components/entities/Contact';


const router = createBrowserRouter ( [
  {
    path: "/",
    element: (
      <Wrapper>
        <Outlet />
      </Wrapper>
    ),
    children: [
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/gallery",
        element: <Gallery />
      },
      {
        path:"/blog",
        element: <Blog />
      },
      {
        path:"/contact",
        element: <Contact />
      }
    ]
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
