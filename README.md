# jwt-ed25519
Signs a JWT using Edwards-curve Ed25519

## Installation
~~~
npm install jwt-ed25519
~~~

## Test
~~~
npm test
~~~

## Documentation
~~~ javascript
jwt-ed25519(jwtHeader, jwtPayload, privateKey)
~~~
  * jwtHeader `JWT header (object or string)`
  * jwtPayload `JWT payload (object or string)`
  * privateKey `Private Key (in UTF-8) which is going to be used to sign the JWT with Ed25519`
  
## Usage
~~~ javascript
const ed25519 = require('../ed25519')

const jwtHeader = {
    alg: 'EdDSA',
    typ: 'JWT'
}

const jwtPayload = {
    sub: 'user1',
    iss: 'issuer1'
}

const signedJwt =
    ed25519(jwtHeader, jwtPayload, 'nWyompky-XcqmHoAzUROiGB6o7u2DilwrFy23C8coYM')

console.log('JWT signed with ed25519: ' + signedJwt)
~~~

This will print the following
~~~
JWT signed with ed25519: eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMSIsImlzcyI6Imlzc3VlcjEifQ.I9jOjFBpKAHzIwyAAOVTioi4YIEw3RIBAGNpW46ghI7pd5ssflWn1cXc62d-eX70Vk2hr33JoxWG9CWsG1e8BQ
~~~

## License
~~~
MIT
~~~