import AddIcon from '@mui/icons-material/Add';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Autocomplete,
    Stack,
} from '@mui/material';
import { useEffect, useState } from 'react';
import User from '../../models/User';
import CreateActivityRequest from '../../models/request/CreateActivityRequest';
import EtosId, { DefaultEtosId } from '../../models/EtosId';

interface ActivityFormProps {
    title: string;
}

export default function CreateActivityForm(form: ActivityFormProps) {
    const [open, setOpen] = useState(false);
    const [assignedTo, setAssignedTo] = useState<User>();
    const [users, setUsers] = useState<User[]>([]);

    const openForm = (): void => setOpen(true);
    const closeForm = (): void => setOpen(false);

    useEffect(() => {
        fetch("/api/user")
            .then(response => response.json())
            .then((data: User[]) => setUsers(data))
            .catch(reason => console.log(reason));
    }, []);

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                onClick={openForm}
                sx={{
                    padding: 1,
                    margin: 2
                }}>
                Create
            </Button>
            <Dialog
                disableRestoreFocus
                open={open}
                onClose={closeForm}
                PaperProps={{
                    component: "form",
                    onSubmit: (e: { currentTarget: HTMLFormElement | undefined; }) => {
                        const formData = new FormData(e.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        let request: CreateActivityRequest = {
                            title: formJson.title.toString(),
                            assigneeId: assignedTo?.id ?? new DefaultEtosId()
                        };

                        fetch("/api/training", { // TODO: Replace with generic route.
                            method: 'post',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(request)
                        })
                            .then(response => response.json())
                            .then((data: EtosId) => console.log(`Successfully created activity with Identifier ${data.value}`))
                            .catch(() => console.log("Something went wrong when trying to create the activity"))

                        closeForm();
                    },
                }}>
                <DialogTitle>Create {form.title}</DialogTitle>
                <DialogContent sx={{ width: 500, height: 300 }}>
                    <Stack spacing={2} >
                        <TextField
                            id="title"
                            autoFocus
                            required
                            margin="dense"
                            name="title"
                            label="Title"
                            fullWidth
                            variant="standard" />
                        <Autocomplete
                            getOptionKey={user => user.id.value}
                            getOptionLabel={user => `${user.firstName} ${user.lastName} (${user.email})`}
                            onChange={(event, value) => onChangedUser(event, value)}
                            options={users}
                            renderInput={params => <TextField {...params} label="Assign To" />} />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeForm}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );

    function onChangedUser(_event: React.SyntheticEvent, option: User | null) {
        if (option === null)
            return;

        setAssignedTo(option);
    }
}
