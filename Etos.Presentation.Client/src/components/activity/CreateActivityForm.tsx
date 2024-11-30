import AddIcon from '@mui/icons-material/Add';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Autocomplete
} from '@mui/material';
import { useEffect, useState } from 'react';
import EtosId from '../../models/EtosId';
import User from '../../models/User';

interface ActivityFormProps {
    Title: string;
}

interface CreateActivityRequest {
    Name: string;
    AssigneeId: EtosId;
}

export default function CreateActivityForm(form: ActivityFormProps) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<User[]>([]);
    const openForm = (): void => setOpen(true);
    const closeForm = (): void => setOpen(false);

    useEffect(() => {
        fetch("/api/user")
            .then(response => response.json())
            .then((data: User[]) => setOptions(data))
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
                        const title = formJson.title;
                        console.log(title); // TODO: Replace with proper API call.
                        closeForm();
                    },
                }}>
                <DialogTitle>Create {form.Title}</DialogTitle>
                <DialogContent sx={{ width: 500 }}>
                    <TextField
                        id="title"
                        autoFocus
                        required
                        margin="dense"
                        name="title"
                        label={form.Title}
                        fullWidth
                        variant="standard" />
                    <Autocomplete
                        disablePortal
                        options={options.map(option => `${option.FirstName} ${option.LastName}`)}
                        renderInput={params => <TextField {...params} label="User" />} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeForm}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
