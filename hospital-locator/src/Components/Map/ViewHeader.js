import React from 'react';
import { Icon } from '@iconify/react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
// npm install --save-dev @iconify/react @iconify-icons/carbon
import mapIcon from '@iconify-icons/carbon/map';
import listIcon from '@iconify-icons/carbon/list';
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    title : {
        paddingLeft: theme.spacing(1)
    },

    root : {
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"flex-end",
        alignItems: "center"
    }
}));

const ViewHeader = ({ viewType, setViewType }) => {
    const handleViewType = (event, newType) => {
        setViewType(newType)
    };
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>
                View &nbsp;
             </Typography>
           <ToggleButtonGroup
            value={viewType}
            exclusive
            onChange={handleViewType}
            aria-label="View Type" >
            <ToggleButton value="ListView" aria-label="List View">
                <Icon icon={listIcon} />
            </ToggleButton>
            <ToggleButton value="MapView" aria-label="Map View">
                <Icon icon={mapIcon} />
            </ToggleButton>
        </ToggleButtonGroup>
        </div>
       
    )
}

/*
<div
            className="header" 
            onClick={() => setViewType(viewType === "desktop" ? "mobile" : "desktop")}
            style={{ backgroundColor: viewType === "desktop" ? "red" : "#3f51b5" }}
        >
                <h5>
                    <Icon icon={viewType === "desktop" ? toggleOn : toggleOff } /> 
                </h5>
                <h5>
                    View By: <Icon icon={viewType === "desktop" ? desktopIcon : mobileIcon } /> 
                </h5>
        </div>
*/


export default ViewHeader