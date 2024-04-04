import { Button, Stack, Typography } from "@mui/material";

export default function ActivityFeed() {
    return (
        <Stack>
            <Button
                color="secondary"
                variant="outlined"
                style={{
                    fontSize: 30,
                    justifyContent: "flex-start",
                    color: "white",
                    margin: 20,
                    borderRadius: 50
                }}>
                Test
            </Button>
            <Typography variant="h3">
                Training
            </Typography>
            <Typography variant="h3">
                Orientation
            </Typography>
            <Typography variant="h3">
                Feedback
            </Typography>
        </Stack>
    );
}
