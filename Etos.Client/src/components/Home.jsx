import { Box } from "@mui/material";
import NavBar from "./NavBar";
import ActivityFeed from "./ActivityFeed";

export default function Home() {
    return (
        <Box Box display="flex" height="100vh" width="100vw">
            <Box>
                <NavBar />
            </Box>
            <Box flex={{ xs: 12 }} textAlign="center">
                <ActivityFeed />
            </Box>
        </Box>
    );
}
