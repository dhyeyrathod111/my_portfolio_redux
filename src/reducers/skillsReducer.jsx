const iState = {
    allskills: [],
    loader: true
}
const skillReducer = (state = iState, action) => {
    if (action.type === "INITIAL_LOAD_SKILLS") {
        return {
            allskills: action.payload, loader: false
        }
    } else {
        return state;
    }
}
export default skillReducer;