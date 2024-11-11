
import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import ZoomedOutView from './ZoomedOutView';

function MainViewer() {
  const [zoomPosition, setZoomPosition] = useState({ x: 0.5, y: 0.5 });

  const handleZoomChange = ({ state }) => {
    const { positionX, positionY, scale } = state;

    const imageWidth = 2000; 
    const imageHeight = 1500; 

    
    const viewportWidth = imageWidth / scale;
    const viewportHeight = imageHeight / scale;

    const viewCenterX = (positionX + viewportWidth / 2) / imageWidth;
    const viewCenterY = (positionY + viewportHeight / 2) / imageHeight;


    setZoomPosition({
      x: Math.max(0, Math.min(1, viewCenterX)),
      y: Math.max(0, Math.min(1, viewCenterY)),
    });
  };

  return (
    <div className="main-viewer">
      <h4>WSI Zoomed IN View</h4>
      <TransformWrapper
        onZoomChange={handleZoomChange}
        onPanning={handleZoomChange}
        centerOnInit
      >
        <TransformComponent>
          <img src="/wsi.png" alt="Whole Slide Image" style={{ width: '100%', height: 'auto' }} />
        </TransformComponent>
      </TransformWrapper>
      <ZoomedOutView zoomPosition={zoomPosition} />
    </div>
  );
}

export default MainViewer;
