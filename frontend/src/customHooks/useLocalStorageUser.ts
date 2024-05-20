import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/authSlice";

export const useLocalStorageUser = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const savedState = localStorage.getItem('auth');
        const state = savedState ? JSON.parse(savedState) : null;
        
        if (state && state.token) {
            dispatch(login({ token: state.token, userData: state.userData }));
        }
    }, [dispatch]);
};
