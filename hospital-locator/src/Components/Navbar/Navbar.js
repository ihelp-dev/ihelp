import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ViewHeader from "../Map/ViewHeader";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minWidth: "280px"
    },
    title: {
        paddingLeft: theme.spacing(2)
    }
}));

export default function Navbar({ title, viewType, setViewType }) {
    const classes = useStyles();
    return (
        <AppBar position="sticky">
            <Toolbar variant="dense" disableGutters>
                <Grid container className={classes.root}
                    style={{ display: "flex",
                     flexDirection:"row",
                     justifyContent:'space-between'}}
                 >
                    <Grid item xs={6} >
                        <Typography variant="h6" className={classes.title}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <ViewHeader viewType={viewType} setViewType={setViewType} />
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
/*
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
*/