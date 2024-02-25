import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow, Typography } from '@mui/material';
import {
    Stack, FormControl, InputLabel, Select, MenuItem, Button
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function AgentAccountStatement() {
    return (
        <>
            <Stack
                direction="row"
                spacing={2}
                alignItems={'center'}
                m={1}
                sx={{ flexGrow: 1 }}
            >
                <Typography variant='body2'>
                    Show
                </Typography>
                <FormControl sx={{ width: 100 }} size='small'>
                    <InputLabel id="demo-simple-select-label">Show</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Show"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
                <Typography variant='body2'>
                    Entries
                </Typography>
            </Stack>
            <TableContainer component={Paper} elevation={2}>
                <Table sx={{ minWidth: 650, overflow: "auto" }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Login Date & Time</TableCell>
                            <TableCell>Login Status</TableCell>
                            <TableCell>IP Address</TableCell>
                            <TableCell>ISP</TableCell>
                            <TableCell>City/State/Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack
                direction="row"
                spacing={2}
                justifyContent='space-between'
                alignItems={'center'}
                m={1}
            >
                <Typography variant="h6" gutterBottom>
                    Showing {1} to {6} of {6} entries
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Button
                        size='small'
                        startIcon={<ArrowBackIcon />}
                    >
                        Prev
                    </Button>
                    <Button
                        size='small'
                        endIcon={<ArrowForwardIcon />}
                    >
                        Next
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default AgentAccountStatement