import React, { useRef, useState } from 'react';
import './CreepyButton.css';

export default function CreepyButton({ onClick, children, className = '' }) {
  const eyesRef = useRef(null);
  const [eyeCoords, setEyeCoords] = useState({ x: 0, y: 0 });

  const updateEyes = (e) => {
    const point = (e.touches && e.touches[0]) || e;
    if (!eyesRef.current || !point) return;

    const rect = eyesRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = point.clientX - centerX;
    const dy = point.clientY - centerY;

    const max = Math.max(rect.width, rect.height) / 2;
    const nx = Math.max(-1, Math.min(1, dx / (max * 1.2)));
    const ny = Math.max(-1, Math.min(1, dy / (max * 1.2)));

    setEyeCoords({ x: nx, y: ny });
  };

  const resetEyes = () => setEyeCoords({ x: 0, y: 0 });

  const pupilStyle = {
    transform: `translate(${ -50 + eyeCoords.x * 28 }%, ${ -50 + eyeCoords.y * 28 }%)`
  };

  return (
    <button
      className={`creepy-btn ${className}`}
      type="button"
      onClick={onClick}
      onMouseMove={updateEyes}
      onMouseLeave={resetEyes}
      onTouchMove={updateEyes}
      onTouchEnd={resetEyes}
      onTouchCancel={resetEyes}
    >
      <span className="creepy-btn__cover">{children}</span>

      <span className="creepy-btn__eyes" ref={eyesRef} aria-hidden>
        <span className="creepy-btn__eye">
          <span className="creepy-btn__pupil" style={pupilStyle} />
        </span>
        <span className="creepy-btn__eye">
          <span className="creepy-btn__pupil" style={pupilStyle} />
        </span>
      </span>
    </button>
  );
}
