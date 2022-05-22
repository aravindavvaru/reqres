// test.js
const pactum = require('pactum');

describe('App', () => {

    it('GET /users', async() => {
        await pactum.spec()
            .get('https://reqres.in/api/users')
            .expectStatus(200)
    });

});