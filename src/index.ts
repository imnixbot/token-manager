import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const verifyCredientials = async (password: string, userPassword: string) => {
    let compareResult = false
    try {
        compareResult = await bcrypt.compare(password, userPassword)
    } catch (error) {
        // Log error
    }
    return compareResult
}

export const getPasswordHash = async (password: string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export const verifyAndDecodeToken = (token: string, SECTRET: string) => {
    let decodedToken
    try {
        decodedToken = jwt.verify(token, SECTRET)
    } catch (error) {
        return null
    }
    return decodedToken
}

export const generateToekn = (SECTRET: string, payload: object, config = {
    expiresIn: '1h',
}) => {
    return jwt.sign(payload, SECTRET, config)
}
