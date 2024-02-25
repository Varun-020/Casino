import * as React from 'react';
import { Button, TextField, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Grid, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../store/actions/AuthAction';

export default function CreateUserDialog({ open, handleClose, }) {
    const dispatch = useDispatch();

    const { createUserLoader } = useSelector((state) => state.AuthReducer);

    console.log('createUserLoader', createUserLoader);
    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        dispatch(createUser(formJson));
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
            <DialogTitle className='mb-2'>Add User</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="username"
                            name="username"
                            label="Username"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="opening_balance"
                            name="opening_balance"
                            label="Opening Balance"
                            type="number"
                            fullWidth
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="Password"
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
            <Stack my={1} alignItems={'center'}>
                <Button
                    variant="outlined"
                    type="submit"
                >
                    Create User
                </Button>
            </Stack>
        </Dialog>
    );
}