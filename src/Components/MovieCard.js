import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



 const useStyles = makeStyles(theme =>({

  card: {
    display: 'flex',
  margin:' 15px 4%',
  flex:' 0 20%',
  borderRadius:' 10px',
  overflow:' hidden',
  position: 'relative',
  boxShadow:' 0 10px 20px 5px rgba(0, 0, 0, 0.3)',
  background: '#333',
  transition: 'transform 0.25s ease-in-out',
  '&:hover':{
    transform:'scale(1.075)',
},
'& img':{
  maxWidth:'100%',
},
[theme.breakpoints.down('md')]: {
          flex:' 0 30%',
          display:'block'
      }
  },

  details: {
  display: 'flex',
  justifyContent: 'center',
[theme.breakpoints.up('md')]: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'absolute',
  color: 'white',
  top: 0,
  opacity:0,
  bottom: 0,
  left: 0,
  right: 0,
  height:' 100%',
  width: '100%',
  transition: 'opacity 0.1s ease',
  background: 'linear-gradient(to top,rgba(10, 10, 10, 0.85),rgba(10, 10, 10, 0.5))',
'&:hover':{
  opacity:1,
},
}


  },


  title: {
  fontSize:' 1rem',
  alignSelf: 'center',
  padding:'10px',
  marginBottom: '5px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
  color: 'white',
  fontFamily:'cursive',
 }
},


}))




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