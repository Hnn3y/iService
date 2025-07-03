import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar, Menu, MenuItem, Badge } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faMessage } from '@fortawesome/free-solid-svg-icons';

const Navbar = ( { onMenuClick }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' , boxshadow: 1}}>
            <Toolbar>
                <IconButton 
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={onMenuClick}
                sx={{ mr:2, color: '#197602' }}
                >
                    <FontAwesomeIcon icon={fabars} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

