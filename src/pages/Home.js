import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import '../styles/welcome.css';

const useStyles = makeStyles(theme =>({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    background:'black',
    width:'100vw',
    height:'90vh',
    backgroundImage:'linear-gradient(to right,rgba(152,90,21,.13), rgba(198, 153, 104, 0.17))',
    backgroundSize:'15px',



}

}));

export default function Home() {
	 const classes = useStyles();
  return (
           <div className={classes.root}>
              <p>
  <span data-text="W">W</span>
  <span data-text="E">E</span>
  <span data-text="L">L</span>
  <span data-text="C">C</span>
  <span data-text="O">O</span>
  <span data-text="M">M</span>
  <span data-text="E">E</span>
</p>
            </div>
  );
}



