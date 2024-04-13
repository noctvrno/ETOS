import { Box } from "@mui/material";
import NavBar from "./NavBar";
import ActivityFeed from "./ActivityFeed";

export default function Home() {
    return (
        <Box display="flex" height="100dvh" width="100dvw">
            <Box flex={{ xs: 2 }}>
                <NavBar />
            </Box>
            <Box flex={{ xs: 10 }}>
                <ActivityFeed />
            </Box>
        </Box>
    );
}
