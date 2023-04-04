import React from 'react';
import {Box, 
    Grid,
    Paper, 
    List, 
    ListItem,
    ListItemText,
    Typography} from '@mui/material'


function Test () {

    return (
        <Grid container>
            <Grid lg={7}>
                <Paper elevation={10} sx={{mr: 5}}>
                <Typography variant='h1' gutterBottom>
                    Hey
                </Typography>
                    <Typography variant='body1'>
                        hey I'm trying to figure out something  it really difficult, I hope i get
                        today 
                    </Typography>
                </Paper>
            </Grid>
            <Grid lg={5}>
                <Paper elevation={10} sx={{pl: 5}}>
                    <Typography variant='h1' gutterBottom>
                        C'mon
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        I know it working, we are getting somewhere
                    </Typography>
                </Paper>

            </Grid>
        </Grid>

    )
}

export default Test