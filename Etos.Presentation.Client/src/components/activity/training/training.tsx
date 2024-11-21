import { useEffect, useState } from 'react'
import ActivityFeedGroup from '../ActivityFeedGroup'
import Activity from "../Activity";

export default function Training() {
    const [activities, setActivities] = useState<Activity[]>([]);
    useEffect(() => {
        fetch("/api/training")
            .then(response => response.json())
            .then(data => setActivities(data.activities));
    }, []);

    return (
        <>
            <ActivityFeedGroup name="Training" activities={activities} />
        </>
    )
}
