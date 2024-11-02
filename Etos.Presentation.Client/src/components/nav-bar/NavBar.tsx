import './NavBar.css';
import NavBarItem from './NavBarItem'
import { HomeOutlined, SchoolOutlined, CheckBoxOutlined, VisibilityOutlined } from '@mui/icons-material'
import { Avatar, Divider, List, Typography } from '@mui/material';

export default function NavBar() {
    return (
        <List className="nav-bar">
            <Avatar
                alt="Temp User"
                sx={{
                    width: 256,
                    height: 256,
                    margin: 2
                }} />
            <Typography variant="h6" padding={1}>
                .NET Developer
            </Typography>
            <Divider sx={{ width: "100%" }} />
            <NavBarItem
                Name="Home"
                Icon={<HomeOutlined />}
                Route="/" />
            <NavBarItem
                Name={"Training"}
                Icon={<SchoolOutlined />}
                Route="/training" />
            <NavBarItem
                Name={"Orientation"}
                Icon={<VisibilityOutlined />}
                Route="/orientation" />
            <NavBarItem
                Name={"Feedback"}
                Icon={<CheckBoxOutlined />}
                Route="/feedback" />
        </List>
    );
}
