import {SET_LANGUAGE_NAME} from './action'

const initialState ={
    languageName : 'English',
}



const elsplReducer = (state = initialState, action) => {
        switch (action.type) {
            case SET_LANGUAGE_NAME:
                return {...state, languageName: action.payload};
            default:
                return state;
        }
}

export default elsplReducer;