import './App.css';
import React, {useState} from 'react'
import UserInput from './components/UserInput'
import CommentList from './components/CommentList';
import OverallSentiment from './components/OverallSentiment';
import { Typography } from '@mui/material'

function App() {
  const [userComments, setUserComments] = useState(null);
  const [overallScore, setOverallScore] = useState(0);
  const [overallComments, setOverallComments] = useState(0);

  return (
    <div className="App">
      <Typography component="div" variant="h2">
        Sentiment Analyzer for Reddit
      </Typography>
      <OverallSentiment overallScore = {overallScore} overallComments = {overallComments}/>
      <UserInput setUserComments = {setUserComments} setOverallScore = {setOverallScore} setOverallComments = {setOverallComments}/>
      {userComments? 
        <CommentList 
          userComments = {userComments}
          overallScore = {overallScore} 
          setOverallScore = {setOverallScore}
          setOverallComments = {setOverallComments}
        />
        :'Please specify a valid Reddit user'}
    </div>
  );
}

export default App;
