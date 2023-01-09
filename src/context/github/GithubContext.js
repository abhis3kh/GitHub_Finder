import { createContext, useState } from 'react';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_END_POINT;
const GITHUB_TOKEN = process.env.REACT_APP_API_TOKEN;

export const GitHubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  //Function to fetch all users (for initial loads testing)
  // const fetchUsers = async () => {
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   // setting the data from API to state variable
  //   setUsers(data);
  //   setLoading(false);
  // };
  const searchUsers = async (text) => {
    setLoading(true);
    const response = await fetch(`${GITHUB_URL}/search/users?q=${text}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();
    // setting the data from API to state variable
    setUsers(items);
    setLoading(false);
  };
  // search single User
  const searchUser = async (loginName) => {
    setLoading(true);
    const response = await fetch(`${GITHUB_URL}/users/${loginName}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const data = await response.json();
      // setting the data from API to state variable
      setUser(data);
      setLoading(false);
    }
  };
  // get the user repos
  const getUserRepos = async (userName) => {
    setLoading(true);
    const params = new URLSearchParams({
      sort: 'updated',
      per_page: 10,
    });
    const response = await fetch(
      `${GITHUB_URL}/users/${userName}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    // setting the data from API to state variable
    setRepos(data);
    setLoading(false);
  };
  return (
    <GithubContext.Provider
      value={{
        users,
        loading,
        searchUsers,
        setUsers,
        searchUser,
        user,
        repos,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
