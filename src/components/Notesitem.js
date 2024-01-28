import React ,{useContext} from 'react'
import Notecontext from '../context/notes/noteContext'
const Notesitem = (props) => {
    const {title,description,key1}=props.note;
    const context=useContext(Notecontext)
    
    const {deleteNote}=context;
   
   
  return (
    
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">{title} <span><i className="fa-regular fa-trash-can mx-2" onClick={()=>{ deleteNote(key1)}}></i><i className="fa-solid fa-pen-to-square"></i></span></h5>
    
    
    <p className="card-text">{description}</p>
    <p className="card-text">{key1}</p>
  </div>
</div>


    
   
  )
}

export default Notesitem
