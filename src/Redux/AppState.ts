import ProductModel from "../Models/ProductModel";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductsSlice";
import UserModel from "../Models/UserModel";
import { authReducer } from "./AuthSlice";

export type AppState = {
    products: ProductModel[];
    user: UserModel;
};

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer,
        user: authReducer
    }
});
