import { Icon } from '@iconify/react'
import hospitalBox from '@iconify-icons/mdi/hospital-box';

const LocationMarker = ({ lat, lng, name, address, setLocationInfo, setMapCenter, setMapZoom }) => {

    const handleOnClick = (e) => {
        e.stopPropagation()
        setLocationInfo({ name, address })
        setMapCenter({ lat, lng })
        setMapZoom(7)
    }

    return (
        <div className="location-marker" onClick={handleOnClick}>
            <Icon icon={hospitalBox} className="location-icon" style={{ color: 'red', fontSize: '36px' }} />
        </div>
    )
}

export default LocationMarker