import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import "./Login.css";
import CredentialsModel from "../../../Models/CredentialsModel";

function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            alert("Welcome Back!");
            navigate("/home");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit(send)}>

                <h2>Login</h2>

                <label>Email: </label>
                <input type="email" {...register("email")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button>Login</button>

            </form>
        </div>
    );
}

export default Login;
