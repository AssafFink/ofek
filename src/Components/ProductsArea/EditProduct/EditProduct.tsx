import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./EditProduct.css";
import { useEffect } from "react";

function EditProduct(): JSX.Element {

    const { register, handleSubmit, formState, setValue, watch } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();

    useEffect(() => {
        const id = +params.id;
        productsService.getOneProducts(id)
            .then(product => {
                setValue("id", product.id);
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setValue("imageUrl", product.imageUrl);
            })
            .catch(err => alert(err.message));
    }, []);

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productsService.updateProduct(product);
            alert("Product has been updated.");
            navigate("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="EditProduct">

            <form onSubmit={handleSubmit(send)}>

                <input type="hidden" {...register("id")} />

                <h2>Edit Product</h2>

                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)} />
                <span className="err">{formState.errors.name?.message}</span>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price", ProductModel.priceValidation)} />
                <span className="err">{formState.errors.price?.message}</span>

                <label>Stock: </label>
                <input type="number" {...register("stock", ProductModel.stockValidation)} />
                <span className="err">{formState.errors.stock?.message}</span>

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Update</button>

                <img src={watch("imageUrl")} />



            </form>

        </div>
    );
}

export default EditProduct;
