import React from "react";

const ProgressRing = ({ percentage = 70, size = 100, strokeWidth = 3, color = "text-indigo-500", textColor="#000" }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (circumference * percentage) / 100;

  return (
    <div className="relative " style={{ width: size, height: size }}>
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth={strokeWidth-4}
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
        ></circle>
        {/* Progress Circle */}
        <circle
          className={`stroke-current ${color}`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{
            transition: "stroke-dashoffset 0.35s",
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        ></circle>
        {/* Center Text */}
        <text
        fill={textColor}
          x="50"
          y="50"
          
          fontFamily="Verdana"
          fontSize="18"
          fontWeight={700}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressRing;
