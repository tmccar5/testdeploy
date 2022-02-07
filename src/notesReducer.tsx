export interface NotesState {
    notes: (string | String)[];
    recVids: RecVids[];
}

export interface RecVids {
    id: string,
    url: string
}

const initialState: NotesState = {
    notes: [],
    recVids: []
}

interface ActionRecVids {
    type: "ADD_RECOMMENDATIONS";
    payload: RecVids[];
}

type Action = ActionRecVids


export const notesReducer = (state:NotesState = initialState, action: Action) => {
    switch(action.type) {
     
        case "ADD_RECOMMENDATIONS" : {
            console.log('in add recommendations reducer!!!!')
            return {...state, recVids: [...state.recVids, ...action.payload] }
        }
        default:
            return state;
    }
}

