import fetch from 'node-fetch';

async function asyncCall() {
    
    console.log('calling...');

    let ids = [116,218,222,227,228,229,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250];


    let i=0, list = [], all = [];
    for (let j=0; j<ids.length; j++) {
        if (i === 10) {
            all.push(list)
            list = []
            i = 0;
            list.push({sort_order: 100, id: ids[j]})
        } else {
            list.push({sort_order: 100, id: ids[j]})
        }
        i++;
    }

    list.length && all.push(list)

    let url = 'https://api.xxxxxx';
    for (let shot of all) {
        let options = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-Auth-Token': 'xxxxxxxx'
            },
            body: JSON.stringify(shot)
        };

        await fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json.data.map(it => it.id).join(',')))
            .catch(err => console.error('error:' + err));

    }
    
    console.log('end call...');
}

asyncCall()