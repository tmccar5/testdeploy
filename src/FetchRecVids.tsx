import { RecVids } from './notesReducer'

type FetchData = () => Promise<RecVids[]>

const fetchRecVids: FetchData = async () => {
    console.log('i am outside timeout!')
    return new Promise(resolve => setTimeout(function() {
        resolve([
            {id: '1', url: 'www.h1.com'},
            {id: '2', url: 'www.h2.com'} 
        ])
    }, 1000));
  }


export default fetchRecVids;