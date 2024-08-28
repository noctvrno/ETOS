import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { useState } from 'react';

export default function CreateTrainingForm() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
                sx={{
                    padding: 1,
                    margin: 2
                }}>
                Create
            </Button>
            <Dialog
                disableRestoreFocus
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: "form",
                    onSubmit: e => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const title = formJson.title;
                        console.log(title); // TODO: Replace with proper API call.
                        handleClose();
                    },
                }}>
                <DialogTitle>Create Training</DialogTitle>
                <DialogContent sx={{ width: 500 }}>
                    <TextField
                        id="title"
                        autoFocus
                        required
                        margin="dense"
                        name="title"
                        label="Training Title"
                        fullWidth
                        variant="standard" />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
