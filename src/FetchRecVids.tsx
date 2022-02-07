import { RecVids } from './notesReducer'

type FetchData = () => Promise<RecVids[]>

const fetchRecVids: FetchData = async () => {
    console.log('i am outside timeout!')
    return new Promise(resolve => setTimeout(function() {
        resolve([
            {id: '1', url: 'https://www.youtube.com/embed/HNSaXAe8tyg'},
            {id: '2', url: 'https://www.youtube.com/embed/-X84GG06g-c'},
            {id: '3', url: 'https://www.youtube.com/embed/V5TdEszM1u0'} ,
            {id: '4', url: 'https://www.youtube.com/embed/5rcCiXqAShY'} ,
            {id: '5', url: 'https://www.youtube.com/embed/k9rRTHQNxtQ'} ,
            {id: '6', url: 'https://www.youtube.com/embed/mv_Q3Lzz3vg'} 
        ])
    }, 5000));
  }


export default fetchRecVids;