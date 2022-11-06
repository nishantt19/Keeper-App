import React from "react";
import Heading from "./Heading"
import Note from "./Note"
import Footer from "./Footer";
import notes from "../notes.js"


const createNote=(note)=>{
    return (
        <Note title ={note.title} content={note.content} />
    )
}

function App(){
    return(
        <div>
            <Heading />
           
            {notes.map(createNote)}
            <Footer />
        </div>
    )
}

export  default App;