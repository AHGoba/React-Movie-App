import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Movielist from "./pages/movielist"
// import Moviedetails from "./pages/moviedetails";
// import Watchlist from './pages/watchlist';
// import Notfound from './pages/notfound';
// import ConfirmationUser from "./pages/ConfirmationUser";
import Navbar from "./Components/layout/navbar";
import LanguageContext from "./context/Language";
import { useState , useEffect } from "react";
const Movielist = React.lazy(()=>import("./pages/movielist"))
const Moviedetails = React.lazy(()=>import("./pages/moviedetails"))
const Watchlist = React.lazy(()=>import("./pages/watchlist"))
const Notfound = React.lazy(()=>import("./pages/notfound"))
const ConfirmationUser = React.lazy(()=>import("./pages/ConfirmationUser"))



function App() {
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    document.body.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);
  return (
  <BrowserRouter>
  <LanguageContext.Provider value={{language , setLanguage}}>

    <Navbar/>    
  <div className="container my-5">
    <Suspense  fullback = {<h2>Please wait loading component.........</h2>}>

    <Routes>
      <Route path="" element={<Movielist/>}/>
      <Route path="movie-details/:id" element={<Moviedetails/>}/>
      <Route path="watch-list" element={<Watchlist/>}/>
      <Route path="/confirmation" element={<ConfirmationUser/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
    </Suspense>
    </div> 

  </LanguageContext.Provider> 
  </BrowserRouter>
  );
}

export default App;



//I put navbar ubove all Route as nav bar exist in each Route 
//my-5   >>> margin top and bottom =5