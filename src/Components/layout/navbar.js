// import React from "react";
// import Movielist from "./../../pages/movielist";
// import watchlist from "./../../pages/watchlist";
import "./../../pages/moviedetcss.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
import { useContext } from "react";
import LanguageContext from "../../context/Language";

export default function Navbar() {
  const watchlistcounter = useSelector(
    (state) => state.cardmovie.moviewatchlist
  ); //return state.storekey.slicename
  const activelink = "btn btn-primary btn-sm"; //here if it's active link
  const normallink = "bg-dark text-secondary "; //void "bg-dark text-dark "
  /////////////////////////////////// here below excute on final lecture : context
  const { language, setLanguage } = useContext(LanguageContext); //here i want from context read and write

  const handleLanguageChange = (e)=>{

    const selectedLanguage = e.target.value
    // console.log(selectedLanguage)
    // console.log("seperateeeeeeeeeeeeeeeeeeeeeeeee")
    setLanguage(selectedLanguage)
    // console.log(language)

  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <div className="container-fluid">
        <div className="nav-link-active">Movies</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? activelink : normallink;
                }}
              >
                <div className="nav-link-active" aria-current="page">
                  Movielist
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/watch-list"
                className={({ isActive }) => {
                  return isActive ? activelink : normallink;
                }}
              >
                <div className="nav-link-active" aria-current="page">
                  Watchlist : {watchlistcounter.length}
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/confirmation"
                className={({ isActive }) => {
                  return isActive ? activelink : normallink;
                }}
              >
                <div className="nav-link-active" aria-current="page">
                  Login
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="dropdown">
              <label for="language">Language:</label>
              <select name="language" id="language" onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
