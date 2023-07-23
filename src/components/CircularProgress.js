import React from 'react';
import PropTypes from 'prop-types';

const CircularProgress = ({ value, max }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = value / max;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle
        stroke="#e8e8e8"
        fill="transparent"
        strokeWidth="10"
        r={radius}
        cx="60"
        cy="60"
      />
      <circle
        stroke="#307bbe"
        fill="transparent"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={radius}
        cx="60"
        cy="60"
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
};

CircularProgress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default CircularProgress;
