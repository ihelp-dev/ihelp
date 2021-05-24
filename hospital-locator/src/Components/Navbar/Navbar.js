import { AppBar, Toolbar, Typography, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth:"280px"
    },
    title : {
        paddingLeft: theme.spacing(2)
    }
}));

export default function Navbar({title}) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <AppBar position="sticky">
                <Toolbar variant="dense" disableGutters>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>           
        </Grid>
    )
}
