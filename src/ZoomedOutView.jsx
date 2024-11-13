import React from "react";

function ZoomedOutView({ zoomPosition }) {
  return (
    <div className="zoomed-out-view">
      <h4>WSI Zoomed Out View (Hub)</h4>
      <div className="hub-container" style={{ position: "relative" }}>
        <img
          src="/Assignment/wsi.png"
          alt="WSI Hub View"
          className="hub-image"
          style={{ width: "100%", height: "auto" }}
        />
        <div
          className="pointer"
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            left: `${zoomPosition.x * 100}%`,
            top: `${zoomPosition.y * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ZoomedOutView;
