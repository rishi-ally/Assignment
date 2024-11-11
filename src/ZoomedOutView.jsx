// src/components/ZoomedOutView.jsx
import React from 'react';

function ZoomedOutView({ zoomPosition }) {
  return (
    <div className="zoomed-out-view">
      <h4>WSI Zoomed Out View (Hub)</h4>
      <div className="hub-container">
        <img src="/wsi.png" alt="WSI Hub View" className="hub-image" />
        <div
          className="pointer"
          style={{
            left: `${zoomPosition.x * 100}%`, // Convert to percentage of the image width
            top: `${zoomPosition.y * 100}%`,  // Convert to percentage of the image height
          }}
        />
      </div>
    </div>
  );
}

export default ZoomedOutView;
