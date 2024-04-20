import './App.css';
import NavBarPage from './components/nav-bar/nav-bar-page';
import ActivityFeed from './components/activity/activity-feed';

export default function App() {
    return (
        <>
            <NavBarPage content={<ActivityFeed />} />
        </>
    );
}
