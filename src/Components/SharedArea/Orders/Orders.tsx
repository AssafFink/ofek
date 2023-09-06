import BackgroundByHour from "../BackgroundByHour/BackgroundByHour";
import "./Orders.css";

function Orders(): JSX.Element {
    return (
        <div className="Orders">
			<p>Orders Delivery is between 9:00 and 22:00</p>
        </div>
    );
}

export default BackgroundByHour(Orders);
