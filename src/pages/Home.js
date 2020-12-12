import React from "react";

import { useStyles } from "./styles/PagesStyles";
import '../welcome.css';

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
