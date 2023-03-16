// import logo from './logo.svg';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Wrapper from "./components/handler/Wrapper";

const router = createBrowserRouter ( [
  {
    path: "/",
    element: (
      <Wrapper>
        <Outlet />
      </Wrapper>
    )
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
