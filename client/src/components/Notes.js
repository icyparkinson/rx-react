import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"

const StyledNotes = styled.section`
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

    .dltBtn{
        margin-left: 10px;
        display: none;
    }

    li{
        margin: 10px;
        padding: 5px;
        text-align: left;
            &:hover{
            cursor: pointer;
            background: rgb(161, 215, 202);
                .dltBtn{
                    display: inline;
                }
            }
    }

    



    

`

            // text-decoration: line-through;


const Notes = () => {

    const [notes, setNotes] = useState([]) //empty array for default notes

    useEffect( () => {
        async function fetchNotes() {
            const URL = "/api/notes/"
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
        axios.post("/api/notes/add", newNote)
            .then(res => console.log(res.data))
        setNoteInput("")
        setNotes([...notes, newNote])
    }

    // Delete Note

        const deleteNote = (id) => {
            
        axios.delete(`/api/notes/${id}`)
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
                <li key = {note._id}>
                    {note.note}
                    <button className = "dltBtn" onClick={() => deleteNote(note._id)}>Delete</button>
                </li>
                
                // <li key = {note._id} onClick={() => deleteNote(note._id)}>{note.note}</li>
                
            ))}
            </ul>
            <p></p>
                

            
        </section>
        </StyledNotes>
            
           
        
    )
}

export default Notes