import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import useTitle from "../../../Utils/UseTitle";

function ProductList(): JSX.Element {

    useTitle("Products");
    
    const [allProducts, setAllProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(products => setAllProducts(products))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductList">

            {/* Sending data to props: */}
            {allProducts.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}

export default ProductList;
