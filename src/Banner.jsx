import React from "react"
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

function Banner() {
    const [color, setColor] = React.useState('#457b9d')
    function handleClick() {
        if (color === '#457b9d') {
            setColor('#a8dadc')
        } else {
            setColor('#457b9d')
        }
    }
    return (
        <Box
            style={{
                height: '25vh',
                backgroundColor: color,
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <InputBase
                sx={{
                    ml: 1,
                    p: 1,
                    flex: 1,
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: '4px'
                }}
                placeholder="Filter tasks"
            />
        </Box>
    )
}

export default Banner