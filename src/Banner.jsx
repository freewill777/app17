import React from "react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
            <Button
                onClick={handleClick}
                variant="outlined"
                style={{
                    color: 'white',
                    border: '1px solid #fff'
                }}
            >
                Change background {color}
            </Button>
        </Box>
    )
}

export default Banner