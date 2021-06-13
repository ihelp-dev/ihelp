import { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import HomePage from "../HomePage/HomePage";
// import HospitalFullInfo from "../HospitalFullInfo/HospitalFullInfo";
import "./App.css";
// import { Header } from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import { CssBaseline, Paper } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from "../mui_theme";
import Search from "../Search/Search";
import SearchList from "../Search/SearchList";
import Map from "../Map/Map";

// import data from "../../__mocks__/testData.json";
import {Switch, Route } from 'react-router-dom';
// import Amplify, { API, graphqlOperation } from "aws-amplify";
// import awsconfig from "./aws-exports";

// Amplify.configure(awsconfig);

var getCoordinatesFromGeojson = geojson => {
  return JSON.parse(geojson).coordinates
}

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  const [viewType, setViewType] = useState("ListView")
  const [location, setLocation] = useState("");
  const [searchCity, setSearchCity] = useState(location ? location : "");
  const [selectedResource, setSelectedResource] = useState("bed availability");

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      // const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      // const { events } = await res.json()

      // setEventData(data)
      setLoading(false)
      console.log("loading")
      fetch("http://ihelp-publi-1asxps8obc7on-1721964325.us-west-2.elb.amazonaws.com/api/v1/getHospitalsWithinRadius", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"lat" : 27.1763098, "long": 77.9099723, "radius":8000 })
      })
      .then(res => res.json())
      .then(res => {
        var data = res.msg.map(hospital => {
          return {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": getCoordinatesFromGeojson(hospital.geoJson)
            },
            "properties": hospital
          }
        })
        console.log(data)
        setEventData(data)
      })
    }

    fetchEvents()
  }, [])

  return (
      <Switch>
        {/* This endpoint will just return you to a dummy HTML with a simple heading tag */}
        <Route path="/health"  status={200}>
          <h3>Hey There!!! The App is Healthy</h3>
        </Route>

        {/* All other routes will be defined here */}
        <Route path="/">
          <div>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar title="iHelp" viewType={viewType} setViewType={setViewType} />
              {
                viewType === "MapView" ?
                !loading ?
                  <Map
                    eventData={eventData}
                    center={{ lat: 20.5937,lng: 78.9629 }}
                    zoom={7}
                  /> :
                  <div>LOADING</div> :
                  <>
                    <Search 
                      location={location} setLocation={setLocation} 
                      searchCity={searchCity} setSearchCity={setSearchCity}
                      selectedResource={selectedResource} setSelectedResource={setSelectedResource}
                      eventData={eventData}
                      />
                    <SearchList 
                      searchCity={searchCity ? searchCity : location ? location : null} 
                      selectedResource={selectedResource}
                      eventData={eventData}
                      />
                  </>
              }
              </ThemeProvider>
          </div>
        </Route>
        {/* Finally you will be redirected to a not found page */}
      </Switch>
  );
}

export default App;



// const [chosenUserCity, updateChosenUserCity] = useState(undefined);
// const [gpsUserLocation, updateGPSUserLocation] = useState(undefined);
// const [userLang, updateUserLang] = useState("hi");

// <Router>  
//         <div>
//         {/* Set html head attributes, including lang which should be able to change for users */}
//         <Helmet htmlAttributes>
//           <html lang="hi" />
//             <meta charSet="utf-8" />
//             <title>Covid Resources: Find the Nearest Hospital, Fast</title>
//             <link rel="canonical" href="http://ihelp.app" />
//           </Helmet>
//         <Navbar/>
//         <div>
//               <InputBase
//                 placeholder="Search Location"
//                 inputProps={{ 'aria-label': 'search' }}
//               />
//             </div>  

//           <Header
//             updateGPSUserLocation={updateGPSUserLocation}
//             updateChosenUserCity={updateChosenUserCity}
//             chosenUserCity={chosenUserCity}
//           />
//           <Switch>
//             <Route
//               path="/"
//               exact
//               render={() => (
//                 <HomePage
//                   gpsUserLocation={gpsUserLocation}
//                   chosenUserCity={chosenUserCity}
//                   updateChosenUserCity={updateChosenUserCity}
//                 />
//               )}
//             />
//             <Route path="/hospital/:hospitalName" component={HospitalFullInfo} />
//           </Switch>
//         </div>
//       </Router>