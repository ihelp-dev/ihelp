// import { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardHeader, CardActions, Grid, Paper, Button, Chip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { resourceList } from '../../__mocks__/mock_data';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PhoneIcon from '@material-ui/icons/Phone';
import { GiPathDistance } from 'react-icons/gi';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import HistoryTwoToneIcon from '@material-ui/icons/HistoryTwoTone';

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow : 1,
        marginTop : theme.spacing(2),
        paddingBottom: theme.spacing(5),
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
       
    },
    chip : {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          marginBottom: theme.spacing(0.5),
          padding: theme.spacing(0.5)
        },
      }
}))


export default function SearchList(props) {
    const classes = useStyles();
    const {searchCity, selectedResource, eventData} = props;
    
    const data = searchCity && selectedResource ? 
                    resourceList.filter( resource => (resource.city === searchCity && resource.resourceName === selectedResource )) : "";

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
                    <Grid key={index} item xs={12}>
                        <Card  className={classes.card}>
                            <CardContent >
                                <Grid container alignItems="center" style={{ marginBottom:"10px"}}>
                                    <Grid item>
                                        <LocalHospitalIcon fontSize="large" color="secondary" style={{fontSize:"44px"}}/>
                                    </Grid>
                                    <Grid item style={{ marginLeft: "10px", marginRight:"50px" }}>
                                        <Typography variant="body1" style={{fontSize:"14px"}}>
                                            {dataItem.hospitalName}
                                        </Typography>
                                        <Typography variant="body2" style={{fontSize:"12px"}}>
                                            {dataItem.address}
                                        </Typography>
                                    </Grid>  
                                    <Grid item>
                                    <Chip 
                                        size="large"
                                        icon={<GiPathDistance style={{color:"yellow"}}/>}
                                        label="10 miles"
                                        clickable
                                        style={{ backgroundColor:"#424242", borderRadius:"2px", color:"#fff"}}
                                    />
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.chip} style={{padding: "5px",marginBottom:"20px"}}>
                                    <Chip 
                                        size="small"
                                        icon={<PhoneIcon/>}
                                        label="1234-567-890"
                                        clickable
                                        color="default"
                                        style={{marginRight:"10px"}}
                                    />
                                    <Chip 
                                        size="small"
                                        icon={<PublicTwoToneIcon />}
                                        label="www.ihelp.hospitals"
                                        clickable
                                        color="default"
                                        style={{marginRight:"10px"}}
                                    />
                                    <Chip 
                                        size="small"
                                        icon={<HistoryTwoToneIcon />}
                                        label="Last updated : May 29, 2021 9:00:00 AM IST"
                                        clickable
                                        color="default"
                                        style={{marginRight:"10px"}}
                                    />
                                </Grid>
                                <Grid item style={{padding:"5px"}}>
                                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                                </Grid>
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
