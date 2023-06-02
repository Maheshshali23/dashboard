import React from 'react';

const ProgressBar = () => {
  const circumference = 50 * 2 * Math.PI;
  const percent = 3.8;

  return (
    <div>
      <div>
        <svg className="w-32 h-32" aria-hidden="true">
          <circle
            className="text-gray-300"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="50%"
            cy="50%"
            transform="rotate(-90 60 60)" 
          />
          <circle
            className="text-blue"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percent / 100) * circumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="50%"
            cy="50%"
            transform="rotate(-90 60 60)" 
          />
          <text
            className="text-xl text-blue-700 font-bold"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {`${percent}%`}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ProgressBar;
