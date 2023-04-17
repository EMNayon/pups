// import logo from './logo.svg';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Gallery from './components/entities/Gallery';
import Home from './components/entities/Home/Home';
import Wrapper from "./components/handler/Wrapper";
import Blog from './components/entities/blog/Blog';
import Contact from './components/entities/Contact';
import BlogDetails from './components/entities/blog/BlogDetails';

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
        path: "blog/:id",
        element: <BlogDetails />
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
