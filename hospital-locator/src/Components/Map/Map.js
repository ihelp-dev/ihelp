import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css';
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import ResetMapButton from './ResetMapButton'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [mapCenter, setMapCenter] = useState(center)
    const [mapZoom, setMapZoom] = useState(zoom)

    const markers = eventData.map((ev, index) => {
        return (
            <LocationMarker 
                key={index} 
                lat={ev.geometry.coordinates[1]} 
                lng={ev.geometry.coordinates[0]} 
                name={ev.properties.name_english}
                address={ev.properties.street_address}
                setLocationInfo={setLocationInfo}
                setMapCenter={setMapCenter} 
                setMapZoom={setMapZoom}
            />
        )
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBpQKVwRFWxV3WTVsKwQv7GRCocyK6Ui9E' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                center={ mapCenter }
                zoom={ mapZoom }
                onClick={() => setLocationInfo(null)}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
            {locationInfo && <ResetMapButton onClick={() => {
                setMapCenter(center)
                setMapZoom(zoom)
                setLocationInfo(null)
            }} />}
        </div>
    )
}

export default Map