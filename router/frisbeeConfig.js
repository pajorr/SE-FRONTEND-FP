import {AsyncStorage} from "react-native";

const es6promise = require('es6-promise');
es6promise.polyfill();

const Frisbee = require('frisbee');

export var userRes;
export var weatherRes;
export var reminderRes;

const api = new Frisbee({
    baseURI: 'http://178.128.62.29/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export async function HandleLogin(email, password) {
    try {
        userRes = await api.post('/auth/login', {
            body: {
                email: email,
                password: password
            }
        });

        if (userRes.err) throw userRes.err;

       // api.auth(res.body.data.token);

    } catch (err) {
        throw err;
    }
}

export async function HandleLogout() {
    try {
        await AsyncStorage.setItem('Token', '');
        await AsyncStorage.setItem('Name', '');

    } catch (err) {
        throw err;
    }
}

export async function HandleRegister(email, name, password) {
    try {
        let res = await api.post('/auth/register', {
            body: {
                email: email,
                name: name,
                password: password
            }
        });
        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function LightsOn() {
    try {
        let res = await api.post('/device/lighton', {
            body: {
                status: 'light on'
            }
        });
        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function LightsOff() {
    try {
        let res = await api.post('/device/lightoff', {
            body: {
                status: 'light off'
            }
        });
        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function TelevisionOn() {
    try {
        let res = await api.post('/device/tvon', {
            body: {
                status: 'tv on'
            }
        });
        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function TelevisionOff() {
    try {
        let res = await api.post('/device/tvoff', {
            body: {
                status: 'tv off'
            }
        });
        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function MusicPause() {
    try {
        let res = await api.get('/spotify/pause', {});

        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function MusicPlay() {
    try {
        let res = await api.get('/spotify/play', {});

        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function MusicNext() {
    try {
        let res = await api.get('/spotify/next', {});

        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function MusicPrevious() {
    try {
        let res = await api.get('/spotify/previous', {});

        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function GetTrack() {
    try {
        let res = await api.get('/spotify/gettrack', {});

        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function TrackShuffle() {
    try {
        let res = await api.put('/spotify/trackShuffle', {});

        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function TrackRepeat() {
    try {
        let res = await api.put('/spotify/trackRepeat', {});

        console.log('response', res.body);

        if (res.err) throw res.err;

    } catch (err) {
        throw err;
    }
}

export async function HandleReminder(id) {
    try {
        reminderRes = await api.get('/schedule/all', {
            body: {
                user_id : id
            }
        });
        console.log(reminderRes);

        if (reminderRes.err) throw reminderRes.err

    } catch(err){
        throw err;
    }
}

export async function HandleWeather() {
    try {
        weatherRes = await api.get('/owmapi/current-weather', {
            body: {
                city: 'jakarta'
            }
        });
        console.log(weatherRes);

        if(weatherRes.err) throw weatherRes.err
         
    } catch(err) {
        throw err;
    }
}