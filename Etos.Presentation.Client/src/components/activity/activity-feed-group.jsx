import React from 'react'
import { Button, Stack, Typography } from "@mui/material";

export default function ActivityFeedGroup({groupName, activities = []}) {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    margin: "2rem",
                    marginLeft: "1rem"
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
                                padding: "1rem",
                                marginLeft: "2rem",
                                marginRight: "2rem",
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
