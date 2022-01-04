export async function getRedditUser(){
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
    console.log(keyBody)
};