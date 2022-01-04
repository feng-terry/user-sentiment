import React,{useState} from 'react'
import { getRedditUser } from '../services/redditService'

export default function UserInput (props){
    const [username, setUsername] = useState('')

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        getRedditUser()
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input
                type = 'text'
                placeholder = 'user'
                onChange = {handleUsernameChange}
                value = {username}
            />
            <button>
                Search
            </button>
        </form>
    )
}
