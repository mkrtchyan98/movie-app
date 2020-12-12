import React from 'react';

import { useStyles } from "./styles/MovieCardStyle";

const MovieCard = props => {
  const styles = useStyles();
  const imgSrc = props.movie.images["Poster Art"];
  return (
          <div className={styles.card}>
                 <img src={imgSrc.url} alt={props.movie.title} />
                 <div className={styles.details}>
                      <span className={styles.title}>
                        {props.movie.title}
                      </span>
                 </div>
          </div>
  );
};

export default MovieCard;