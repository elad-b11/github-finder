import { 
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

const actions = (state, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case SEARCH_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case CLEAR_USERS:
            return {...state, users:[], loading: false};
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default actions;