
import { SearchInput, Button } from 'evergreen-ui'
import { useState } from 'react'
import { api } from '../api/api-github'

 export const SearchBox = ({ setUser }) =>  {
  const [input, setInput] = useState('')

  const inputSetValue = (event) => {
    setInput(event.target.value)
  }

  const callSearchUsers = async () => {
    const { items }= await api.searchUsers(input)
    if (items?.length === 1) {
      setInput('')
      setUser(items[0])
    }
  }

  return(
    <>
      <SearchInput 
        placeholder="Procure por um usuario" 
        onChange={inputSetValue} 
        value={input} 
      />
      <Button 
        marginLeft={8} 
        disabled={!(input)}
        intent="none" 
        onClick={callSearchUsers}
      >  
        pesquisar
      </Button>
    </>
  )
}

export default SearchBox