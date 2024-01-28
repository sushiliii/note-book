import React  from 'react'
import Notes from './Notes'
import AddNotes from './AddNotes'



const Home = () => {
 
  return (
    <>
    <AddNotes/>
    <div className='container'>
    <Notes></Notes>
    </div>
    </>
  )
}

export default Home
