const INITIAL_STATE = { value : "test"}

export default function(state = INITIAL_STATE,action){
    switch (action.type) {
        case "VALUE_CHANGED":
            
            return { ...state, value : action.payload}
    
        default:
            return state
    }
}
