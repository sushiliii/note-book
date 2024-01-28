import React ,{useContext,useState}  from 'react'
import Notecontext from '../context/notes/noteContext'

const AddNotes = () => {
    const context=useContext(Notecontext)
    const [note, setNote] = useState({"title":"","description":"","tag":""})
    const {addNote}=context;
const handleOnclick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag)
}
const onChange=(e)=>{
   
    setNote({...note,[e.target.name]:e.target.value})
}

  return (
    <div className='container my-3'>
    <h1>Add a Note  </h1>
    <form>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" name="title"   onChange={onChange}/>
  {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
</div>
<div className="mb-2">
  <label htmlFor="description" className="form-label">Description</label>
  <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
</div>
{/* <div className="mb-1 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>*/}
<button type="submit" className="btn btn-primary" onClick={handleOnclick}>Submit</button> 
</form>
  </div>
  )
}

export default AddNotes
