import React from 'react'
import { Box, Button, Card, TextField, Typography } from '@mui/material'

function DateRangeSelector() {
    return (
        <Card elevation={1} sx={{ display: "flex", alignItems: "center", gap: 1, background: '#dff2ff', p: 2 }}>
            <Typography variant='body2'>From</Typography>
            <TextField
                id='from'
                type='date'
                size='small'
                name='startdate'
            />
            <Typography variant='body2'>To</Typography>
            <TextField
                id='to'
                type='date'
                size='small'
                name='endDate'
            />
            <Button
                variant='contained'
                size='small'
            >
                Get
            </Button>
        </Card>
    )
}

export default DateRangeSelector