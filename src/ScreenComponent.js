import React from "react";
import useScreen from "./useScreen";
const ScreenComponent = () => {
  const screenSize = useScreen();
  return (
    <div>
      <h1>ScreenComponent</h1>
      <h2>
        We are in <em style={{ color: "blue" }}>{screenSize}</em> Screen
      </h2>
    </div>
  );
};

export default ScreenComponent;
