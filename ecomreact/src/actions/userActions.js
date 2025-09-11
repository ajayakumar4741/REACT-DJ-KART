import axios from 'axios'
import * as userConstants from '../constants/userConstants'

export const register = (fname, lname, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: userConstants.USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/register',
            {
                fname: fname,
                lname: lname,
                email: email,
                password: password
            },config
        )

        dispatch({
            type: userConstants.USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }

    catch (error) {
        dispatch({
            type: userConstants.USER_REGISTER_FAIL,
            payload: error?.response?.data?.detail || error.message,
        })
    }
}


export const login = (fname, password) => async (dispatch) => {
    try {
        dispatch({
            type: userConstants.USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/users/login/',
            {
                username: fname,
                password: password
            },config
        )

        dispatch({
            type: userConstants.USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    }

    catch (error) {
        dispatch({
            type: userConstants.USER_LOGIN_FAILED,
            payload: error?.response?.data?.detail || error.message,
        })
    }
}