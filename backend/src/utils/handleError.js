import { Response } from "express"


/**
 * 
 * @param { Response } res 
 * @param { Error } err 
 * @param { String } message 
 */
const handleError = (res, err, message) => {
  res.status(404).json({error: `${message}\n${err}`})
}

export default handleError;