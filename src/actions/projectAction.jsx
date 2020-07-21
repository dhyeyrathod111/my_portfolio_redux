import config from 'react-global-configuration';
export const initialLoadProjct = () => {
    return async dispatch => {
        const response_promiss = await fetch(`${config.get('api_url')}/all_project`);
        const response = await response_promiss.json();
        dispatch({
            type: 'INITIAL_LOAD_PROJECTS', payload: response.projects
        })
    }
}