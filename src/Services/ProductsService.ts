import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";
import { appStore } from "../Redux/AppState";
import { productActions } from "../Redux/ProductsSlice";

// npm i axios

class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]> {
        let products = appStore.getState().products;
        if (products.length === 0) {
            const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
            products = response.data;
            appStore.dispatch(productActions.setAll(products));
        }
        return products;
    }

    public async getOneProducts(id: number): Promise<ProductModel> {
        const products = appStore.getState().products;
        let product = products.find(p => p.id === id);
        if (!product) {
            const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
            product = response.data;
        }
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "content-Type": "multipart/form-data" } };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const addedProduct = response.data;
        appStore.dispatch(productActions.addOne(addedProduct));
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
        appStore.dispatch(productActions.deleteOne(id));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "content-Type": "multipart/form-data" } };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const updatedProduct = response.data;
        appStore.dispatch(productActions.updateOne(updatedProduct));
    }

    public async getTop3Products(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsTop3Url);
        const products = response.data;
        return products;
    }
}

const productsService = new ProductsService();

export default productsService;
