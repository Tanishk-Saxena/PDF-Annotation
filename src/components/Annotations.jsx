import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect } from "react-konva";

const Annotations = ({mode, modeObject, annotations, setAnnotations}) => {
  const [newAnnotation, setNewAnnotation] = useState([]);

  const handleMouseDown = event => {
    if (newAnnotation.length === 0 && mode) {
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([{ x, y, width: 0, height: 0, key: "0", ...modeObject }]);
    }
  };

  const handleMouseUp = event => {
    if (newAnnotation.length === 1 && mode) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      const annotationToAdd = {
        x: sx,
        y: sy,
        width: abs(x - sx),
        height: abs(y - sy),
        key: annotations.length + 1,
        ...modeObject
      };
      if(annotationToAdd.width && annotationToAdd.height){
        let newAnnotationArray = annotations.concat(annotationToAdd);
        setAnnotations(newAnnotationArray);
      }
      setNewAnnotation([]);
    }
  };

  const handleMouseMove = event => {
    if (newAnnotation.length === 1 && mode) {
      const sx = newAnnotation[0].x;
      const sy = newAnnotation[0].y;
      const { x, y } = event.target.getStage().getPointerPosition();
      setNewAnnotation([
        {
          x: sx,
          y: sy,
          width: abs(x - sx),
          height: abs(y - sy),
          key: "0",
          ...modeObject
        }
      ]);
    }
  };

  const annotationsToDraw = [...annotations, ...newAnnotation];
  
  let initialWidth = 700;
  let initialHeight = 700;
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  
  // function fitStageIntoParentContainer() {
  //   var container = document.querySelector('#stage-parent');
    
  //   // now we need to fit stage into parent container
  //   var containerWidth = container.offsetWidth;
    
  //   // but we also make the full scene visible
  //   // so we need to scale all objects on canvas
  //   var scale = containerWidth / initialWidth;
    
  //   width(initialWidth * scale);
  //   height(initialHeight * scale);
  //   // scale({ x: scale, y: scale });
  // }
  
  // // fitStageIntoParentContainer();
  // // adapt the stage on any window resize
  // window.addEventListener('resize', fitStageIntoParentContainer);

  return (
    <Stage
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      width={width}
      height={height}
    >
      <Layer>
        {annotationsToDraw && annotationsToDraw.map(value => {
          return (
            <Rect
              key={value.key}
              x={value.x}
              y={value.y}
              width={value.width}
              height={value.height}
              fill={value.color}
              stroke={value.strokeColor}
            />
          );
        })}
      </Layer>
    </Stage>
  );
};

export default Annotations;
