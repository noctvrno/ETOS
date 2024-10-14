import { Button, Stack, Typography } from "@mui/material";

export default function ActivityFeedGroup({groupName, activities = []}) {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    margin: 4,
                    marginLeft: 2
                }}>
                {groupName}
            </Typography>
            <Stack spacing={2.5}>
                {activities.map(activity => {
                    return (
                        <Button
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
                        </Button>
                    )
                })}
            </Stack>
        </>
    );
}
