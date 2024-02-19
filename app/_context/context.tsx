"use client";
import React, { createContext, useEffect, useState } from "react";
const contextBox = createContext<unknown>({});
const AllDataProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState<string>("#000");
  const [brushSize, setBrushSize] = useState<string>("5");
  return (
    <contextBox.Provider
      value={{
        selectedColor,
        brushSize,
        setBrushSize,
        setSelectedColor,
      }}
    >
      {children}
    </contextBox.Provider>
  );
};
export { AllDataProvider, contextBox };
