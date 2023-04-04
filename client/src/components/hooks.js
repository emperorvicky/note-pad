import { useMutation, useQuery } from "@tanstack/react-query";
import axios from 'axios';

//post request

const inputedNotes = (notesData) => {
        return axios.post(`${process.env.REACT_APP_API_URL}/notes/data`, notesData)
}

export const useInputedData = () => {
    return useMutation(inputedNotes);
}


//delete request
 const deleteNotes = (note) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/notes/data/${note}`)
}

export const useDeletedNotes = () => {
    return useMutation(deleteNotes);
}


// get request
export const useNotes = () => {
    return useQuery(['note'], async () => {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/notes/data`);
        return data;
    });
}