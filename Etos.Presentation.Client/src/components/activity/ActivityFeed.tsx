import { Stack } from "@mui/material";
import ActivityFeedGroup from "./ActivityFeedGroup";

export default function ActivityFeed() {
    return (
        <Stack>
            <ActivityFeedGroup Name="Training" Activities={[]} />
            <ActivityFeedGroup Name="Orientation" Activities={[]} />
            <ActivityFeedGroup Name="Feedback" Activities={[]} />
        </Stack>
    );
}
