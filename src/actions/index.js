import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signin = (data, callback) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:3000/api/signin', data)

        dispatch({ type: AUTH_USER, payload: response.data.token })
        localStorage.setItem('token', response.data.token)
        callback()
    } catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'Invalid login credetials' })
    }
}

export const authenticateUser = (token, callback) => async dispatch => {
    try{
        const response = await axios.post('http://localhost:3000/api/authenticate', token)
        dispatch({ type: AUTH_USER, payload: token })
        callback()
    }catch(e) {
        dispatch({ type: AUTH_ERROR, payload: 'You do not have permission to access this resource'})
    }
}

export const signout = () => {
    localStorage.removeItem('token')

    return {
        type: AUTH_USER,
        payload: ''
    }
}