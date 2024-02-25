import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from '@mui/material';

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

function AgentLog() {
    return (
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
    )
}

export default AgentLog