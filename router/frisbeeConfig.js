import {AsyncStorage} from "react-native";

const es6promise = require('es6-promise');
es6promise.polyfill();

const Frisbee = require('frisbee');

export var weatherStatus;

const api = new Frisbee({
    baseURI: 'http://178.128.62.29/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export async function HandleLogin(email, password) {
    try {
        console.log('starting login');
        let res = await api.post('/auth/login', {
            body: {
                email: email,
                password: password
            }
        });
        console.log('response', res.body);
       // await AsyncStorage.setItem('Token', res.body)

        if (res.err) throw res.err;

       // api.auth(res.body.data.token);

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

export async function HandleWeather() {
    try {
        let res = await api.post('/owmapi/current-weather', {
            body: {
                city: 'jakarta'
            }
        });
        console.log('response', res.body);
        weatherStatus = res.body;

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