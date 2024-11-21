import { Button, Stack, Typography } from "@mui/material";
import CreateActivityForm from "./CreateActivityForm";
import Activity from "./Activity";

interface ActivityFeedGroupProps {
    name: string;
    activities: Activity[];
}

export default function ActivityFeedGroup(group: ActivityFeedGroupProps) {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    margin: 4,
                    marginLeft: 2
                }}>
                {group.name}
            </Typography>
            <CreateActivityForm title={group.name} />
            <Stack spacing={2.5}>
                {group.activities.map(GenerateActivityControl)}
            </Stack>
        </>
    );
}

function GenerateActivityControl(activity: Activity) {
    return <Button
        key={activity.id.value}
        color="secondary"
        variant="outlined"
        style={{
            justifyContent: "flex-start",
            color: "white",
            padding: 2,
            marginLeft: 4,
            marginRight: 4,
            borderRadius: "50px",
            textTransform: "none",
            whiteSpace: "normal"
        }}>
        <Typography variant='h5'>{activity.title}</Typography>
    </Button>;
}
