import { Button, Stack, Typography } from "@mui/material";
import CreateActivityForm from "./CreateActivityForm";

interface ActivityFeedGroupProps {
    Name: string;
    Activities: Activity[];
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
                {group.Name}
            </Typography>
            <CreateActivityForm Title={group.Name} />
            <Stack spacing={2.5}>
                {group.Activities.map(GenerateActivityControl)}
            </Stack>
        </>
    );
}

function GenerateActivityControl(activity: Activity) {
    return <Button
        key={activity.Id}
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
        <Typography variant='h5'>{activity.Title}</Typography>
    </Button>;
}
