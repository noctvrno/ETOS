import './App.css';
import NavBarPage from './components/nav-bar/NavBarPage';
import ActivityFeed from './components/ActivityFeed';

export default function App() {
    return (
        <>
            <NavBarPage content={<ActivityFeed />} />
        </>
    );
}
