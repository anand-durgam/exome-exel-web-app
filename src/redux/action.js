export const SET_LANGUAGE_NAME ='SET_LANGUAGE_NAME';

export const setLanguageName = languageName => dispatch => {
    dispatch({
        type: SET_LANGUAGE_NAME,
        payload: languageName,
    })
}
