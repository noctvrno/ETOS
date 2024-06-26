import { Stack } from "@mui/material";
import ActivityFeedGroup from "./activity-feed-group";

export default function ActivityFeed() {
    return (
        <Stack>
            <ActivityFeedGroup groupName="Training" />
            <ActivityFeedGroup groupName="Orientation" />
            <ActivityFeedGroup groupName="Feedback" />
        </Stack>
    );
}
