'use client';

import { useState } from 'react';

type ToggleButtonProps = {
  name: string;
  defaultChecked?: boolean;
  label?: string;
};

export default function ToggleButton({ name, defaultChecked = false, label }: ToggleButtonProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <div
        className={`relative w-9 h-5 rounded-full transition-colors duration-300 ${
          checked ? 'bg-blue-600' : 'bg-gray-300'
        }`}
        onClick={() => setChecked(!checked)}
        >
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
            checked ? 'translate-x-4' : ''
          }`}
          />
      </div>
        {label && <span>{label}</span>}
      {/* Hidden input so the toggle works with SSR forms and is readable on submit */}
      <input type="hidden" name={name} value={checked ? 'true' : 'false'} />
    </label>
  );
}
