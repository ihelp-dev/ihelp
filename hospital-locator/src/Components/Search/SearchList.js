// import { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardHeader, CardActions, Grid, Paper, Chip, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CallTwoToneIcon from '@material-ui/icons/CallTwoTone';

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow : 1,
        marginTop : theme.spacing(2),
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


function SearchList() {
    const classes = useStyles();
    
    // useEffect( async () => {
    //     const data = await fetch("../../_mocks_/testData.json");

    // },[])

    return (
        <Grid container className={classes.root} justify="center">
            <Grid item >
                <Paper className={classes.paper}>
                    Search Results : 8
                </Paper>
            </Grid>
            <Grid item xs={12} >
            <Card className={classes.card}>
                <CardHeader
                    avatar = {
                        <LocalHospitalIcon fontSize="large" color="secondary"/>
                    }
                    title ="Save Life Hospital"
                    subheader="123, Alpha Street, Health City"
                />
                <CardContent >
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                </CardContent>
            </Card>
           </Grid><Grid item xs={12} >
            <Card className={classes.card}>
                <CardHeader
                    avatar = {
                        <LocalHospitalIcon fontSize="large" color="secondary"/>
                    }
                    title ="Save Life Hospital"
                    subheader="123, Alpha Street, Health City"
                />
                <CardContent >
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                </CardContent>
            </Card>
           </Grid>
           <Grid item xs={12}>
           <Card className={classes.card}>
               <CardHeader
                    avatar = {
                        <LocalHospitalIcon fontSize="large" color="secondary"/>
                    }
                    title ="Save Life Hospital"
                    subheader="123, Alpha Street, Health City"
               />
                <CardContent>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                </CardContent>
            </Card>
           </Grid>
           <Grid item xs={12} >
            <Card className={classes.card}>
                <CardHeader
                    avatar = {
                        <LocalHospitalIcon fontSize="large" color="secondary"/>
                    }
                    title ="Save Life Hospital"
                    subheader="123, Alpha Street, Health City"
                />
                <CardContent>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                </CardContent>
            </Card>
           </Grid>
           <Grid item xs={12} >
            <Card className={classes.card}>
                <CardHeader
                    avatar = {
                        <LocalHospitalIcon fontSize="large" color="secondary"/>
                    }
                    title ="Save Life Hospital"
                    subheader="123, Alpha Street, Health City"
                />
                <CardContent>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                </CardContent>
            </Card>
           </Grid>
           <Grid item xs={12} >
            <Card className={classes.card}>
                <CardHeader
                    avatar = {
                        <LocalHospitalIcon fontSize="large" color="secondary"/>
                    }
                    title ="Save Life Hospital"
                    subheader="123, Alpha Street, Health City"
                />
                <CardContent>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                </CardContent>
            </Card>
           </Grid>
           <Grid item xs={12} >
            <Card className={classes.card}>
                <CardHeader
                    avatar = {
                        <LocalHospitalIcon fontSize="large" color="secondary"/>
                    }
                    title ="Save Life Hospital"
                    subheader="123, Alpha Street, Health City"
                />
                <CardContent>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Normal Beds(2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> Beds with Oxygen Support (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds (2/10) </Button>
                    <Button style={{margin:"2px", fontSize: "0.85em"}} variant="contained" color="primary"> ICU Beds with Ventilator (2/10) </Button>
                </CardContent>
            </Card>
           </Grid>
            
        </Grid>
    )
}

export default SearchList
