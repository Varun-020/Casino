import React, { useState } from 'react';
import { Box, Card, Divider, Stack } from '@mui/material';
import AgentProfile from '../components/AgentProfile';
import AgentAccountStatement from '../components/AgentAccountStatement';
import AgentLog from '../components/AgentLog';
import DateRangeSelector from '../components/DateRangeSelector';

function Account() {
    const [activeTab, setActiveTab] = useState('My Profile');

    const handleActiveTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <Box className="flex flex-col md:flex-row lg:flex-row gap-6 p-8 md:p-12 sm:flex sm:flex-col h-screen">
            <Card className='min-w-[250px] h-[125px]'>
                <Stack px={2} py={1} sx={{ background: '#000', color: '#fff' }}>
                    My account
                </Stack>
                <Box className="">
                    <Stack className={activeTab === 'My Profile' ? 'font-semibold bg-gray-200 cursor-pointer' : 'cursor-pointer'}
                        p={0.5} onClick={() => handleActiveTab('My Profile')}
                    >
                        My Profile
                    </Stack>
                    <Divider />
                    <Stack className={activeTab === 'Account Statement' ? 'font-semibold bg-gray-200 cursor-pointer' : 'cursor-pointer'}
                        p={0.5} onClick={(e) => handleActiveTab('Account Statement')}
                    >
                        Account Statement
                    </Stack>
                    <Divider />
                    <Stack className={activeTab === 'Activity Log' ? 'font-semibold bg-gray-200 cursor-pointer' : 'cursor-pointer'}
                        p={0.5} onClick={() => handleActiveTab('Activity Log')}
                    >
                        Activity Log
                    </Stack>
                </Box>
            </Card>
            <Stack direction={'column'} spacing={2} className='w-full max-h-fit'>
                {
                    activeTab === 'Account Statement' && <DateRangeSelector />
                }
                <Card className="w-full max-h-fit">
                    <Stack px={2} py={1} sx={{ background: '#000', color: '#fff' }}>
                        {activeTab}
                    </Stack>
                    {
                        activeTab === 'My Profile' && <AgentProfile />
                    }
                    {
                        activeTab === 'Account Statement' && <AgentAccountStatement />
                    }
                    {
                        activeTab === 'Activity Log' && <AgentLog />
                    }
                </Card>
            </Stack>
        </Box >
    )
}

export default Account;
