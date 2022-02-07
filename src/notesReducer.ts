export interface NotesState {
    notes: (string | String)[];
    recVids: String[];
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
    payload: String;
}

type Action = ActionRecVids


export const notesReducer = (state:NotesState = initialState, action: Action) => {
    switch(action.type) {
        // case "ADD_NOTE": {
        //     return {...state, notes: [...state.notes, action.payload ] }
        // }
        case "ADD_RECOMMENDATIONS" : {
            return {...state, recVids: [...state.recVids, action.payload] }
            // return state
        }
        default:
            return state;
    }
}

