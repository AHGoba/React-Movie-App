import{ FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteMoviewatchlist } from "../store/slices/cardmovie";

export default function Watchlist() {
  // below used to get the global state
  let watchlistArr = useSelector((state) => state.cardmovie.moviewatchlist);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const watchlistArr = useSelector((state) => state.cardmovie.moviewatchlist)
  const heartIcon =  solidHeart ;
  const removeMovie = (movie)=>{
    dispatch(deleteMoviewatchlist(movie))
  }
  return (
    <div className="row">
      {watchlistArr.map((movie) => (
        <div className="col-md-4" key={movie.id}>
          <div className="card mb-4">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="card-img-top"
              alt={movie.name} 
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p>Rating</p>
              <p className="card-text">{movie.vote_average}</p>
              <p className="card-text">{movie.phone}</p>
              <button
                className="btn btn-primary"
                //   here i'm using / before (movie-details) as i want from him to start from beginnig not from the end like in line 53
                onClick={() => navigate(`/movie-details/${movie.id}`)}
              >
                Show Details
              </button>
              {/* here below i'm using call back function as i want each movie to do process on it (delte it) */}
              <button className="btn btn-link" onClick={()=>removeMovie(movie)}>
                <FontAwesomeIcon icon={heartIcon}  className="heart-icon"/>
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// http://localhost:3000/movie-details/792307

// http://localhost:3000/watch-list/movie-details/792307
