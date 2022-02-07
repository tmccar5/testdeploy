export interface NotesState {
    notes: (string | String)[];
    // recVids: (String | RecVids)[];
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

interface ActionNote {
    type: "ADD_NOTE";
    payload: String
}

interface ActionRecVids {
    type: "ADD_RECOMMENDATIONS";
    payload: RecVids[];
}

type Action = ActionRecVids


export const notesReducer = (state:NotesState = initialState, action: Action) => {
    switch(action.type) {
        // case "ADD_NOTE": {
        //     return {...state, notes: [...state.notes, action.payload ] }
        // }
        case "ADD_RECOMMENDATIONS" : {
            console.log('in add recommendations reducer!!!!')
            return {...state, recVids: [...state.recVids, ...action.payload] }
            // return {...state, recVids: action.payload }
            return state
        }
        default:
            return state;
    }
}

