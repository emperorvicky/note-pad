import React from 'react';
import { List, 
    Typography, 
    Button, 
    ListItem, 
    Box,    
    ListItemText, 
    IconButton, 
    Paper} from '@mui/material';
import {Delete} from '@mui/icons-material';


function BigStore  (props)  {
    

    return(
       
    <Paper elevation={5} sx={{
        width: '60ch'
    }} >
                    <List>
                        <ListItem key={props.key} >
                        <ListItemText 
                        primary={
                            <Typography variant='h4' sx={{pb:1}} >
                                {props.title.substring(0, 19)}
                            </Typography>
                        } 
                        secondary={
                            <Typography>
                               {props.content.substring(0, 92) + '....'}
                            </Typography>
                        }/>
     
                        <Box sx={{mt: '10rem'}}>
                        <IconButton edge='end'>
                         <Button   startIcon={<Delete />}  
                         variant='outlined' 
                         onClick={props.click}>
                         Delete</Button>
                        </IconButton>
                        </Box>
                        </ListItem>
                    </List>
                    
                </Paper>
    )
}

 function SmallStore (props)  {

    return(
  
    <Paper key={props.key} elevation={5} sx={{
        width: '55ch',
    }}>
        <List  >
            <ListItem >
                <ListItemText
                    primary={
                        <Typography variant='h4' sx={{pb:1}} >
                            {props.title.substring(0, 19)}
                        </Typography>
                    } 
                    secondary={
                        <Typography>
                          {props.content.substring(0, 92) + '....'}
                        </Typography>
                    }/>
                    <Box sx={{mt: '10rem'}}>
                    <IconButton edge='end'>
                     <Button 
                     startIcon={<Delete />} 
                     variant='outlined' 
                     onClick={props.click}>
                     Delete</Button>
                    </IconButton>
                    </Box>
                    </ListItem>
                </List>
    </Paper>
    )
 } 
 

 export {SmallStore, BigStore}

