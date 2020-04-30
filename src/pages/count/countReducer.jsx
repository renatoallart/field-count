const INITIAL_STATE = { number : 0}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case "INC":
            return {...state, number : state.number + 10}
        case "DEC":
            return {...state, number : state.number - 10}
        
        default:
            return state
    }
}