import React from 'react'
import { Button, Typography } from "@mui/material";

const items = ["Test1", "Test2"];

export default function ActivityFeedGroup(props) {
    return (
        <>
            <Typography variant="h4">
                {props.groupName}
            </Typography>
            {items.map(itemName => {
                return (
                    <Button
                        key={itemName}
                        color="secondary"
                        variant="outlined"
                        style={{
                            justifyContent: "flex-start",
                            color: "white",
                            margin: "2rem 2rem 0",
                            borderRadius: "50px",
                            textTransform: "none",
                            whiteSpace: 'normal'
                        }}>
                        <Typography variant='h5'>{itemName}</Typography>
                    </Button>
                )
            })}
        </>
    );
}
