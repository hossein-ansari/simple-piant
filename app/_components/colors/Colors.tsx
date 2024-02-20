"use client";

import React, { useContext, useState } from "react";
import "./style.css";
import { contextBox } from "@/app/_context/context";
import { ChromePicker } from 'react-color';
const Colors: React.FC = () => {
  const context: unknown = useContext(contextBox);
  const [isOpenCustomColor , setIsOpenCustomColor] = useState<boolean>(false)
  const [colors, setColors] = useState<Array<string>>([
    "#0000FF",
    "#FFFF00",
    "#FFA500",
    "#800080",
    "#FFC0CB",
    "#A52A2A",
    "#008080",
    "#00FFFF",
    "#FF00FF",
    "#00FF00",
    "#4B0082",
    "#800000",
  ]);
  function changeSelectedColor(color) {
    context.setSelectedColor(color);
  }
  return (
    <div className="colorToolBar">
      <div className="selectedColorBar">
        <p style={{ fontSize: "0.5rem" }}>selected color</p>
        <div className="colorPaletsSelected">
          <div
            className="selectedColor"
            style={{
              backgroundColor: context.selectedColor,
            }}
          ></div>
        </div>
      </div>
      <div className="colorBar">
        {colors.map((color) => (
          <div className="colorPalets" key={color}>
            <div
              onClick={(e) => changeSelectedColor(color)}
              className="color"
              style={{
                backgroundColor: color,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="customColorNavBar">
        <div className="customColorBar" onClick={(e)=> setIsOpenCustomColor(!isOpenCustomColor)}>
          <div className="customColor"></div>
        </div>
        {isOpenCustomColor &&
        <div className="colorPicker">   <ChromePicker color={context.selectedColor} onChange={(e)=> changeSelectedColor(e.hex)} /></div>
        }
      </div>
    </div>
  );
};
export default Colors;
