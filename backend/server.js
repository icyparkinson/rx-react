const express = require ("express")
const cors = require ("cors")
const mongoose = require ("mongoose")
const notesRouter = require("./routes/notes")

require ("dotenv").config()

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())


const uri = process.env.DBStringBuddy
mongoose.connect(uri)

const connection = mongoose.connection
connection.once("open", () => {
    console.log("MongoDB database connection established successfully")
})

app.use("/notes", notesRouter)

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})

