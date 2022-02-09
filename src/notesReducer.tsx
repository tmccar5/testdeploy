export interface AppState {
    recVids: RecVids[];
}

export interface RecVids {
    id: string,
    url: string
}

const initialState: AppState = {
    recVids: []
}

interface ActionRecVids {
    type: "ADD_RECOMMENDATIONS";
    payload: RecVids[];
}

type Action = ActionRecVids

export const notesReducer = (state:AppState = initialState, action: Action) => {
    switch(action.type) {
        case "ADD_RECOMMENDATIONS" : {
            console.log('in add recommendations reducer!!!!', action.payload)
            return {...state, recVids: [...state.recVids, ...action.payload] }
        }
        default:
            return state;
    }
}

