import React from "react";

export function HelpBox({ visible, children }) {
  return (
    <div className={`bg-rect-small help-box ${visible ? "on" : ""}`} id="help-box">
      <p>
        {children}
      </p>
    </div>
  );
}