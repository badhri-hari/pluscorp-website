import { useState, useEffect } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ left: -10, top: -10 });
  const [isActive, setIsActive] = useState(false);

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;
    const { innerHeight, innerWidth } = window;

    setPosition({
      left: (clientX / innerWidth) * 100,
      top: (clientY / innerHeight) * 100,
    });
  };

  const handlePointerDown = () => {
    setIsActive(true);
  };

  const handlePointerUp = () => {
    setTimeout(() => setIsActive(false), 5);
  };

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <>
      <div
        className={`blob ${isActive ? "active" : ""}`}
        style={{
          left: `${position.left}vw`,
          top: `${position.top}vh`,
        }}
      ></div>
    </>
  );
}
