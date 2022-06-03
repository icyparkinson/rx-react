const express = require ("express")
const router = express.Router()

let Note = require ("../models/Note")

router.route("/").get((req,res) => {
    Note.find()
        .then(notes => res.json(notes))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req,res) => {
    const note = req.body.note
    const newNote = new Note({note})

    newNote.save()
        .then(() => res.json("Note added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").get((req, res) => {
    Note.findById(req.params.id)
    .then (note => res.json(note))
    .catch (err => res.status(400).json("Error: " + err))
})

router.route("/:id").delete((req,res) => {
    Note.findByIdAndDelete(req.params.id)
        .then(() => res.json("Note deleted."))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/update/:id").post((req,res) => {
    Note.findById(req.params.id)
    .then(note => {
        note.note = req.body.note

        note.save()
            .then(() => res.json("Note updated!"))
            .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router