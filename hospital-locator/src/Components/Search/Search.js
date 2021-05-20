import { useState } from 'react';
import { useStyles } from './SearchStyles';
import { Paper, Typography, Grid, TextField, InputAdornment, Chip } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { Icon, InlineIcon } from '@iconify/react';
import hospitalBed from '@iconify-icons/carbon/hospital-bed';
import gasCylinder from '@iconify-icons/mdi/gas-cylinder';
import vaccineIcon from '@iconify-icons/tabler/vaccine';
import capsulesIcon from '@iconify-icons/fa-solid/capsules';


const chipData = [
    { key: 0, label: 'bed availability', icon :hospitalBed },
    { key: 1, label: 'oxygen', icon: gasCylinder },
    { key: 2, label: 'vaccine', icon: vaccineIcon },
    { key: 3, label: 'medicine', icon: capsulesIcon }
  ];

function Search(props) {
    const classes = useStyles();
    const [geoLocationOn, setGeoLocationOn] = useState(false);
    const [location, setLocation] = useState("");
    const [searchCity, setSearchCity] = useState("");

    return (
            <Grid container alignItems="center" className={classes.root}>
                <Grid item>
                { geoLocationOn ? 
                    <LocationOnIcon  fontSize="small" color="secondary" className={classes.location} />  : 
                    <LocationOffIcon fontSize="small" color="secondary" className={classes.location} />    
                }
                </Grid>
                <Grid item>
                    <Typography className={classes.locationText}>
                    {location ? location : "Location turned off, click to retry" }
                    </Typography>
                </Grid>
       
                <Grid item xs={12}>
                    <Paper variant="elevation" square className={classes.paper} elevation={8}>
                        <Typography paragraph align="center">
                            <TextField
                                className={classes.search}
                                id="input-with-icon-textfield"
                                placeholder="Search City"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationCityIcon color="primary" variant="filled"/>
                                    </InputAdornment>
                                )
                                }}
                                value={searchCity}
                                onChange={(e) => setSearchCity(e.target.value)}
                            />
                        </Typography> 
                        <div className={classes.chip}>
                            {chipData.map( (chip) => {
                                    return <Chip key={chip.key}
                                        size="small"
                                        icon={<InlineIcon icon={chip.icon} />}
                                        label={chip.label}
                                        clickable
                                        color="primary"
                                    />
                                }
                            )}
                        </div>
                    </Paper>
                </Grid>
            </Grid> 
    )
}

export default Search;