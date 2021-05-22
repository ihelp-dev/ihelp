import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css';
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev, index) => {
        return (
            <LocationMarker 
                key={index} 
                lat={ev.geometry.coordinates[1]} 
                lng={ev.geometry.coordinates[0]} 
                name={ev.properties.name_english}
                address={ev.properties.street_address}
                setLocationInfo={setLocationInfo}
            />
        )
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                onClick={() => setLocationInfo(null)}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 20.5937,
        lng: 78.9629
    },
    zoom: 5.5
}

export default Map