import axios from "axios";
import { users } from "../../assets/data";
import Movieinfo from "./Movieinfo";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../context/Language";


function MovielistOld() {
  //first define state that will hold all data
  const [moviesArr, setmoviesArr] = useState([]); // Initial value empty array to update it with API

  const [searchInput , setsearchInput] =useState("");

  const {language } = useContext(LanguageContext)

  const handleData = ()=>{
    const searchFilter = moviesArr.filter((movie)=>{ return movie.title==searchInput})
    console.log(searchFilter)
    
    if (searchInput.trim()==="" || searchFilter.length===0){  //here i'm using searchFilter.length
      resetMovies()                                         // as it will handle when there is empty search or 
    }                                                       // not matched movie !! 
    else{                                                   // as the all idea of the filter method 
      setmoviesArr(searchFilter)                            //that wil return empty movie from movies or not !! 
    }
  }

  const resetMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c0b3cff2685db6662cd2d0e410bf80f4&language=${language}`
      )
      .then((res) => setmoviesArr(res.data.results))
      .catch((err) => console.log(err));
  };
  /////////////////////////////// old way
  //   return (
  //     <div>
  //       <ul>
  //         {moviesArr.map((user) => {
  //           return (
  //             <li>{user.age}</li> //with every itrate show user.age for all object in array
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );
  // https://api.themoviedb.org/3/movie/popular?api_key={apiKey}&language=ar
  
  //i'm using this hooks bleow to run at first time of loading component and 
  //when (language) changed !! it will update the api link with the new language 
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=c0b3cff2685db6662cd2d0e410bf80f4&language=${language}`)
      .then((res) => {setmoviesArr(res.data.results)}) //(res.data) here holdS Main object from API 
      .catch((err) => {console.log(err)});            //(res.data.results) here hold array of movies to do map on it  
  }, [language] );       //here i'm telling this hooks to listen to the context language as when language change 
  //this (api) change and get the data acoording to the language i want


  return (
    //this div below just used for responsiveness with each screen
    <div>
      <div className="input-group mb-4  ">
      <input type="text" className="form-control" placeholder="Search..." onChange={(e) =>{
        if (e.target.value.trim() === "" ) {
          // If the search input is empty, reset moviesArr to the original list
          setsearchInput("")
          resetMovies();}
          else {
            setsearchInput(e.target.value)
          }
        }} />
      <button className="btn btn-primary" type="button" onClick={handleData} >
        <i className="bi bi-search">Click</i>
      </button>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-4">
      {moviesArr.map((movie) => {
        return (
          <div className="col" key={movie.id}>
            {/* (movie) here mean that each loop it will send object(data) from array to the (Movieinfo) to handle it to be like a card of info  */}
            <Movieinfo movie={movie} />
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default MovielistOld;

// in line 32 i'm calling for child (userCard ) in userlist(parent)


