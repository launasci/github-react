
import { SearchInput, Button } from 'evergreen-ui'
import { useState } from 'react'
import { api } from '../api/api-github'

 const SearchBox = () =>  {
  const [input, setInput] = useState('')

  const inputSetValue = (event) => {
    setInput(event.target.value)
  }
  const callSearchUsers = async () => {
     const data = await api.searchUsers(input)
     return data
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