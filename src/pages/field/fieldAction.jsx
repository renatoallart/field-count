export function changeValue(e){
    console.log("Change Value")
    return {
        type: "VALUE_CHANGED",
        payload : e.target.value
    }
}