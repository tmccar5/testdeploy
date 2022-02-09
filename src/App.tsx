import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from './notesReducer';
import fetchRecVids from './FetchRecVids'
import { RecVids } from './notesReducer'
import { VideoList } from './VideoList'
import { randomRecData } from './utils/randomRecData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const recVids = useSelector<AppState, AppState["recVids"]>((state) => state.recVids )

  const dispatch = useDispatch()

  const addRecs = (recVids:RecVids[]) => {
    dispatch({type: "ADD_RECOMMENDATIONS", payload: recVids})
  }

  useEffect(() => {
    async function fetchRecs() {
      const recVids = await fetchRecVids()
      console.log('rec vids in useEffect', recVids)
      addRecs(recVids)
    }

    fetchRecs()
  }, [])

  let displayVids = recVids
  if(displayVids.length < 1) {
    displayVids = randomRecData;
  }

  console.log('i am display vids', displayVids )
  return (
    <div className='App'> 
      <ul>
        <li></li>
      </ul>
      <VideoList deviceType={'mobile'} recVids={displayVids}/>
    </div>
  );
}

export default App;
