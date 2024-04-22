// reduxUtils.js

import { useAppDispatch, useAppSelector } from "../store/hooks";


export const useCustomRedux = () => {
    const dispatch = useAppDispatch();
    const currentSelectedProduct = useAppSelector(state => state.products.selectedProduct);
    const userData = useAppSelector(state => state.auth.userData);

    return { dispatch, currentSelectedProduct, userData };
};
