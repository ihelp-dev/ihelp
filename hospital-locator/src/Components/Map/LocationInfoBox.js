const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Hospital Info</h2>
            <ul>
                <li>NAME: <strong>{ info.name }</strong></li>
                <li>ADDRESS: <strong>{ info.address }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox