import { Icon } from '@iconify/react'
import mobileIcon from '@iconify-icons/mdi/cellphone';
import desktopIcon from '@iconify-icons/mdi/desktop-mac';
import toggleOff from '@iconify-icons/bi/toggle-off';
import toggleOn from '@iconify-icons/bi/toggle-on';

const ViewHeader = ({ viewType, setViewType }) => {
    return (
        <header 
            className="header" 
            onClick={() => setViewType(viewType == "desktop" ? "mobile" : "desktop")}
            style={{ backgroundColor: viewType == "desktop" ? "red" : "#3f51b5" }}
        >
                <h1>
                    <Icon icon={viewType == "desktop" ? toggleOn : toggleOff } /> 
                </h1>
                <h1>
                    Current View: <Icon icon={viewType == "desktop" ? desktopIcon : mobileIcon } /> 
                </h1>
        </header>
    )
}

export default ViewHeader