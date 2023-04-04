const asyncHandler = require('express-async-handler');
const Note = require('../models/notesmodel')




const getNotes = asyncHandler(async(req, res) => {
    const getNotes = await Note.find();

    res.json(getNotes);

});

const makeNotes = asyncHandler(async(req, res) => {


    const newNotes = await Note.create({
        title: req.body.title,
        content: req.body.content
    });

});

const deleteNotes = asyncHandler(async(req, res) => {


    const note = await Note.findByIdAndDelete(req.params.id)

    if(!note) {
        res.status(400)
        throw new Error('Note not deleted');
    }

});


module.exports = {
    getNotes,
    makeNotes,
    deleteNotes

}