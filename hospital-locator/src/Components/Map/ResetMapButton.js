const ResetMapButton = ({ onClick }) => {

    const handleOnClick = (e) => {
        e.stopPropagation()
        onClick()
    }

    return (
        <div className="reset-map-button" onClick={handleOnClick}>
            RESET MAP
        </div>
    )
}

export default ResetMapButton