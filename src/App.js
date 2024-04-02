// import logo from './logo.svg';
import Home from './Components/Home';
import About from './Components/About';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:   <>
      <Home/>
       </>,
    
    },
    {
      path: "/about",
      element:  <About/>
    }
  ]);
  return (
   <>
    <RouterProvider router={router} />
   </>
  );
}

export default App;
