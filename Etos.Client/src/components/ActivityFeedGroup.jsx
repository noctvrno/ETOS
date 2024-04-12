import React from 'react'
import { Button, Stack, Typography } from "@mui/material";

const items = ["Test1", "Test2"];

export default function ActivityFeedGroup(props) {
    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    margin: "2rem",
                    marginLeft: "1rem"
                }}>
                {props.groupName}
            </Typography>
            <Stack spacing={2.5}>
                {items.map(itemName => {
                    return (
                        <Button
                            key={itemName}
                            color="secondary"
                            variant="outlined"
                            style={{
                                justifyContent: "flex-start",
                                color: "white",
                                marginLeft: "2rem",
                                borderRadius: "50px",
                                textTransform: "none",
                                whiteSpace: 'normal'
                            }}>
                            <Typography variant='h5'>{itemName}</Typography>
                        </Button>
                    )
                })}
            </Stack>
        </>
    );
}
