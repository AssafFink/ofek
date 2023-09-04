import { SyntheticEvent, useEffect, useState } from "react";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About(): JSX.Element {

    // ...

    function showDate(): void {
        const now = new Date();
        alert(now.toLocaleDateString());
    }

    function showTime(args: SyntheticEvent): void {
        console.log(args.target);
        console.log((args.target as HTMLButtonElement).innerHTML);
        const now = new Date();
        alert(now.toLocaleTimeString());
    }

    function showNow(args: SyntheticEvent): void {
        const now = new Date();
        alert(now.toLocaleString());
    }

    const navigate = useNavigate(); // React Hook

    function navigateToHome(): void {
        navigate("/home");
    }

    const arr = useState<string>("---");
    const topProduct = arr[0]; // The state data.
    const setTopProduct = arr[1]; // Function performing two things: (a) change the data. (b) re-render the component.

    function displayTopProduct(): void {
        setTopProduct("Ice Coffee"); // change the data + rerender the component.
    }

    // Using Destructuring Assignment:
    const [topSeller, setTopSeller] = useState<string>("---");

    function displayTopSeller(): void {
        setTopSeller("Exotic Liquids");
    }

    const [clock, setClock] = useState<string>("---");

    // Call a function once when component is ready to use (mounted - מחובר ומוכן לשימוש): 
    // useEffect(()=>{}, []);

    // Call a function whenever some dependencies changed (value1, value2, value3):
    // useEffect(() => {}, [value1, value2, value3]);

    // Call a function once when component destroyed (unmounted - רגע לפני שמנותקת מהמערכת):
    // useEffect(() => { return () => {} }, []);

    useEffect(() => { // Invoked once when component is ready for use.

        const timerId = setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString();
            setClock(time);
            console.log(time);
        }, 1000);

        return () => clearInterval(timerId); // Invoked when component destroyed.

    }, []);

    return (
        <div className="About">

            <WhoAreWe />

            <hr />

            <button onClick={showDate}>Show Current Date</button>
            <button onClick={showTime}>Show Current Time</button>
            <button onClick={showNow}>Show Current Date and Time</button>
            <button onClick={navigateToHome}>Navigate to Home</button>
            <hr />

            <button onClick={displayTopProduct}>Display Top Product</button>
            <span>{topProduct}</span>
            <button onClick={displayTopSeller}>Display Top Seller</button>
            <span>{topSeller}</span>
            <hr />

            <span>{clock}</span>

        </div>
    );
}

export default About;
