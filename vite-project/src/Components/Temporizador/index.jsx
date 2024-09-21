import { useEffect, useState } from "react";

export function Temporizador() {
    const [isOn, setIsOn] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isOn) {
        interval = setInterval(() => setTimer((timer) => timer + 1), 1000);
        }

        return () => clearInterval(interval);
    }, [isOn]);

    const onReset = () => {
        setIsOn(false);
        setTimer(0);
    };

    return (
        <div>
            <h3>TA11 - Temporizador</h3>
            <h1>{timer}</h1>

            {!isOn && (
                <button type="button" onClick={() => setIsOn(true)}>
                Start
                </button>
            )}

            {isOn && (
                <button type="button" onClick={() => setIsOn(false)}>
                Stop
                </button>
            )}

            <button type="button" disabled={timer === 0} onClick={onReset}>
                Reset
            </button>
        </div>
    );
}
