

const baseApi='http://127.0.0.1:8000/api';

//userLogin Apis
export const loginApi =`${baseApi}/login`;
export const logoutApi =`${baseApi}/logout`;
export const registerApi =baseApi+'/register';

//Products Apis
export const getAllProductsApi =`${baseApi}/products`;

// Reviews Api 
export const getReviewsApi =baseApi+'/reviews/get-reviews';//add productId
export const storeReviewsApi =baseApi+'/reviews/store';

// Carts APi
export const storeCartApi =baseApi+'/cart/store-cart';
export const getUserCartApi =baseApi+'/cart/store-cart';//add userId
export const deleteCartApi = baseApi+'/cart/delete-cart';//add id
//UserOrderHistory Api
export const storeOrderHistoryApi =baseApi+'/cart/store-order';
export const getOrderHistoryApi =baseApi+'/cart/get-order-history';//add userId

export const sentEmailApi = baseApi+'/send-email';


