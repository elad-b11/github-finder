import React, {useReducer} from "react";
import axios from "axios";
import GithubContext from "./githubcontext";
import GithubReducer from './githubReducer';
import { 
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';
import githubContext from "./githubcontext";

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    const setLoading = (payload) => dispatch({type: SET_LOADING, payload });

    const searchUsers = async (text) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&clinet_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
                                      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
         
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    
    const clearUsers = () => {
        dispatch({type: CLEAR_USERS});
    }

    const getUser = async (username) => {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${username}?clinet_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
                                      &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({type: GET_USER, payload: res.data});
      }

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers
    }}>{props.children}</GithubContext.Provider>
}

export default GithubState
