import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import productsService from "../../../Services/ProductsService";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList(): JSX.Element {

    useTitle("Products");

    const allProducts = useSelector((appState: AppState) => appState.products);

    useEffect(() => {
        productsService.getAllProducts().catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductList">

            {allProducts.length === 0 && <Spinner />}

            {/* Sending data to props: */}
            {allProducts.map(p => <ProductCard key={p.id} product={p} />)}

        </div>
    );
}

export default ProductList;
