import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    location : {
      // padding: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    locationText : {
      marginTop : theme.spacing(2),
      marginLeft : theme.spacing(0.5),
      fontSize: "12px"
    },
    paper: {
      width: "80%",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: "auto",
      marginRight: "auto",
      minWidth: "250px",
      minHeight: "100px",
      padding: theme.spacing(2),
    },
    search : {
      margin: theme.spacing(1),
      minWidth: "100px",
      fontSize: "12px",
      transition: theme.transitions.create('width'),
      width: '80%',
      [theme.breakpoints.up("sm")]: {
        width : "48ch"
      }
    },
    chip : {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    }
  }))