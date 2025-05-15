import React from 'react';

export const WalletIcon = ({ 
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
          d="M6.14314 4.5C4.33086 4.5 2.85742 5.97344 2.85742 7.78571V24.2143C2.85742 26.0266 4.33086 27.5 6.14314 27.5H25.8574C27.6697 27.5 29.1431 26.0266 29.1431 24.2143V12.7143C29.1431 10.902 27.6697 9.42857 25.8574 9.42857H6.96456C6.51278 9.42857 6.14314 9.05893 6.14314 8.60714C6.14314 8.15536 6.51278 7.78571 6.96456 7.78571H25.8574C26.7661 7.78571 27.5003 7.05156 27.5003 6.14286C27.5003 5.23415 26.7661 4.5 25.8574 4.5H6.14314ZM24.2146 16.8214C24.6503 16.8214 25.0681 16.9945 25.3762 17.3026C25.6843 17.6107 25.8574 18.0286 25.8574 18.4643C25.8574 18.9 25.6843 19.3179 25.3762 19.626C25.0681 19.9341 24.6503 20.1071 24.2146 20.1071C23.7789 20.1071 23.361 19.9341 23.0529 19.626C22.7448 19.3179 22.5717 18.9 22.5717 18.4643C22.5717 18.0286 22.7448 17.6107 23.0529 17.3026C23.361 16.9945 23.7789 16.8214 24.2146 16.8214Z" 
          fill={color}
        />
      </svg>
    );
  };