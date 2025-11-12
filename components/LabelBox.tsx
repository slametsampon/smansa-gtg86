// components/LabelBox.tsx

import React from 'react';

interface LabelBoxProps {
  text1: string;
  text2: string;
  bgColor?: string; // 'gradient' = merah-maron elektrik
  textColor?: string;
  width?: number;
  height?: number;
  glow?: boolean;
  rounded?: boolean;
}

const LabelBox: React.FC<LabelBoxProps> = ({
  text1,
  text2,
  bgColor = '#001f3f',
  textColor = '#ffffff',
  width = 100,
  height = 60,
  glow = false,
  rounded = true,
}) => {
  const isGradient = bgColor === 'gradient';

  const className = [
    'flex flex-col items-center justify-center text-center text-sm font-semibold',
    isGradient
      ? 'bg-gradient-to-b from-[#8B0000] via-[#FF0033] to-[#8B0000]'
      : '',
    rounded ? 'rounded-md' : '',
    glow ? 'shadow-[0_0_12px_rgba(255,0,51,0.6)]' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = {
    ...(isGradient ? {} : { backgroundColor: bgColor }),
    color: textColor,
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div className={className} style={style}>
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
  );
};

export default LabelBox;
