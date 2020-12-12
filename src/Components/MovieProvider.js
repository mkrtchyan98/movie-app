import React, { useState } from 'react';
import  useFetch  from '../utils/useFetch';
import { sortAlphaNum } from '../utils/sortAlphaNum';
import MovieCard from './MovieCard';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
  root: {
    "& .gallery": {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
},
 '& h1':{
    fontSize: '50px',
    color: 'red',
    textAlign: 'center',
},
'& .MuiPagination-ul': {
  justifyContent: 'center',
  backgroundColor: '#3c1e1e',
},
'& .MuiPaginationItem-page:hover':{
  backgroundColor:'rgba(240, 214, 3, 0.04)',
},
'& .MuiPaginationItem-sizeLarge':{
  fontSize:'1.025rem',
}
}

}));


const MovieProvider = (props) => {
  const classes = useStyles();
  const MOVIE_API_URL = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"; 
  const itemsPerPage = 10;
  const {status, data, error} = useFetch(MOVIE_API_URL);
  const [page, setPage] = useState(1);
  const [programType, setProgramType] = useState(props.programType);
  
  function handleChange(event, value) {
    setPage(value);
  };

  function filterJson(movie) {
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