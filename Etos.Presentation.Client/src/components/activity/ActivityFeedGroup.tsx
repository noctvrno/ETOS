import { Button, Stack, Typography } from "@mui/material";
import CreateActivityForm from "./CreateActivityForm";
import Activity from "./Activity";
import { useNavigate } from "react-router-dom";

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

// const navigate = useNavigate();
// navigate('/other-page', { state: { id: 7, color: 'green' } });

// <Grid
//     container
//     component='dl' // mount a Definition List
//     spacing={2}>
//     <Grid item>
//         <Typography component='dt' variant='h6'>
//             Some Heading or Definition Term
//         </Typography>
//         <Typography component='dd' variant='body2'>
//             Some Definition data
//         </Typography>
//     </Grid>
// </Grid>

function GenerateActivityControl(activity: Activity) {
    const navigateTo = useNavigate();
    return <Button
        key={activity.id.value}
        color="secondary"
        variant="outlined"
        onClick={() => navigateTo(`./${activity.id.value}`)}
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
