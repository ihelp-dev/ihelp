import { Icon } from '@iconify/react'
import mobileIcon from '@iconify-icons/mdi/cellphone';
import desktopIcon from '@iconify-icons/mdi/desktop-mac';

const ViewHeader = ({ viewType, setViewType }) => {
    return (
        <header 
            className="header" 
            onClick={() => setViewType(viewType == "desktop" ? "mobile" : "desktop")}
            style={{ backgroundColor: viewType == "desktop" ? "red" : "#3f51b5" }}
        >
            <h1>
                <Icon icon={viewType == "desktop" ? desktopIcon : mobileIcon } /> 
                Current View: {viewType}  (Click to switch)
            </h1>
        </header>
    )
}

export default ViewHeader