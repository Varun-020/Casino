import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote';
import AgentPassReset from './AgentPassReset';

function AgentProfile() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Stack p={0.5} direction={'row'} spacing={2}>
                <Typography variant="h6" gutterBottom sx={{ width: 70 }}>Name</Typography>
                <Typography variant="body2" gutterBottom>{'mastervarun'}</Typography>
            </Stack>
            <Divider />
            <Stack p={0.5} direction={'row'} spacing={2}>
                <Typography variant="h6" gutterBottom sx={{ width: 70 }}>Currency</Typography>
                <Typography variant="body2" gutterBottom>IRP</Typography>
            </Stack>
            <Divider />
            <Stack p={0.5} direction={'row'} spacing={2} alignItems={'center'}>
                <Typography variant="h6" gutterBottom sx={{ width: 70 }}>password</Typography>
                <Typography variant="body2" gutterBottom>
                    *********
                </Typography>
                <EditNoteIcon size='small' onClick={handleClickOpen} />
            </Stack>
            <Divider />
            <AgentPassReset
                open={open}
                handleClose={handleClose}
            />
        </>
    )
}

export default AgentProfile