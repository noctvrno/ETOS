import { useEffect, useState } from 'react'
import ActivityFeedGroup from '../activity-feed-group'

export default function Training() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("/api/training")
            .then(response => response.json())
            .then(data => setActivities(data.activities));
    }, []);

    return (
        <ActivityFeedGroup groupName="Training" activities={activities} />
    )
}
