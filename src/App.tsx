import React, { useEffect } from 'react';
import './App.css';
import { NewNoteInput } from './NewNoteInput'
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './notesReducer';
import API from './Api'

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes )
  const recVids = useSelector<NotesState, NotesState["recVids"]>((state) => state.recVids )
  
  const dispatch = useDispatch()

  const addNote = (note:String) => {
    dispatch({type: "ADD_NOTE", payload: note})
  }
  const getRecs = async () => {
    // const recs = await API.getRecomendations()
    // return recs
  }



  useEffect(() => {
    // const recVids = await getRecs()
    async function fetchRecs() {
      const recVids = await API.getRecomendations()
      console.log('rec vids in useEffect', recVids)
    }

    fetchRecs()

    
  }, [])

  return (
    <> 
      <NewNoteInput addNote={addNote} />
      <ul>
        {notes.map((note) => {
         return <li >{note}</li>
        })}
        <li> Some notes</li>
      </ul>
    </>
  );
}

export default App;
