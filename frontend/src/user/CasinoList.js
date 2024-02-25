import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

let casinoList = [
    {
        name: "Teen Patti 20-20",
        route: '/game/teen-patti'
    },
    {
        name: "Dragon Tiger",
        route: '/game/dragon-tiger'
    },
];

function CasinoList() {
    return (
        <Box className="flex flex-wrap p-4">
            {casinoList.map(game => (
                <Card key={game} elevation={2} className='w-full sm:w-1/2 md:w-[200px] lg:w-[200px] h-[200px] m-2'>
                    <Link to={game.route}>
                        <Typography className='font-semibold text-2xl capitalize flex justify-center items-center h-full'>
                            {game.name}
                        </Typography>
                    </Link>
                </Card>
            ))}
        </Box>
    );
}

export default CasinoList;
