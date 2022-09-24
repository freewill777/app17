import React from "react"
import Box from '@mui/material/Box';
import { Button as ButtonMUI } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';

const Button = styled(ButtonMUI)({
    color: '#fff',
    borderColor: '#fff',
    '&:hover': {
        color: '#a3b18a',
        borderColor: '#a3b18a'
    }
});

function Banner({ clearCompleted, filterTasks }) {
    return (
        <Box
            style={{
                height: '25vh',
                backgroundColor: '#3a5a40',
                display: 'grid',
                placeItems: 'center',
            }}
        >

            <Stack spacing={2} direction="row">
                <InputBase
                    onChange={(event) => filterTasks(event.target.value)}
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
                <Button
                    variant="outlined"
                    onClick={() => clearCompleted()}
                >
                    Remove completed
                </Button>
            </Stack>
        </Box>
    )
}

export default Banner