import React, {useEffect} from 'react'
import Comment from './Comment'
import { Container } from '@mui/material'

export default function CommentList (props){
    const commentElems = props.userComments.data.children //This is a list

    useEffect(() => {
        props.setOverallComments(commentElems.length)
    }, [])

    function handleScoreUpdate(newScore){
        props.setOverallScore(prevScore => (prevScore + newScore))
    }
    
    const commentComponents = commentElems.map(child => 
        <Comment 
            body = {child.data.body} 
            time = {child.data.created_utc} 
            subreddit = {child.data.subreddit}
            key = {child.data.permalink}
            handleScoreUpdate = {handleScoreUpdate}
        />
    )
    return(
        <div>
            <Container maxWidth="sm" sx={{display:'flex', flexDirection: 'column', 'align-items':'stretch'}}>
                {commentComponents}
            </Container>
            
        </div>
    )
}