"use client";
import React, { useState } from "react";
import "./style.css";
export default function Tools() {
  const [tools, setTools] = useState<Array<Object>>([
    { icon: "brush", name: "brush", style: "select" },
    { icon: "test", name: "test", style: "unSelect" },
  ]);
  function selectTool(tool) {
    const toolsCopy = [...tools];
    const toolSelectedBefore: object | undefined = toolsCopy.find(
      (e) => e.style === "select"
    );
    toolSelectedBefore.style = "unSelect";
    const toolSelected: object | undefined = toolsCopy.find(
      (e) => e.name === tool.name
    );
    toolSelected.style = "select";
    setTools(toolsCopy);
    console.log(tools);
  }
  return (
    <div className="toolBar">
      {tools.map((tool) => (
        <div key={tool.name}>
          <p className={`${tool.style} tool`} onClick={(e) => selectTool(tool)}>
            {tool.icon}
          </p>
        </div>
      ))}
    </div>
  );
}
