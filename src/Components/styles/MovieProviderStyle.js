import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>({
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