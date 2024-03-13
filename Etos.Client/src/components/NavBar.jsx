import './NavBar.css';
import NavBarItem from './NavBarItem'
import List from '@mui/material/List';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function NavBar() {
    return (
        <List className='nav-bar'>
            <NavBarItem
                name={"Home"}
                icon={<HomeOutlinedIcon />}
            />
            <NavBarItem
                name={"Training"}
                icon={<SchoolOutlinedIcon />}
            />
            <NavBarItem
                name={"Orientation"}
                icon={<VisibilityOutlinedIcon />}
            />
            <NavBarItem
                name={"Feedback"}
                icon={<CheckBoxOutlinedIcon />}
            />
        </List>
    );
}
