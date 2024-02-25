import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Stack } from '@mui/material';

export default function AgentPassReset({ open, handleClose }) {

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email;
        console.log(formJson);
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: onSubmit
            }}
        >
            <DialogTitle>Change Password</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoFocus
                            required
                            id="password"
                            name="password"
                            label="Your Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="new_password"
                            name="new_password"
                            label="New Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="confirm_password"
                            name="confirm_password"
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <Stack m={1} justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={2}>
                <Button
                    variant="contained"
                    type="submit"
                >
                    Yes
                </Button>
                <Button
                    variant="outlined"
                    type="button"
                    onClick={handleClose}
                >
                    No
                </Button>
            </Stack>
        </Dialog>
    );
}