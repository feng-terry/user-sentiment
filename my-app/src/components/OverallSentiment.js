import React, {useState, useEffect} from 'react'
import { Typography, CardMedia, Box, Card } from '@mui/material'
import neutral from '../images/neutral.png'
import frown from '../images/frown.png'

export default function OverallSentiment (props){
    const [value, setValue] = useState(0)
    const [type, setType] = useState(null)

    useEffect(() => {
        setValue(props.overallComments? props.overallScore/props.overallComments: 0)
        if (value === 0){
            setType('neutral')
        } else{
            setType(value>0? 'positive':'negative')
        }
    },[props.overallScore,props.overallComments])
    return(
        <div>
             <Box sx={{ display: 'flex', flexDirection: 'column', 'align-items': 'center' }}>
             <Card sx={{margin: 1, flexDirection: 'column', display: 'flex', 'align-items': 'center', 'justify-content':'space-between' }}>
            {type === 'positive'? 
                    <CardMedia
                        component="img"
                        sx={{ width: 175}}
                        image="https://upload.wikimedia.org/wikipedia/commons/5/50/Smile_Image.png"
                        alt="Smiley Face"
                    />:
                    (type === 'negative'?
                        <CardMedia
                            component="img"
                            sx={{ width: 200 }}
                            image={frown}
                            alt="Frown Face"
                        />:
                        <CardMedia
                            component="img"
                            sx={{ width: 175 }}
                            image={neutral}
                            alt="Neutral Face"
                        />
                    )
                }
            <Typography component="div" variant="h5" sx={{'margin-left': 10, 'margin-right': 10 }}>
                Overall Sentiment
            </Typography>
            <Typography component="div" variant="h6">
                Polarity: {value.toFixed(4)}
            </Typography>
            </Card>
            </Box>
        </div>
    )
}