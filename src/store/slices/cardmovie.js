import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
                      //here i can add any values (state) i want in this object to be globally 
  moviewatchlist: [], // as it will be golbally and i can deal with it in any component
};

const cardmovie = createSlice({
  // هنا  بعرف الحاجه الجلوبال اللى عايزها تتشاف على مستوى الكومبوننت كلهم
  name: "card",
  initialState: INITIALSTATE, // قيمة مبدأيه هيبدأ بيها الاسلايس واللى هى هنا عبارة عن اوبجكت جواه قيم اققدر اهندلها
  reducers: {
    // increaseMovieQuantity : (state , action)=>{
    //     state.movieQuantity = state.movieQuantity + 1 ;
    // },
    // decreaseMovieQuantity : (state , action)=>{
    //     state.movieQuantity = state.movieQuantity - 1 ;
    // },
    addMoviewatchlist: (state, action) => {
      state.moviewatchlist.push(action.payload); // Assume (action.payload) is the movie object to will came 
      // state.movieQuantity++;
    },
    deleteMoviewatchlist: (state, action) => {
      console.log("'before movieWishlist", state.moviewatchlist);
      state.moviewatchlist = state.moviewatchlist.filter(
        (object) => object.id !== action.payload.id
      ); //Assume (action.payload) is the movie object to add
      console.log("'movieWishlist", state.moviewatchlist);
    },
  },
});

// const indexToRemove = state.moviewatchlist.findIndex(movie => movie.id === action.payload.id);
// if (indexToRemove !== -1) {
//     state.moviewatchlist.splice(indexToRemove, 1);
// }

export const {
  // increaseMovieQuantity,
  // decreaseMovieQuantity,
  addMoviewatchlist,
  deleteMoviewatchlist,
} = cardmovie.actions; // destruct from slice >> (actions) to able to use in component

export default cardmovie.reducer; // to add this reducer in the store (configure store) to can handle and action
// will came from actions >> then update every state i want
