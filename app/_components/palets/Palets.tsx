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
    const { clientX, clientY } = event;
    let isDrawOn = isDragging && clientY > (150 + Number(context.brushSize));
    if (isDrawOn && context.selectedTool === 'brush') {
      setCircles((prevCircles) => [
        ...prevCircles,
        {
          x: clientX,
          y: clientY,
          id: Math.random().toString(),
          color: context.selectedColor,
          size: context.brushSize,
          reduce: '50%',
        },
      ]);
    }
    if (isDrawOn && context.selectedTool === 'eraser') {
      setCircles((prevCircles) => [
        ...prevCircles,
        {
          x: clientX,
          y: clientY,
          reduce: '0',
          id: Math.random().toString(),
          color: '#fff',
          size: context.brushSize,
          zIndex: '-10',
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
              circle.x - (circle.size > 20 ? circle.size - 15 : circle.size),
            top: circle.y - (circle.size > 20 ? circle.size - 15 : circle.size),
            backgroundColor: circle.color,
            borderRadius: circle.reduce,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Palets;
