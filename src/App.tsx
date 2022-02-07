import React, { useEffect } from 'react';
import './App.css';
import { NewNoteInput } from './NewNoteInput'
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './notesReducer';
import fetchRecVids from './FetchRecVids'
import { RecVids } from './notesReducer'

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes )
  const recVids = useSelector<NotesState, NotesState["recVids"]>((state) => state.recVids )

  const dispatch = useDispatch()

  const addNote = (note:String) => {
    dispatch({type: "ADD_NOTE", payload: note})
  }
  const addRecs = (recVids:RecVids[]) => {
    dispatch({type: "ADD_RECOMMENDATIONS", payload: recVids})
  }

  const getRecs = async () => {
    // const recs = await API.getRecomendations()
    // return recs
  }



  useEffect(() => {
    // const recVids = await getRecs()
    async function fetchRecs() {
      const recVids = await fetchRecVids()
      console.log('rec vids in useEffect', recVids)
      addRecs(recVids)
    }

    fetchRecs()

    
  }, [])

  console.log('recVids from redux state in app', recVids)

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
