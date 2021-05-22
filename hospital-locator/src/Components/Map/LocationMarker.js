import { Icon } from '@iconify/react'
import hospitalBox from '@iconify-icons/mdi/hospital-box';

const LocationMarker = ({ lat, lng, name, address, setLocationInfo }) => {

    const handleOnClick = (e) => {
        e.stopPropagation()
        setLocationInfo({ name, address })
    }

    return (
        <div className="location-marker" onClick={handleOnClick}>
            <Icon icon={hospitalBox} className="location-icon" style={{ color: 'red', fontSize: '36px' }} />
        </div>
    )
}

export default LocationMarker