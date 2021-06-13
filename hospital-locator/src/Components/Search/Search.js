import { useState, useEffect } from 'react';
import { useStyles } from './SearchStyles';
import { Paper, Typography, Grid, TextField, Snackbar, Chip } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import { InlineIcon } from '@iconify/react';
import hospitalBed from '@iconify-icons/carbon/hospital-bed';
import gasCylinder from '@iconify-icons/mdi/gas-cylinder';
import vaccineIcon from '@iconify-icons/tabler/vaccine';
import capsulesIcon from '@iconify-icons/fa-solid/capsules';
import MuiAlert from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GiConsoleController } from 'react-icons/gi';
// import citieslist from "../../__mocks__/cities.json";
// import { resourceList } from '../../__mocks__/live_data';

const resources = [
    { key: 0, label: 'bed availability', icon :hospitalBed, value:"Hospital" },
    { key: 1, label: 'oxygen', icon: gasCylinder, value:"Oxygen" },
    { key: 2, label: 'vaccine', icon: vaccineIcon, value:"Vaccine" },
    { key: 3, label: 'medicine', icon: capsulesIcon, value:"Medicine" }
  ];

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Search(props) {
    const classes = useStyles();
    const {location, setLocation, searchCity, setSearchCity, selectedResource, setSelectedResource, eventData} = props;
    const [geoLocationOn, setGeoLocationOn] = useState(false);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [alert, setAlert] = useState(false);
    const [cities, setCities] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        loadCitiesList();
        getLocation();
    }, [eventData]);

    // assume each resource contains a "landmark" key that has the city name after the last comma
    // e.g. "Om Satya Complex, Near Bichpuri Railway Fatak, Bichpuri, Agra"
    const loadCitiesList = async () => {
        // const data = citieslist.map(city => city.name);
        const data = new Set(eventData.map(resource => {
            var landmark = resource.properties.landmark.split(",")
            return landmark[landmark.length-1]
        }))
        // // const data = citieslist.map(city => city.name)
        // // data.sort((a, b) => { 
        // //     console.log(a);
        // //     return a.localeCompare(b)
        // // })
        
        setCities(Array.from(data));
    }

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
            setAlert(true);
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setGeoLocationOn(true);
            getAddress(position.coords.latitude,position.coords.longitude);
            }, () => {
            setStatus('Unable to retrieve your location. Check if Location Access Permission is ON');
            setAlert(true);
            });
        }
    }

    const getAddress = (latitude, longitude) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
        .then(res => res.json())
        .then(data => setLocation(data.results[0].address_components[0].long_name))
        .catch(err => console.error(err))
    };

    const toggleOffGeoLocation = () => {
        setGeoLocationOn(false);
        setLat(null);
        setLng(null);
        setLocation(""); 
    }

    return (
        <div>
            <Snackbar 
                open={alert} 
                anchorOrigin={{vertical:'bottom', horizontal:'center'}} 
                autoHideDuration={8000} 
                onClose={() => setAlert(false)}
                >
                <Alert onClose={() => setAlert(false)} severity="warning">
                    {status}
                </Alert>
            </Snackbar>
            <Grid container alignItems="center" className={classes.root}>
                <Grid item>
                { geoLocationOn ? 
                    <LocationOnIcon onClick={toggleOffGeoLocation} fontSize="small" color="secondary" className={classes.location} />  : 
                    <LocationOffIcon onClick={getLocation} fontSize="small" color="secondary" className={classes.location} />    
                }
                </Grid>
                <Grid item>
                    <Typography className={classes.locationText}>
                    {location ? location : "Location turned off, click to retry" }
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="elevation" square className={classes.paper} elevation={8}>
                        <div className={classes.chip}>
                                <LocationCityIcon color="primary" variant="filled" fontSize="small"/> 
                                <Autocomplete
                                    value={searchCity}
                                    onChange={(event, newValue) => {
                                    setSearchCity(newValue);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={cities}
                                    style={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Search City" />}
                                />
                            </div>
                            <div className={classes.chip}>
                                {resources.map( (resource) => {
                                        return <Chip key={resource.key}
                                            size="small"
                                            icon={<InlineIcon icon={resource.icon} />}
                                            label={resource.label}
                                            clickable
                                            onClick= { () => setSelectedResource(resource.label)}
                                            color={selectedResource===resource.label ? "primary" : "default"}
                                        />
                                    }
                                )}
                            </div>
                    </Paper>
                </Grid>
            </Grid> 
        </div>    
    )
}