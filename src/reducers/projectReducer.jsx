const iState = {
    allProjects: [],
    loader: true
}

const ProjectReducer = (state = iState, action) => {
    if (action.type === 'INITIAL_LOAD_PROJECTS') {
        return {
            ...state,
            allProjects: action.payload,loader: false
        }
    } else {
        return state;
    }
}
export default ProjectReducer;