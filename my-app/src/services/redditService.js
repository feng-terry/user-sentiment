export async function getRedditUser(username){
    //Get the authorization token
    var credentials = btoa('nHgI5ldpf_izawaAugzb9g:VvUsHAJY_BUb2ZJ9QFENyJUu_iY9Lg')
    const form = new URLSearchParams({
        grant_type: 'client_credentials',
        scope: ''
    })

    const keyRes = await fetch('https://www.reddit.com/api/v1/access_token',{
        method: 'POST',
        headers: {
            'Authorization':  `Basic ${credentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent' : 'Sentiment Analyzer V1.0'
        },
        body: form
    });
    const keyBody = await keyRes.json();
    
    if (keyRes.status !== 200) {
        throw Error(keyBody.message) 
    }

    //Fetch the user
    const response = await fetch('https://oauth.reddit.com/user/' + username + '/comments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${keyBody.access_token}`,
            'User-Agent' : 'Sentiment Analyzer V1.0',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    const body = await response.json()

    if (response.status !== 200) {
        throw Error(body.message) 
    }
    
    return body
};