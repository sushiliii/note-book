import React ,{useContext}  from 'react'
import Notecontext from '../context/notes/noteContext'
import Notesitem from './Notesitem';


const Notes = () => {
    const context=useContext(Notecontext)
    const {note,setNote}=context;
  return (
    <div>
      <h1> Your note book   </h1>
     
      <div className='row'>
      {
        note.map((noteelement)=>{
         return(
            <div className='col-md-4 my-3' key={noteelement.key1} >   
            <Notesitem note={noteelement}/>
            </div>
         )
        }

        )
      }
      </div>

      
      
    </div>
  )
}

export default Notes
