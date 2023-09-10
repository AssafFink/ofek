import { Component } from "react";
import "./Clock.css";
import notification from "../../../Utils/Notification";

interface ClockProps {
    format: "12h" | "24h";
}

interface ClockState {
    time: string;
}

class Clock extends Component<ClockProps, ClockState> {

    private timerId: number;

    // Pass props to parent and init the state:
    public constructor(props: ClockProps) {
        super(props);
        this.state = { time: "" };
    }

    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const now = new Date();
            const hour12 = this.props.format === "12h";
            const time = now.toLocaleTimeString("en", { hour12 });
            this.setState({ time });
        }, 1000);
    }

    public componentWillUnmount(): void {
        window.clearInterval(this.timerId);
    }

    private msg = "Good Day!";

    private showTime = () => { // Arrow function, so "this" will be the class object.
        const now = new Date();
        notification.success(this.msg + "<hr>" + now.toLocaleTimeString());
    }

    public render(): JSX.Element {
        return (
            <div className="Clock">
                <span>{this.state.time}</span>
                <button onClick={this.showTime}>Show Time</button>
            </div>
        );
    }
}

export default Clock;
