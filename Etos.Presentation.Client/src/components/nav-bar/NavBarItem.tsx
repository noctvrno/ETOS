import React from 'react';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface NavBarItemProps {
    Name: string;
    Icon: JSX.Element;
    Route: string;
}

export default function NavBarItem(navBarItem: NavBarItemProps) {
    const navigate = useNavigate();

    return (
        <ListItem>
            <ListItemButton onClick={() => {
                navigate(navBarItem.Route);
            }}>
                <ListItemIcon>
                    {navBarItem.Icon}
                </ListItemIcon>
                <ListItemText primary={navBarItem.Name} />
            </ListItemButton>
        </ListItem>
    );
}
