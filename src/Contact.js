
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
    return (
        <div className='contact'>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                className='form'
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="filled-basic" label="Email" variant="filled" />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
                <Button variant="contained">Contact us</Button>
            </Box>
        </div>
    )
}

export default Contact
