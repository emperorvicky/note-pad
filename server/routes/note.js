const router = require('express').Router();
const {getNotes, makeNotes, deleteNotes} = require('../controller/notecontroller');



router.route('/').get(getNotes).post(makeNotes);
router.route('/:id').delete(deleteNotes);



module.exports = router