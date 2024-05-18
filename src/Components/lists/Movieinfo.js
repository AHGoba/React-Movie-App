// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCheckCircle,
//   faTimesCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   addMoviewatchlist,
//   deleteMoviewatchlist,
// } from "../../store/slices/cardmovie";
// import { useSelector } from "react-redux";

// function Movieinfo(props) {
//   //   console.log(props);
//   const { movie } = props; //movie here holds each movie
//   const navigate = useNavigate(); // here it's a hook(Method) from ("react-router-dom")
//   // const Location = useLocation()
//   // console.log(Location)

//   //here below i'm calling golbal state to use (array [])
//   const watchlistArr = useSelector((state) => state.cardmovie.moviewatchlist); //return state.storekey.slicename
//   const dispatch = useDispatch();
//   const addMovieToList = (movie) => {
//     const filterdwatchlistArr = watchlistArr.find((object) => {
//       return object.id == movie.id;
//     });
//     console.log(filterdwatchlistArr);
//     if (filterdwatchlistArr) {          //as find will return object if it existed
//       console.log("iam delete");
//       dispatch(deleteMoviewatchlist(movie)); //this movie i want to remove it from the array
//     } else {
//       console.log("iam add");
//       dispatch(addMoviewatchlist(movie));
//     }
//   };

//   return (
//     <div className="card w-100">
//       <img
//         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//         className="card-img-top"
//         alt={movie.name}
//       />
//       <div className="card-body">
//         {movie.adult ? ( //Here i'm using ternary operation
//           <FontAwesomeIcon icon={faCheckCircle} className="text-success" /> //if true
//         ) : (
//           <FontAwesomeIcon icon={faTimesCircle} className="text-danger" /> //if false
//         )}
//         <h5 className="card-title">{movie.original_title}</h5>
//         <p>Rating</p>
//         <p className="card-text">{movie.vote_average}</p>
//         <p className="card-text">{movie.phone}</p>
//         <button
//           className="btn btn-primary"
//           onClick={() => navigate(`movie-details/${movie.id}`)}
//         >
//           Show Details
//         </button>
//         {/* Here below when he clicked it will send the movie he clicked (object) */}
//         <button className="" onClick={() => addMovieToList(movie)}>
//           heart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Movieinfo;

// import "./../../pages/moviedetcss.css"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
// import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addMoviewatchlist, deleteMoviewatchlist } from "../../store/slices/cardmovie";

// function Movieinfo(props) {
//   const { movie } = props;    //destruct movie from props
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const watchlistArr = useSelector((state) => state.cardmovie.moviewatchlist); //return empty array

//   const isMovieInWatchlist = watchlistArr.find((item) => item.id === movie.id);
//   const heartIcon = isMovieInWatchlist ? solidHeart : regularHeart;

//   const addOrRemoveFromWatchList = () => {
//     if (isMovieInWatchlist) {
//       dispatch(deleteMoviewatchlist(movie));
//     } else {
//       dispatch(addMoviewatchlist(movie));
//     }
//   };

//   return (
//     <div className="card w-100">
//       <img
//         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//         className="card-img-top"
//         alt={movie.name}
//       />
//       <div className="card-body">
//         {/* {movie.adult ? (
//           <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
//         ) : (
//           <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />
//         )} */}
//         <h5 className="card-title">{movie.original_title}</h5>
//         <p>Rating</p>
//         <p className="card-text">{movie.vote_average}</p>
//         <p className="card-text">{movie.phone}</p>
//         <button
//           className="btn btn-primary "
//           onClick={() => navigate(`movie-details/${movie.id}`)}
//         >
//           Show Details
//         </button>
//         {/* Here i'm using Fucntion that will hold event (movie) implicity */}
//         <button className="btn btn-link" onClick={addOrRemoveFromWatchList}>
//           <FontAwesomeIcon icon={heartIcon}  className="heart-icon"/>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Movieinfo;

import "./../../pages/moviedetcss.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMoviewatchlist,
  deleteMoviewatchlist,
} from "../../store/slices/cardmovie";

function RatingIcon({ rating }) {
  // Determine the icon based on the rating
  let icon = faCheckCircle; // Default icon
  if (rating < 5) {
    icon = faTimesCircle; // Use different icon for low ratings
  }

  return (
    <div className="rating-icon">
      <FontAwesomeIcon icon={icon} className="text-success" />
      <span className="rating-percentage">{rating}%</span>
    </div>
  );
}

function Movieinfo(props) {
  const { movie } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const watchlistArr = useSelector((state) => state.cardmovie.moviewatchlist); //this return global array 

  const isMovieInWatchlist = watchlistArr.find((item) => item.id === movie.id);
  const heartIcon = isMovieInWatchlist ? solidHeart : regularHeart;

  const addOrRemoveFromWatchList = () => {
    if (isMovieInWatchlist) {
      dispatch(deleteMoviewatchlist(movie));
    } else {
      dispatch(addMoviewatchlist(movie));
    }
  };

  return (
    
    <div className="card w-100">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        className="card-img-top"
        alt={movie.name}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p>Rating</p>
        <RatingIcon rating={movie.vote_average * 10} />
        <p className="card-text">{movie.phone}</p>
        <button
          className="btn btn-primary "
          onClick={() => navigate(`movie-details/${movie.id}`)}
        >
          Show Details
        </button>
        <button className="btn btn-link" onClick={addOrRemoveFromWatchList}>
          <FontAwesomeIcon icon={heartIcon} className="heart-icon" />
        </button>
      </div>
    </div>
  );
}

export default Movieinfo;
