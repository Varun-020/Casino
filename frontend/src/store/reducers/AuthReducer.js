import { jwtDecode } from 'jwt-decode';

import {
    LOGIN_USER_LOADING, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, SET_TOKEN,
    LOGOUT_USER_LOADING, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR,
    CREATE_USER_LOADING, CREATE_USER_SUCCESS, CREATE_USER_ERROR
} from '../types/AuthTypes';

const initState = {
    user: {},
    token: '',
    createUserLoader: false,
    createUserMessage: '',
    createUserStatus: '',
    createUserErrors: [],

    userLoginLoader: false,
    userLoginMessage: '',
    userLoginStatus: '',
    userLoginErrors: [],

    userLogoutLoader: false,
    userLogoutMessage: '',
    userLogoutStatus: '',
    userLogoutErrors: [],
    userRedirect: false

};
const verifyToken = (token) => {
    const decodeToken = jwtDecode(token);
    const expiresIn = new Date(decodeToken.exp * 1000);
    if (new Date() > expiresIn) {
        localStorage.removeItem('myToken');
        return null;
    } else {
        return decodeToken;
    }
};
const token = localStorage.getItem('myToken');
if (token) {
    const decoded = verifyToken(token);
    if (decoded) {
        initState.token = token;
        const { user } = decoded;
        initState.user = user;
    }
}

const AuthReducer = (state = initState, action) => {
    if (action.type === CREATE_USER_LOADING) {
        return { ...state, createUserLoader: true };
    } else if (action.type === CREATE_USER_SUCCESS) {
        return {
            ...state,
            createUserLoader: false,
            createUserErrors: [],
            createUserStatus: 'success',
            createUserMessage: action.payload.msg,
            userRedirect: true
        };
    } else if (action.type === CREATE_USER_ERROR) {
        return {
            ...state,
            createUserLoader: false,
            createUserErrors: action.payload
        };
    }
    else if (action.type === LOGIN_USER_LOADING) {
        return { ...state, userLoginLoader: true };
    } else if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            userLoginLoader: false,
            userLoginErrors: [],
            userLoginStatus: 'success',
            userLoginMessage: action.payload.msg,
            userRedirect: true
        };
    } else if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            userLoginLoader: false,
            userLoginErrors: action.payload
        };
    }
    else if (action.type === LOGOUT_USER_LOADING) {
        return { ...state, userLogoutLoader: true };
    } else if (action.type === LOGOUT_USER_SUCCESS) {
        return {
            ...state,
            userLogoutLoader: false,
            userLogoutErrors: [],
            userLogoutStatus: 'success',
            userLogoutMessage: action.payload.msg,
            userRedirect: true,
            user: {},
            token: ''
        };
    } else if (action.type === LOGOUT_USER_ERROR) {
        return {
            ...state,
            userLogoutLoader: false,
            userLogoutErrors: action.payload
        };
    }
    else if (action.type === SET_TOKEN) {
        const decoded = verifyToken(action.payload);
        const { user } = decoded;
        return {
            ...state,
            token: action.payload,
            user: user,
            userLoginErrors: [],
        };
    } else {
        return state;
    }
};
export default AuthReducer;