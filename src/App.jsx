import { useState } from 'react'
import ProfileAvatar from "./components/ProfileAvatar"
import SearchBox from "./components/SearchBox"

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      {user && <ProfileAvatar user={user}/>}
      <SearchBox setUser={setUser}/> 
    </>
  )
}

export default App
