import config from 'react-global-configuration';

export const initialLoadSkill = () => {
    return async dispatch => {
        const response_promiss = await fetch(`${config.get('api_url')}/all_skill/6`);
        const response = await response_promiss.json();
        dispatch({
            type: 'INITIAL_LOAD_SKILLS', payload: response.skills
        })
    }
}