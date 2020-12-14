import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom";
import SavedList from './Movies/SavedList';

import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          setMovieList(response.data);
          console.log(response.data)
         
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        },)
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
     <SavedList list={[ /* This is stretch */]} />
      {/* <Route path='/'>
        <App/>
      </Route> */}
      {/* <Route component={MovieList} exact path='/Movies/MovieList'/>
      <Route component={Movie} exact path='/Movies/Movie/:id'/> */}
        <Route path={`/movies/:movieID`} >
          <Movie/>
        </Route>

        {/* <Link to ='/movies'>Movies</Link>
        <Link to='/'>Movie List</Link> */}
        <Route>
          <MovieList movies ={movieList}/>
        </Route>
        
    </div>
  );
}
