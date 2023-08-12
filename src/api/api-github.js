import axios from 'axios'

axios.defaults.baseURL = 'https://api.github.com'

export const api = {
  searchUsers(user) {
    return axios.get(`/search/users?q=${user}`).then(response => response.data)
  },

  listRepos(user, page) {
    if (!page) {
      page = 1
    }
    return axios.get(`/users/${user}/repos?page=${page}`).then(response => response.data)
  },

   listContent(user, repo, file = '') {
    return axios.get(`repos/${user}/${repo}/contents/${file}`).then(response => response.data)
  },
}
