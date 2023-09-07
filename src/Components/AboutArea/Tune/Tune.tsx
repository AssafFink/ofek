import "./Tune.css";
import audioSource from "../../../Assets/Audio/the-desert.wav";
import { RefObject, useRef } from "react";

function Tune(): JSX.Element {

    const audioRef: RefObject<HTMLAudioElement> = useRef();

    function handlePlay(): void {
        // audioRef.current = document.getElementById("...")
        audioRef.current.play();
    }

    function handlePause(): void {
        audioRef.current.pause();
    }

    function handleStop(): void {
        audioRef.current.load();
    }

    return (
        <div className="Tune">
			
            <audio src={audioSource} ref={audioRef} />

            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    );
}

export default Tune;
