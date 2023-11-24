import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../actions/types";
  
    const initialState = {
    user: {
        id: null,
        firstname: null,
        lastname: null,
        email: null,
        role: null,
        current_password: null,
        active: null,
        avatar: null,
    },
    access: null,
    isAuthenticated: null,
    };

    const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        return {
            ...state,
            user: action.payload.user,
            access: null,
            isAuthenticated: false,
        };
        case REGISTER_FAIL:
        return {
            ...state,
            user: initialState.user,
            access: null,
            isAuthenticated: false,
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            user: action.payload.user,
            access: action.payload.access,
            isAuthenticated: true,
        };
        case LOGIN_FAIL:
        return {
            ...state,
            user: initialState.user,
            access: null,
            isAuthenticated: false,
        };
        case LOGOUT_SUCCESS:
        return {
            ...state,
            user: initialState.user,
            access: null,
            isAuthenticated: false,
        };
        default:
        return state;
    }
    };
  
export default authReducer;