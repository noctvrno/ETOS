import React from 'react';
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface NavBarItemProps {
    name: string;
    icon: JSX.Element;
    route: string;
}

export default function NavBarItem(navBarItem: NavBarItemProps) {
    const navigate = useNavigate();

    return (
        <ListItem>
            <ListItemButton onClick={() => {
                navigate(navBarItem.route);
            }}>
                <ListItemIcon>
                    {navBarItem.icon}
                </ListItemIcon>
                <ListItemText primary={navBarItem.name} />
            </ListItemButton>
        </ListItem>
    );
}
