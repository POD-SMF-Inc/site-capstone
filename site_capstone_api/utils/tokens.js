const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config")

const generateToken = (data) => jwt.sign(data, SECRET_KEY, { expiresIn: "24h" })

const createUserJwt = (user) => {
    //Customize Payload
    const payload = {
        username: user.username,
        isAdmin: user.isAdmin || false
    }

    return generateToken(payload)
}

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    }
    catch(error)
    {
        return {}
    }
}

module.exports = {
    generateToken,
    createUserJwt,
    validateToken
}