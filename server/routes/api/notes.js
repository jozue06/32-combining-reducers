import express from 'express';
import Note from '../../models/Note.js'

const router = express.Router()



router.get('/', (req, res) => {
    Note.find()
        .sort({
            timestamp: -1
        })
        .then(notes => res.json(notes))
});

router.post('/', (req, res) => {
    const newNote = new Note({
        noteTitle: req.body.noteTitle,
        noteBody: req.body.noteBody,
        noteId: req.body.noteId,
        timestamp: req.body.timestamp
    });
    newNote.save()
        .then(note => res.json(note));

});

router.delete('/:id', (req, res) => {
    Note.findById(req.params.id)
        .then(note => note.remove()
            .then(() => res.json({
                deleted: true
            }))
        )
        .catch(err => res.status(404).json({deleted: false}));
})

export default router;