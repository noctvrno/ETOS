import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavBarItem({ icon, name, navigationRoute }) {
    const navigate = useNavigate();

    return (
        <ListItem>
            <ListItemButton onClick={() => {
                navigate(navigationRoute);
            }}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
}
