"use client";
import React, { useState } from "react";

import "./style.css";

const Palets: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [circles, setCircles] = useState<Array<object>>([]);

  function clickHandler() {
    setIsDragging(true);
  }

  function MoveHandler(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isDragging) {
      console.log(event.clientX)
      const { clientX, clientY } = event;

      setCircles((prevCircles) => [
        ...prevCircles,
        { x: clientX, y: clientY, id: Math.random().toString() },
      ]);
    }
  }

  function upHandler() {
    setIsDragging(false);
  }

  // eslint-disable-next-line react/display-name
  const MemoizedCircle = React.memo(({ circle }) => (
    <div
      style={{
        position: "absolute",
        left: circle.x - 10,
        top: circle.y - 10,
        backgroundColor: "black",
        width: "20px",
        height: "20px",
      }}
    ></div>
  ));

  return (
    <div
      className="palets"
      onMouseUp={upHandler}
      onMouseDown={clickHandler}
      onMouseMove={(e) => MoveHandler(e)}
    >
      {circles.map((circle) => (
        <MemoizedCircle key={circle.id} circle={circle} />
      ))}
    </div>
  );
};

export default Palets;
