import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme =>({
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