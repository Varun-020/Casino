import axios from 'axios';

import {
    LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, SET_TOKEN,
    LOGOUT_USER_LOADING, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR,
    CREATE_USER_LOADING, CREATE_USER_SUCCESS, CREATE_USER_ERROR
} from '../types/AuthTypes'

export const createUser = (state) => {
    return async (dispatch, getState) => {
        const user = getState().AuthReducer.user
        state.id = user.id
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: CREATE_USER_LOADING });
        try {
            const response = await axios.post('/user/create', state, config);
            dispatch({ type: CREATE_USER_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: CREATE_USER_ERROR, payload: error.response.data.errors });
            console.log(error)
        }
    };
};

export const userLogin = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        dispatch({ type: LOGIN_USER_LOADING });
        try {
            const response = await axios.post('/user/login', state, config);
            localStorage.setItem('myToken', response.data.token);
            dispatch({ type: SET_TOKEN, payload: response.data.token });
            dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: LOGIN_USER_ERROR, payload: error.response.data.errors });
            console.log(error)
        }
    };
};

export const logout = (state) => {
    return async (dispatch) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        dispatch({ type: LOGOUT_USER_LOADING });
        try {
            dispatch({ type: LOGOUT_USER_LOADING })
            const { data } = await axios.post('/user/logout', state, config);
            if (data && data.msg) {
                dispatch({ type: LOGOUT_USER_SUCCESS, payload: data.msg });
            }
            localStorage.removeItem('myToken');
        }
        catch (error) {
            console.log(error.response.data.errors);
            dispatch({ type: LOGOUT_USER_ERROR, payload: error.response.data.errors });
        }
    }
};