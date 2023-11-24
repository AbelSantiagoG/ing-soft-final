import{
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types"

import {Auth} from "../api/auth";

const authController = new Auth();

export const register = (data) =>{
    return async (dispatch) => {
        try {
            const result = await authController.register(data);
            console.log("result", result);
            if (result) {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: result,
                });
            } else {
                dispatch({
                    type: REGISTER_FAIL,
                });
            }
            } catch (error) {
                console.log("error", error);
                dispatch({
                    type: REGISTER_FAIL,
                });
        }
    }
}

export const login = (data) => {
    console.log("data", data);
    return async (dispatch) => {
        try {
            const result = await authController.login(data);
            console.log("result", result);
            if (result & result.access) {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: result,
            });
            } else {
            dispatch({
                type: LOGIN_FAIL,
            });
            }
        } catch (error) {
            console.log("error", error);
            dispatch({
            type: LOGIN_FAIL,
            });
        }
    };
}

export const logout = () =>{
    authController.logout();
    dispatch({
        type: LOGOUT_SUCCESS,
    });
};