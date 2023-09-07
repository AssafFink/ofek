import { useSelector } from "react-redux";
import "./AuthMenu.css";
import { AppState } from "../../../Redux/AppState";
import { NavLink } from "react-router-dom";
import authService from "../../../Services/AuthService";

function AuthMenu(): JSX.Element {

    const user = useSelector((appState: AppState) => appState.user);

    function logMeOut(): void {
        authService.logout();
        alert("Bye Bye...");
    }

    return (
        <div className="AuthMenu">

            {user &&
                <div>
                    <span>Hello {user.firstName} {user.lastName} | </span>
                    <NavLink to="/home" onClick={logMeOut}>Logout</NavLink>
                </div>
            }

            {!user &&
                <div>
                    <span>Hello Guest | </span>
                    <NavLink to="/login">Login</NavLink>
                    <span> | </span>
                    <NavLink to="/register">Register</NavLink>
                </div>
            }

        </div>
    );
}

export default AuthMenu;
