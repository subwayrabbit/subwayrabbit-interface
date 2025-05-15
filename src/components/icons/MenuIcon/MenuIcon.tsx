import React from 'react';

export const MenuIcon = ({ 
    className, 
    size, 
    width, 
    height,
    color = "currentColor"
  }: { 
    className?: string;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
  }) => {
    const iconWidth = width || size || 32;
    const iconHeight = height || size || 32;
    
    const viewBoxWidth = 32;
    const viewBoxHeight = 32;
    
    // If width/height ratio differs from original, adjust viewBox
    const aspectRatio = iconWidth / iconHeight;
    const originalAspectRatio = viewBoxWidth / viewBoxHeight;
    
    let adjustedViewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`;
    
    if (Math.abs(aspectRatio - originalAspectRatio) > 0.01) {
      // Adjust viewBox to prevent distortion
      if (aspectRatio > originalAspectRatio) {
        // Wider than original → increase viewBox width
        adjustedViewBox = `0 0 ${viewBoxHeight * aspectRatio} ${viewBoxHeight}`;
      } else {
        // Taller than original → increase viewBox height
        adjustedViewBox = `0 0 ${viewBoxWidth} ${viewBoxWidth / aspectRatio}`;
      }
    }
  
    return (
      <svg
        width={iconWidth.toString()}
        height={iconHeight.toString()}
        viewBox={adjustedViewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid meet" // Ensures scaling is centered
      >
        <path 
          d="M8.1999 13C10.8509 13 12.9999 10.851 12.9999 8.20002C12.9999 5.54906 10.8509 3.40002 8.1999 3.40002C5.54894 3.40002 3.3999 5.54906 3.3999 8.20002C3.3999 10.851 5.54894 13 8.1999 13ZM23.7999 13C26.4509 13 28.5999 10.851 28.5999 8.20002C28.5999 5.54906 26.4509 3.40002 23.7999 3.40002C21.1489 3.40002 18.9999 5.54906 18.9999 8.20002C18.9999 10.851 21.1489 13 23.7999 13ZM13.0499 23.75C13.0499 26.401 10.9009 28.55 8.2499 28.55C5.59894 28.55 3.4499 26.401 3.4499 23.75C3.4499 21.0991 5.59894 18.95 8.2499 18.95C10.9009 18.95 13.0499 21.0991 13.0499 23.75ZM23.7999 28.6C26.4509 28.6 28.5999 26.451 28.5999 23.8C28.5999 21.1491 26.4509 19 23.7999 19C21.1489 19 18.9999 21.1491 18.9999 23.8C18.9999 26.451 21.1489 28.6 23.7999 28.6Z" 
          fill={color}
        />
      </svg>
    );
  };