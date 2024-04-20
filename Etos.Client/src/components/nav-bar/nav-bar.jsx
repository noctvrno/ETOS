import './NavBar.css';
import NavBarItem from './nav-bar-item'
import { HomeOutlined, SchoolOutlined, CheckBoxOutlined, VisibilityOutlined } from '@mui/icons-material'
import { Avatar, Divider, List, Typography } from '@mui/material';

export default function NavBar() {
    return (
        <List className="nav-bar">
            <Avatar
                alt="Temp User"
                sx={{
                    width: "256px",
                    height: "256px",
                    margin: "1rem"
                }} />
            <Typography variant="h6" padding={1}>
                .NET Developer
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <NavBarItem
                name={"Home"}
                icon={<HomeOutlined />} />
            <NavBarItem
                name={"Training"}
                icon={<SchoolOutlined />} />
            <NavBarItem
                name={"Orientation"}
                icon={<VisibilityOutlined />} />
            <NavBarItem
                name={"Feedback"}
                icon={<CheckBoxOutlined />} />
        </List>
    );
}
