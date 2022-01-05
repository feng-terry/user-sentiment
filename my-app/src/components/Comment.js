import React, {useState,useEffect} from 'react'
import { getSentiment } from '../services/sentimentService';
import { Card, CardContent, Box, Typography, CardMedia } from '@mui/material';
import neutral from '../images/neutral.png'
import frown from '../images/frown.png'

export default function Comment (props){
    const [sentScore,setSentScore] = useState(null)
    const [sentType,setSentType] = useState(null)

    //Get date from Epoch time
    const date = new Date(0)
    date.setUTCSeconds(props.time)

    //Call sentiment API
    useEffect(() => {
        getSentiment(props.body)
            .then(response => {
                setSentScore(response.result.polarity)
                setSentType(response.result.type)
                props.handleScoreUpdate(response.result.polarity)
            })
    }, []);

    return(
        <div>
            <Card sx={{margin: 1, display: 'flex', 'align-items': 'center', 'justify-content':'space-between' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: 3/4 }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                            {props.body}
                        </Typography>
                        <Typography  variant="subtitle1" color="text.secondary" component="div">
                            {'r/' + props.subreddit + ' - ' + date.toDateString()}
                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%', 'align-items': 'center' }}>
                {sentType === 'positive'? 
                    <CardMedia
                        component="img"
                        sx={{ width: 100}}
                        image="https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"
                        alt="Smiley Face"
                    />:
                    (sentType === 'negative'?
                        <CardMedia
                            component="img"
                            sx={{ width: 125 }}
                            image={frown}
                            alt="Frown Face"
                        />:
                        <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image={neutral}
                            alt="Neutral Face"
                        />
                    )
                }
                <Typography  variant="subtitle1" color="text.secondary" component="div">
                    {sentScore}
                </Typography>
                </Box>
            </Card>
        </div>
    )

}