import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ZoomedOutView from "./ZoomedOutView";

function MainViewer() {
  const [zoomPosition, setZoomPosition] = useState({ x: 0.5, y: 0.5 });

  const handleZoomChange = ({ positionX, positionY, scale }) => {
    const imageWidth = 2000; 
    const imageHeight = 1500;

    const viewportWidth = imageWidth / scale;
    const viewportHeight = imageHeight / scale;

    const adjustedX = Math.max(0, Math.min(imageWidth, Math.abs(positionX)));
    const adjustedY = Math.max(0, Math.min(imageHeight, Math.abs(positionY)));

    
    const centerX = adjustedX + viewportWidth / 2;
    const centerY = adjustedY + viewportHeight / 2;

    const normalizedX = centerX / imageWidth;
    const normalizedY = centerY / imageHeight;

    setZoomPosition({
      x: Math.max(0, Math.min(1, normalizedX)),
      y: Math.max(0, Math.min(1, normalizedY)),
    });
  };

  return (
    <div className="main-viewer">
      <h4>WSI Zoomed IN View</h4>
      <TransformWrapper
        onZoomChange={({ state }) =>
          handleZoomChange({
            positionX: state.positionX,
            positionY: state.positionY,
            scale: state.scale,
          })
        }
        onPanning={({ state }) =>
          handleZoomChange({
            positionX: state.positionX,
            positionY: state.positionY,
            scale: state.scale,
          })
        }
        centerOnInit
      >
        <TransformComponent>
          <img
            src="/Assignment/wsi.png"
            alt="Whole Slide Image"
            style={{ width: "100%", height: "auto" }}
          />
        </TransformComponent>
      </TransformWrapper>
      <ZoomedOutView zoomPosition={zoomPosition} />
    </div>
  );
}

export default MainViewer;
