import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import Page404 from "../Page404/Page404";
import "./Routing.css";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>

                <Route path="/home" element={<Home />} />

                <Route path="/products" element={<ProductList />} />

                <Route path="/products/details/:id" element={<ProductDetails />} />

                <Route path="/about" element={<About />} />

                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="*" element={<Page404 />} />

            </Routes>
        </div>
    );
}

export default Routing;
