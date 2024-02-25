import { Box, Card, Stack } from '@mui/material';
import React from 'react';

function Dashboard() {
    return (
        <Box className="flex flex-col md:flex-row lg:flex-row gap-6 p-8 md:p-12 h-screen">
            <Card className='w-[300px] h-[300px] xs:w-full'>
                <Stack px={2} sx={{ background: '#000', color: '#fff' }}>
                    Live Sports Profit
                </Stack>
                <Box>
                    {/* Content for the first card */}
                </Box>
            </Card>
            <Card className='w-[300px] h-[300px] xs:w-full'>
                <Stack px={2} sx={{ background: '#000', color: '#fff' }}>
                    Backup Sports Profit
                </Stack>
                <Box>
                    {/* Content for the second card */}
                </Box>
            </Card>
        </Box>
    );
}

export default Dashboard;
