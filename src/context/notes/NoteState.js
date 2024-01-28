import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState=(props)=>{
   const initialNote=[{"title":"MyTitle","description":"This note is testing purpose","key1":"5"},
   {"title":"MyTitle","description":"This note is testing purpose","key1":"1"},
   {"title":"MyTitle","description":"This note is testing purpose","key1":"2"},
   {"title":"MyTitle","description":"This note is testing purpose","key1":"3"},
   {"title":"MyTitle","description":"This note is testing purpose","key1":"4"}
]

    const [note,setNote] = useState(initialNote);
 // Add a note
 const addNote=(title,description,tag)=>{
const note1= {"title":title,"description":description,"key1":"5"}
setNote(note.concat(note1))
 }
 // edit note
 const editNote=(id,title,description,tag)=>{
    
 }
 // delete note
 const deleteNote=(id)=>{
    const newNotes=note.filter((note2)=>{return note2.key1!==id})
    console.log(id)
    setNote(newNotes)
   }

return(
<NoteContext.Provider value={{note,addNote,editNote,deleteNote}}>
     {props.children}
</NoteContext.Provider>
)
}

export default NoteState;