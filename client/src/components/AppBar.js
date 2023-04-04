import React from 'react';
import {AppBar, Avatar, Box, Toolbar, Typography} from '@mui/material';
import { styled } from '@mui/material';
import SImage from '../images/salma2.jpg'

function TheAppBar () {

    const StyledToolbar = styled(Toolbar)(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-between'
    }))

    const Icons = styled(Box)(({theme}) => ({
        display: 'none',
        gap: 10,
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    }));

    const UserIcons = styled(Box)(({theme}) => ({
        display: 'none',
        alignItems: 'center',
        gap: 10,
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        }

    }));

    return (
        <AppBar position='fixed' >
            <StyledToolbar >
            <Typography variant='h5' color='grey'>
            EMPEROR
            </Typography>

            <Icons>
            <Avatar 
            src={SImage}/>
            </Icons>

            <UserIcons>
            <Avatar 
            src={SImage}/>
            <Typography variant='h5' color='grey' >
                Salma
            </Typography>
            </UserIcons>

            
            </StyledToolbar>
        </AppBar>
    )
}

export default TheAppBar;