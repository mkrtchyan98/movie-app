import {makeStyles} from "@material-ui/core/styles";

export const mainStyle = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexWrap:'wrap',
    listStyleType: 'none',
    margin:0,
    padding:0,

    '& > li': {
      flex:1,
      flexBasis:'25%',
      border: 'solid 2px',
      borderRadius:'10px',
      background:'#3c1e1e',
    },
    "& a": {
      textDecoration:'none',
      display: "block",
      color: "white",
      textAlign: "center",
      padding: '1.125em',
      "&:hover": {
      backgroundColor: '#111111', 
    },
     "&:active": {

      backgroundColor: '#111111', 
    }
  }
}
}))