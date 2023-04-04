import React, {useState} from 'react';
import { Box,
    Paper, 
    Grid, 
    Typography, 
    TextField, 
    FormLabel, 
    Button, CircularProgress
} from '@mui/material';
import {Add} from '@mui/icons-material';
import { useInputedData, useDeletedNotes, useNotes } from '../components/hooks';
import { BigStore, SmallStore } from '../components/store';
import { Stack } from '@mui/system';


function Body () {

    const [value, setValue] = useState({
            title:"",
            content:""
    });


    function handleChange (event) {
        const {name, value} = event.target;

        setValue(prev => ({
            ...prev,
            [name] : value,
        }))

        
    }  

    



  const {mutate, isSuccess} = useInputedData();  
    
  const {mutate: deleteNote, isSuccess: deleted}= useDeletedNotes();

  const handleMutate = () => {
    mutate(value)
        setValue({
            title: "",
            content: ""
        })

    }


    const {status, data, error} = useNotes();
    

    function handleLoading () {
        <CircularProgress />
    }

    return(

        <Grid  container sx={{mt: 15,}}>
            <Grid lg={12} sm={7} sx={{pr: 5}} >
                <Paper elevation={5} sx={{pr:2, pl:2}}>
        <Box component='form' sx={{pt: 3}}>
        <FormLabel>
            <Typography variant='h6'>
                Title:
            </Typography>
        </FormLabel>
        <TextField
        inputProps={{ maxLength: 18}}
        sx={ (theme) => ({
            display: 'none',
            [theme.breakpoints.up('sm')]: {
           display: 'flex' 
        }
        })
        }
        name='title'
        placeholder='write your title....' 
        multiline 
        rows={2} 
        fullWidth
        value={value.title}
        onChange={handleChange}
        required
        />
        <TextField
        inputProps={{ maxLength: 18}}
        sx={ (theme) =>({
            display: 'none',
            width: '35ch',
            [theme.breakpoints.down('sm')]: {
            display: 'flex'
        }})} 
        name='title'
        placeholder='write your title...'
        multiline
        onChange={handleChange}
        value={value.title}
        rows={2}
        required
        />

        </Box>

        <Box sx={{pt: 3}}>
        <FormLabel>
            <Typography variant='h6'>
                Content:
            </Typography>
        </FormLabel>

        <TextField

        sx={ (theme) => ({
            display: 'none',
            [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
        })}
        name='content'
        placeholder='write your content.....'
        multiline
        rows={5}
        value={value.content}
        onChange={handleChange}
        fullWidth
        required
        />
        <TextField
        sx={ (theme) => ({
            display: 'none',
            width: '55ch',
            [theme.breakpoints.down('sm')]: {
            display: 'flex'
        }
        })}
        name='content'
        placeholder='write your content.....'
        multiline
        rows={5}
        value={value.content}
        onChange={handleChange}
        required
        />
        </Box>

        <Box 
        sx={ (theme) => ({
        display: 'none',
        marginLeft: '35rem',
        paddingTop: 2,
        paddingBottom: 2,
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
        })}
        >
        <Button type='submit'
        onClick={handleMutate} 
        startIcon={<Add />} 
        variant='contained' 
        >Add</Button>
        </Box>


        <Box 
        sx={(theme) => ({
            display: 'none',
            marginLeft: '21rem',
            paddingTop: 1,
            paddingBottom: 2,
            [theme.breakpoints.down('sm')]: {
                display: 'flex'
            }

        })}>
        <Button type='submit' 
        onClick={handleMutate}
        startIcon={<Add />} 
        variant='contained' 
        >Add</Button>
        </Box>

                </Paper>
            </Grid>
        { status === "loading" ? (<CircularProgress 
        sx={ (theme) => ({
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
        })}/>) :
        status === "error" ? (<span>Error: {error}</span>): 
        (
            <>
        {data.map(notes => {
           return(
          
        <Stack direction="row" sx={ (theme) => ({
        mt: 7,
        mr: 4,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        }
    })}>
 
           <BigStore 
           key={notes._id} 
           title={notes.title} 
           content={notes.content}
           click={() => {deleteNote(notes._id)}}
           />
        </Stack>
           
           )
            })}
            </>
            )}
            { status === "loading" ? (<CircularProgress 
        sx={ (theme) => ({
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
        })}/>) :
            status === "error" ? (<span>Error: {error}</span>) :
            (
                <>
            {data.map(notes => {
                return(
        <Grid sx={(theme) => ({
            display: 'none',
            [theme.breakpoints.down('sm')]: {
            display: 'flex'
            },
            mt:7, 
        })}>
            <SmallStore 
            key={notes._id} 
            title={notes.title} 
            content={notes.content}
            click={() => {deleteNote(notes._id)}}
            />
            </Grid>
                )
        })}
        </>
            )}
        </Grid>
    )
}



export default Body;



// why does my textfield leave focus wheni input a letter?