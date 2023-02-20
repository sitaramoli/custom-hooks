import { useState } from "react";

const usePosition = ({x,y}) => {
    const [position, setPosition] = useState({ x: x, y: y });
    const handlePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    return { position, handlePosition };
}

export default usePosition;