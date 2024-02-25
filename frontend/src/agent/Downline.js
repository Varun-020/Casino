import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import {
    Box, IconButton, Stack, Button, Card, Divider, Typography,
    FormControl, InputLabel, Select, MenuItem
} from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputBase from '@mui/material/InputBase';
import CreateUserDialog from '../components/CreateUserDialog';
import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';


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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '0.5px solid gray',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



function Downline() {
    const { createUserStatus, createUserMessage } = useSelector(state => state.AuthReducer);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box p={4}>
            <Stack
                direction="row"
                spacing={2}
                justifyContent='flex-end'
                alignItems={'center'}
                m={1}
            >
                <Button
                    variant='contained'
                    size='small'
                    startIcon={<GroupAddIcon />}
                    onClick={handleClickOpen}
                >
                    Add User
                </Button>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
            </Stack>

            <Box className="flex flex-col gap-2 md:flow-row lg:flex-row">
                <Card elevation={2} sx={{ marginBottom: 2 }} className='sm:w-full md:w-[400px]'>
                    <Stack p={0.5}>
                        <Typography variant="body2" gutterBottom>Total Balance</Typography>
                        <Typography variant="h6" gutterBottom>IRP 49.41</Typography>
                    </Stack>
                    <Divider />
                    <Stack p={0.5}>
                        <Typography variant="body2" gutterBottom>Total Exposure</Typography>
                        <Typography variant="h6" gutterBottom>{`IRP (49.41)`}</Typography>
                    </Stack>
                    <Divider />
                    <Stack p={0.5}>
                        <Typography variant="body2" gutterBottom>Total Available balance</Typography>
                        <Typography variant="h6" gutterBottom>IRP 49.41</Typography>
                    </Stack>
                    <Divider />
                    <Stack p={0.5}>
                        <Typography variant="body2" gutterBottom>Upline P/L</Typography>
                        <Typography variant="h6" gutterBottom>IRP 49.41</Typography>
                    </Stack>
                </Card>
                <Card elevation={2} className='w-full'>
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent='space-between'
                        alignItems={'center'}
                        m={1}
                        sx={{ flexGrow: 1 }}
                    >
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
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Stack>

                    <Box px={1}>
                        <TableContainer component={Paper} elevation={2}>
                            <Table sx={{ minWidth: 650, overflow: "auto" }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell align="right">Calories</TableCell>
                                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

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
                </Card>
            </Box>

            <CreateUserDialog
                open={open}
                handleClose={handleClose}
            />
        </Box>
    )
}
export default Downline