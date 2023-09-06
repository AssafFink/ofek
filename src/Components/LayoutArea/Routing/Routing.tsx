import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";
import "./Routing.css";
import Spinner from "../../SharedArea/Spinner/Spinner";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing(): JSX.Element {

    function delay() {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    }

    const LazyAbout = lazy(async () => {
        await delay();
        return import("../../AboutArea/About/About")
    });

    return (
        <div className="Routing">
            <Routes>

                {/* Eager Loading */}
                <Route path="/home" element={<Home />} />

                <Route path="/products" element={<ProductList />} />

                <Route path="/products/details/:id" element={<ProductDetails />} />

                <Route path="/products/new" element={<AddProduct />} />

                <Route path="/products/edit/:id" element={<EditProduct />} />

                {/* Lazy Loading: */}
                <Route path="/about" element={
                    <Suspense fallback={<Spinner />}>
                        <LazyAbout />
                    </Suspense>
                } />

                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="*" element={<Page404 />} />

            </Routes>
        </div>
    );
}

export default Routing;
