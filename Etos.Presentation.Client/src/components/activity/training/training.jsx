import React from 'react';
import { useEffect, useState } from 'react'
import ActivityFeedGroup from '../activity-feed-group'
import CreateTrainingForm from './create-training-form';

export default function Training() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch("/api/training")
            .then(response => response.json())
            .then(data => setActivities(data.activities));
    }, []);

    return (
        <>
            <ActivityFeedGroup groupName="Training" activities={activities} />
            <CreateTrainingForm /> {/* TODO: This will need to be embedded into ActivityFeedGroup */}
        </>
    )
}
