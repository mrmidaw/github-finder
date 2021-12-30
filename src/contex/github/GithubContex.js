import { createContext } from "react";
import { useReducer } from "react";
import githubReducer from './GithubReducer';

const GithubContex = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState);

    // Get initial users(test)
    const fetchUsers = async () => {

        setLoading();

        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        })

        const data = await response.json();

        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    // Set Loading 
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING'
        })
    }


    return <GithubContex.Provider value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
    }}>
        {children}
    </GithubContex.Provider>
};

export default GithubContex;