module.exports = (jwtHeader, jwtPayload, privateKey) => {
    const base64url = require('base64url')
    const ed25519 = require('ed25519')
    const privateKeySignature = ed25519.MakeKeypair(Buffer.from(privateKey, 'base64'))

    const jwtBody = base64url.encode(JSON.stringify(jwtHeader)) + '.' + base64url.encode(JSON.stringify(jwtPayload))
    const jwtSignature = ed25519.Sign(Buffer.from(jwtBody), privateKeySignature)

    const signedJwt = jwtBody + '.' + base64url.encode(jwtSignature)

    return signedJwt
}