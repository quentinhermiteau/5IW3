"use client";

export default function Slider({ min, max, value, onChange }) {
  return (
    <div className="range">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step="1"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div>{value}</div>
    </div>
  );
}
