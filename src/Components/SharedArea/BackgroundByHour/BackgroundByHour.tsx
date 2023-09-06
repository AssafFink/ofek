import { FC } from "react";
import "./BackgroundByHour.css";

// HOC: Higher Order Component

function BackgroundByHour(InnerComponent: FC): FC {

    function getColorByHour(): string {
        const now = new Date();
        let hour = now.getHours();
        if (hour > 12) hour = 24 - hour;
        const hue = Math.floor(hour * 255 / 12);
        const color = `rgb(${hue},${hue},${hue})`;
        return color;
    }

    const style = {
        backgroundColor: getColorByHour(),
        display: "inline-block"
    };

    return function (props: any) {
        return (
            <div className="BackgroundByHour" style={style}>
                <InnerComponent {...props} />
            </div>
        );
    }
}

export default BackgroundByHour;
