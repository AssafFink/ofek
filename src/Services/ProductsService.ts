import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";

// npm i axios

class ProductsService {

    public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        return products;
    }

    public async getOneProducts(id: number): Promise<ProductModel> {
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id)
        const product = response.data;
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "content-Type": "multipart/form-data" } };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const addedProduct = response.data;
        // addedProduct --> הכנה למשהו מגניב
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "content-Type": "multipart/form-data" } };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const updatedProduct = response.data;
        // updatedProduct --> הכנה למשהו מגניב
    }

}

const productsService = new ProductsService();

export default productsService;
