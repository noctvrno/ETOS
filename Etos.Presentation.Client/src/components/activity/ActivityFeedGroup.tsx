import { Button, Stack, Typography } from "@mui/material";

interface IActivityFeedGroup {
    Name: string;
    Activities: IActivity[];
}

export default function ActivityFeedGroup(group: IActivityFeedGroup) {
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
            <Stack spacing={2.5}>
                {group.Activities.map(activity => {
                    return (
                        <Button
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
                        </Button>
                    )
                })}
            </Stack>
        </>
    );
}
