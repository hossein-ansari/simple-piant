"use client";
import React, { useContext, useState } from "react";

import "./style.css";
import { contextBox } from "@/app/_context/context";

const Palets: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [circles, setCircles] = useState<Array<object>>([]);
  const context = useContext<unknown>(contextBox);
  function clickHandler() {
    setIsDragging(true);
  }

  function MoveHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isDragging) {
      const { clientX, clientY } = event;
      setCircles((prevCircles) => [
        ...prevCircles,
        {
          x: clientX,
          y: clientY,
          id: Math.random().toString(),
          color: context.selectedColor,
          size: context.brushSize,
        },
      ]);
    }
  }

  function upHandler() {
    setIsDragging(false);
  }

  // eslint-disable-next-line react/display-name
  return (
    <div
      className="palets"
      onMouseUp={upHandler}
      onMouseDown={clickHandler}
      onMouseMove={(e) => MoveHandler(e)}
    >
      {circles.map((circle: any) => (
        <div
          key={circle.id}
          style={{
            position: "absolute",
            left:
              circle.x - (circle.size > 25 ? circle.size - 15 : circle.size),
            top: circle.y - (circle.size > 25 ? circle.size - 15 : circle.size),
            backgroundColor: circle.color,
            borderRadius: "50%",
            width: `${circle.size}px`,
            height: `${circle.size}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Palets;
