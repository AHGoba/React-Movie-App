import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./moviedetcss.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faCheckCircle,
    faTimesCircle,
  } from "@fortawesome/free-solid-svg-icons";
import LanguageContext from '../context/Language';
  

export default function Moviedetails() {
    const {language} = useContext(LanguageContext)
    const [movDetails,setmovDetails] =useState({});
    const params = useParams()          //here i'm using params just only to can get the id sent in the URL
    console.log(params)                 // when user click in one card (view detail) id will sent in url and i can
                                        //catch it by using params
//here i'm using useEffect as when user click and go to this page (moviedetails) 
//he already sent me (id) in params ,so i can this (id) to get the data related to this (id) 
useEffect(()=>{                         
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=c0b3cff2685db6662cd2d0e410bf80f4&language=${language}`)                      //get data that have id:params 
    .then((res)=>{setmovDetails(res.data)})
    .catch((err)=>{console.log(err)})
},[language])



  return (                              
    <div className="card w-50 ">
        <img src={`https://image.tmdb.org/t/p/w400/${movDetails.poster_path}`} className="card-img-top Auto Height" alt={movDetails.name} />
        <div className="card-body">
          {movDetails.adult? (                               //Here i'm using ternary operation
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" /> //if true
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} className="text-danger" />  //if false
          )}
          <h5 className="card-title">{movDetails.original_title}</h5>
          <p>Rating</p>
          <p className="card-text">{movDetails.vote_average}</p>
          <p className="card-text">{movDetails.overview}</p>
        </div>
      </div>
  )
}