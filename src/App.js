import './style/App.css';
import Header from"./component/Header/Header";
import Footer from"./component/Footer/Footer";

import { Outlet } from "react-router-dom";


const App = ()=> {
  return (
    <>
   <Header/>
   <Outlet/>
   <Footer/>

   </>
  );
};

export default App;
//how to make sidebar in react? 