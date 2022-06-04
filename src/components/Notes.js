import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const StyledNotes = styled.ul`
    h1{
        text-decoration: underline;
    }

    textarea{
        margin: 0 5px;
        width: 90%;
        height: 15vh;
        padding: 15px;
    }

    button{
        padding: 5px;
    }

    ul{
        margin: 30px;
    }

    li{
        margin: 10px;
        text-align: left;
            &:hover{
            text-decoration: line-through;
            cursor: pointer;
            background: rgb(161, 215, 202)
            }
    }

`

const Notes = () => {

    const [notes, setNotes] = useState([
        // {
        //     id: 1,
        //     note: "This is a note"
        // }, 
        // {
        //     id: 2,
        //     note: "This is another note"
        // }
        // axios.get("http://localhost:4000/notes/")
        //     .then(res => {
        //         console.log(res.data)
        //         }
        //     )
    ])

    useEffect( () => {
        async function fetchNotes() {
            const URL = "https://rxbuddy.herokuapp.com/notes/"
            try {
                const res = await axios.get(URL)
                console.log(res.data[0]._id)
                setNotes(res.data)
            }   catch(error){
                console.log(error)
            }
        } fetchNotes()
    }, [])

    const [noteInput, setNoteInput] = useState("")
    
    const onInputChange = ({ target }) => {
        const newInput = target.value
        setNoteInput(newInput)
    }

    // Add Note

    const onSubmit = (event) => {
        event.preventDefault()
        const newNote = {
            "note": noteInput
        }
        console.log(newNote)
        axios.post("https://rxbuddy.herokuapp.com/notes/add", newNote)
            .then(res => console.log(res.data))
        setNoteInput("")
        setNotes([...notes, newNote])
    }

    // Delete Note

      const deleteNote = (id) => {
        axios.delete(`https://rxbuddy.herokuapp.com/notes/${id}`)
            .then(res => console.log(res.data))
            .catch((err) => console.log(err))

        setNotes(notes.filter((notes) => notes._id !== id))
      }






    return(
        <StyledNotes>
        <section>
            <h1>Notes</h1>
            <form>
                <textarea onChange = {onInputChange} value = {noteInput}></textarea>
                <p><button type = "submit" onClick = {onSubmit}>Add Note</button></p>
            </form>
            <ul>
                {notes.map( (note) => (
                <li key = {note._id} onClick={() => deleteNote(note._id)}>{note.note}</li>
                
            ))}
            </ul>
            <p></p>
                

            
        </section>
        </StyledNotes>
            
           
        
    )
}

export default Notes