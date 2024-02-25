import React from 'react'
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/AuthAction';

function Navbar() {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.AuthReducer);
    let userType = user?.userType

    const handleLogout = () => {
        dispatch(logout(user))
    }

    return (
        <>
            {
                Object.keys(user).length > 0 ?
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent='space-between'
                        alignItems={'center'}
                        sx={{ background: "#082a7b" }}
                        p={1}
                    >
                        {
                            user.userType === 'user' &&
                            <Button
                                size='small'
                                variant='contained'
                                startIcon={<CurrencyExchangeIcon />}
                            >
                                Bets
                            </Button>
                        }
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems={'center'}
                        >
                            {
                                user.userType === 'agent' &&
                                <>
                                    <div className='bg-black px-2 py-1 rounded-md'>
                                        <Typography className='text-white text-[10px]'>agent</Typography>
                                    </div>
                                    <Typography className='text-white text-[10px]'>{user.username}</Typography>
                                </>
                            }
                            <Stack
                                direction="column"
                                spacing={0}
                            >
                                <Typography className='text-white text-[10px]'>
                                    {user.userType === 'agent' ? 'IRP' : 'Main'}
                                    &nbsp;{user.balance}
                                </Typography>
                                {
                                    user.userType === 'user' &&
                                    <Typography className='text-white text-[10px]'>Exposure&nbsp;<span className='text-red-500'>{`(100)`}</span></Typography>
                                }
                            </Stack>
                            <Box className="rounded-md w-[32.5px] h-[32.5px] flex items-center justify-center bg-black"
                            >
                                <RefreshIcon sx={{ color: "#FFF", fontSize: '20px' }} />
                            </Box>
                            {
                                user.userType === 'user'
                                &&
                                <Box className="rounded-md w-[32.5px] h-[32.5px] flex items-center justify-center bg-black"
                                    onClick={handleLogout}>
                                    <SettingsIcon sx={{ color: "#FFF", fontSize: '20px' }} />
                                </Box>
                            }
                        </Stack>
                    </Stack>
                    :
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent='space-between'
                        alignItems={'center'}
                        sx={{ background: "#082a7b" }}
                        p={1}
                    >
                        <Link to='/'>
                            <Typography variant='h6' className='text-white'>
                                Casino
                            </Typography>
                        </Link>
                        <Button
                            size='small'
                            variant='contained'
                        >
                            <Link to='/login'>
                                Login
                            </Link>
                        </Button>
                    </Stack>
            }
            {
                userType === 'agent' &&
                <div className="flex overflow-x-auto whitespace-nowrap bg-[#fff3cd]">
                    <Stack
                        divider={<Divider orientation="vertical" flexItem />}
                        direction="row"
                        spacing={2}
                        justifyContent='flex-end'
                        alignItems={'center'}
                        px={2} py={0.5}
                    >
                        <Link to='/agent/dashboard'>
                            <Typography>Dashboard</Typography>
                        </Link>
                        <Link to='/agent/downline'>
                            <Typography>Downline List</Typography>
                        </Link>
                        <Link to='/agent/account'>
                            <Typography>My Account</Typography>
                        </Link>
                        <Link>
                            <Typography>Bet List</Typography>
                        </Link>
                        <Link>
                            <Typography>Market Analysis</Typography>
                        </Link>
                        <Button onClick={handleLogout}>
                            <Typography>Logout</Typography>
                        </Button>
                    </Stack>
                </div>
            }
        </>
    )
}

export default Navbar