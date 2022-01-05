export async function getSentiment(text){
    const response = await fetch('https://sentim-api.herokuapp.com/api/v1/', {
        method: 'POST',
        headers: {
            'Accept': `application/json`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'text': text
        })
    })
    const body = await response.json()

    if (response.status !== 200) {
        throw Error(body.message) 
    }
    
    return body
};