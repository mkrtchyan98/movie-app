import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';

import  useFetch  from '../utils/useFetch';
import { sortAlphaNum } from '../utils/sortAlphaNum';
import MovieCard from './MovieCard';
import { useStyles } from "./styles/MovieProviderStyle";

const MovieProvider = (props) => {
  const classes = useStyles();
  const MOVIE_API_URL = process.env.REACT_APP_API_URL;
  const itemsPerPage = 10;
  const {status, data, error} = useFetch(MOVIE_API_URL);
  const [page, setPage] = useState(1);
  const [programType, setProgramType] = useState(props.programType);
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  const filterJson = (movie)  =>{
     return  movie.programType === `${programType}` && movie.releaseYear >= 2010
  }

  return (
    <div className={classes.root}>
          <h1>
             {props.programType.toUpperCase()}
          </h1>
        {status === 'error' && ( <div>{error}</div> )}
        {status === 'loading' && ( <div className="loading"></div> )}
        {status === 'success' && (
          <>
            {data.entries.length === 0 && <div> No articles found!  </div>}
             <div className="gallery">
            {data.entries
              .filter(filterJson)
              .sort(sortAlphaNum)
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)

              .map((movie) => (

             <MovieCard
                    key={movie.title}
                    movie={movie}
                  />
            ))}

            </div>
            <Pagination
          count={Math.ceil(data.entries.filter(filterJson).length/itemsPerPage)}
          page={page}
          defaultPage={page}
          onChange={handleChange}
          color="secondary"
          size="large"
        /> 
        </>
        )}     
    </div>
);
};
export default MovieProvider;