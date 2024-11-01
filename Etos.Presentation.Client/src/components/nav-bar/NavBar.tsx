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
                name="Home"
                icon={<HomeOutlined />}
                navigationRoute="/" />
            <NavBarItem
                name={"Training"}
                icon={<SchoolOutlined />}
                navigationRoute="/training" />
            <NavBarItem
                name={"Orientation"}
                icon={<VisibilityOutlined />}
                navigationRoute="/orientation" />
            <NavBarItem
                name={"Feedback"}
                icon={<CheckBoxOutlined />}
                navigationRoute="/feedback" />
        </List>
    );
}
