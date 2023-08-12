import { useEffect, useState } from 'react'
import { api } from "./api/api-github"
import ProfileAvatar from "./components/ProfileAvatar"
import SearchBox from "./components/SearchBox"
import ListRepos from './components/list-repos/ListRepos'

function App() {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])

  const getRepos = async (user) => {
    try {
      const repos = await api.listRepos(user.login)
      if (repos) {
        setRepos(repos)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!user) return
    getRepos(user)
  }, [user])

  return (
    <>
      {user && <ProfileAvatar user={user}/>}
      <SearchBox setUser={setUser} />
      {repos.length ? <ListRepos repos={repos} /> : null}
    </>
  )
}

export default App
