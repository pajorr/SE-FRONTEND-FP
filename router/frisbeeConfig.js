const es6promise = require('es6-promise');
es6promise.polyfill();

const Frisbee = require('frisbee');

const api = new Frisbee({
    baseURI: 'http://root@128.199.213.48/api/auth',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

(async () => {
    try {
        let res = await api.post('/login', {
            body: {
                email: 'dylan@gmail.com',
                password: 'rahasia'
            }
        });

        console.log('response', res.body);

        if (res.err) throw res.err;

        api.auth(res.body.data.token);

    } catch (err) {
        throw err;
    }
})();