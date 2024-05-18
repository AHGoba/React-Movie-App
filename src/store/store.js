import { configureStore } from "@reduxjs/toolkit";
import cardmovie from "./slices/cardmovie";

import React from 'react'

export default configureStore( {
    reducer : {
      cardmovie : cardmovie           //i must define state (slice have states) here so the store can see it 
    }
  
})
