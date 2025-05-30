'use client';

import { JSX, useEffect, useState } from 'react';
import styles from '@/_styles/AnimatedBackground.module.css';

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const [circles, setCircles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setMounted(true);

    const colors = ['#00585F', '#141428', '#F2A541', '#5dfccf'];
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getGradient = (baseColor: string, x: string, y: string) => {
      const fadeColor = isDark ? '#00000000' : '#ffffff00';
      return `radial-gradient(circle at var(--x) var(--y), ${baseColor} 0%, ${fadeColor} 100%)`;
    };

    const circleElements: JSX.Element[] = [];

    for (let i = 0; i < 60; i++) {
      const size = Math.random() * 150 + 150;
      const x = `${(Math.random() - 0.5) * 1000}px`;
      const y = `${(Math.random() - 0.5) * 1000}px`;
      const top = `${Math.random() * window.innerHeight}px`;
      const left = `${Math.random() * window.innerWidth}px`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const gradient = getGradient(color, x, y);

      circleElements.push(
        <div
          key={i}
          className={styles.circle}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top,
            left,
            background: gradient,
            '--x': x,
            '--y': y,
            '--size': `${size}px`,
          } as React.CSSProperties}
        />
      );
    }

    setCircles(circleElements);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
      {circles}
    </div>
  );
}
