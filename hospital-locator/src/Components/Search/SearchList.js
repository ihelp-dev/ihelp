// import { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardHeader, Grid, Paper, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { resourceList } from '../../__mocks__/mock_data';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow : 1,
        marginTop : theme.spacing(2),
        padding: theme.spacing(5),
        width: "100%",
        [theme.breakpoints.up("sm")] : {
            width: "70%",
            marginLeft : "auto",
            marginRight: "auto",
        }
    },
    card : {
        marginTop : theme.spacing(1),
        padding: theme.spacing(2)
    },
    paper : {
        padding : theme.spacing(2),
       
    }
}))


export default function SearchList(props) {
    const classes = useStyles();
    const {searchCity, selectedResource} = props;
    const data = searchCity ? resourceList.filter( resource => resource.city === searchCity ) : "";

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item >
                <Paper className={classes.paper}>
                    Search Results : {data ? data.length : 0}
                </Paper>
            </Grid>
            { searchCity ? 
              (data && data.length > 0 ? data.map((dataItem, index) => { 
               return  (
                    <Grid key={index} item xs={12} >
                        <Card  className={classes.card}>
                            <CardHeader
                                avatar = {
                                    <LocalHospitalIcon fontSize="large" color="secondary"/>
                                }
                                title ={dataItem.hospitalName}
                                subheader={dataItem.address}
                            />
                            <CardContent >
                                <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                                <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                                <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                                <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                            </CardContent>
                        </Card>
                    </Grid> 
                    )
                }) : 
                <Grid item xs={12} >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography paragraph justify="center" align="center" style={{fontSize:"14px"}}>
                                Sorry, no resources found for your search. Click on Notify to get notified once they are available.
                            </Typography>
                            <Typography justify="center" align="center">
                                <Button style={{margin:"2px auto", fontSize: "0.85em"}} variant="contained" color="secondary">
                                    <NotificationsIcon fontSize="small"/> Notify Me
                                </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
              ):
              <Grid item xs={12} >
                    <Card className={classes.card}>
                        <CardContent >
                            <Typography paragraph justify="center" align="center" style={{fontSize:"14px"}}>
                                No City selected. Please choose a city name from the Search list.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            }   
        </Grid>
    )
}
