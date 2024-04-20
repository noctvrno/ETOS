import './App.css';
import NavBarPage from './components/nav-bar/NavBarPage';
import ActivityFeed from './components/activity/ActivityFeed';

export default function App() {
    return (
        <>
            <NavBarPage content={<ActivityFeed />} />
        </>
    );
}
