const express = require ("express")
const cors = require ("cors")
const mongoose = require ("mongoose")
const notesRouter = require("./routes/notes")
const path = require ("path")

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


app.use("/api/notes", notesRouter)

app.use(express.static(path.resolve(__dirname, '../client/build')))
console.log(path.resolve(__dirname, '../client/build'))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
   });

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})

