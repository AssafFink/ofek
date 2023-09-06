import "./Greeting.css";
import { memo } from "react";

// memoization (Latin: Memorandum - do be remembered)


interface GreetingProps {
    hour: number;
}

function Greeting(props: GreetingProps): JSX.Element {

    console.log("Greetings...");

    function getGreeting(): string {
        if (props.hour >= 6 && props.hour <= 10) return "Good Morning!";
        if (props.hour >= 11 && props.hour <= 15) return "Good Afternoon!";
        if (props.hour >= 16 && props.hour <= 20) return "Good Evening!";
        return "Good Night!";
    }

    return (
        <div className="Greeting">
            <span>{getGreeting()}</span>
        </div>
    );
}

// Higher Order Component (HOC)
export default memo(Greeting);

// Default implementation:
// export default memo(Greeting, (prevProps, nextProps) => {
//     return prevProps.hour === nextProps.hour; // Can change this default...
// });
