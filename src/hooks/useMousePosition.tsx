import { useEffect, useState, RefObject } from "react";

export const useMousePosition = (ref?: RefObject<HTMLElement> | null) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        });
      } else {
        setMousePosition({ x: event.pageX, y: event.pageY });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref]);

  return { x: mousePosition.x, y: mousePosition.y };
};
