const ed25519 = require('../jwt-ed25519')

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