'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';


type ToggleButtonProps = {
  name: string;
  defaultChecked?: boolean;
  label?: string;
};

export default function ToggleButton({ name, defaultChecked = false, label }: ToggleButtonProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <>
      <div
        className={`relative w-8 h-4 rounded-full
          flex items-center
          select-all cursor-pointer  ${
          checked ? 'bg-teal-400 justify-end' : 'bg-gray-200 justify-start'
        }`}
        onClick={() => setChecked(!checked)}
        >
          <motion.div 
            className={`h-4 w-4 rounded-full ${
              checked ? 'bg-green-900':'bg-gray-500'
            }`}
            layout
            transition={{ type:"spring", stiffness:600, damping:20 }}
          />
      </div>
        {label && <span className=''>{label}</span>}
      <input type="hidden" name={name} value={checked ? 'true' : 'false'} />
    </>
  );
}
