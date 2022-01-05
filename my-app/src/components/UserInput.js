import React,{useState} from 'react'
import { getRedditUser } from '../services/redditService'
import { Button, TextField } from '@mui/material'

export default function UserInput (props){
    const [username, setUsername] = useState('')

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        props.setUserComments(0)
        props.setOverallScore(0)
        getRedditUser(username)
            .then(response => props.setUserComments(response))
            .catch(err => props.setUserComments(null))
    }

    return(
        <form onSubmit = {handleSubmit}>
            <TextField
                variant="outlined"
                size = 'small'
                type = 'text'
                placeholder = 'User'
                onChange = {handleUsernameChange}
                value = {username}
            />
            <Button variant = 'contained' type = 'submit'>
                Search
            </Button>
        </form>
    )
}
