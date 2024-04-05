// import logo from './logo.svg';
import Home from './Components/Home';
import About from './Components/About';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
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
    },
    {
      path: "/sports",
      element:   <>
      <Navbar Key = "sports"/>
      <News Key = "sports" pagesize="6" category="sports"/>
      </>
      
    },
    {
      path: "/technology",
      element:   <>
      <Navbar Key = "technology"/>
      <News Key = "technology" pagesize="6" category="technology"/>
      </>
      
    },
    {
      path: "/business",
      element:   <>
      <Navbar Key = "business"/>
      <News Key = "business" pagesize="6" category="business"/>
      </>
      
    },
    {
      path: "/entertainment",
      element:   <>
      <Navbar Key = "entertainment"/>
      <News Key = "entertainment" pagesize="6" category="entertainment"/>
      </>
      
    },
    {
      path: "/science",
      element:   <>
      <Navbar Key = "science"/>
      <News Key = "science" pagesize="6" category="science"/>
      </>
      
    },
    {
      path: "/sports",
      element:   <>
      <Navbar Key = "sports"/>
      <News Key = "sports" pagesize="6" category="sports"/>
      </>
      
    },
    {
      path: "/health",
      element:   <>
      <Navbar Key = "health"/>
      <News Key = "health" pagesize="6" category="health"/>
      </>
      
    },
    {
      path: "/general",
      element:   <>
      <Navbar Key = "general"/>
      <News Key = "general" pagesize="6" category="general"/>
      </>
      
    }
  ]);
  return (
   <>
    <RouterProvider router={router} />
   </>
  );
}

export default App;
