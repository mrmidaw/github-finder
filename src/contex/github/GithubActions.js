import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const githubRequest = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

// Get search result
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    });

    const response = await githubRequest.get(`/search/users?${params}`);
    return response.data.items;
};

// Get user and repos
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    });

    const [user, repos] = await Promise.all([
        githubRequest.get(`/users/${login}`),
        githubRequest.get(`/users/${login}/repos?${params}`)
    ]);

    return {
        user: user.data,
        repos: repos.data
    }
};