"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useVelocity, useSpring, useMotionValueEvent } from "framer-motion";

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Velocity logic for movement direction
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);
  
  const smoothVelocityX = useSpring(velocityX, { damping: 50, stiffness: 400 });
  const smoothVelocityY = useSpring(velocityY, { damping: 50, stiffness: 400 });

  // Holds the rotation angle instantly
  const rotation = useMotionValue(0);

  useMotionValueEvent(smoothVelocityX, "change", (vx) => {
    const vy = smoothVelocityY.get();
    // Only update rotation if we are moving fast enough (prevents micro-jitter)
    if (Math.abs(vx) > 20 || Math.abs(vy) > 20) {
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);
      rotation.set(angle + 135);
    }
  });

  useEffect(() => {
    // Only show custom cursor on devices with a mouse
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
      document.body.style.cursor = "none";
      
      const style = document.createElement("style");
      style.id = "hide-cursor";
      style.innerHTML = `* { cursor: none !important; }`;
      document.head.appendChild(style);
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      const style = document.getElementById("hide-cursor");
      if (style) style.remove();
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] text-accent"
      style={{
        x: mouseX,
        y: mouseY,
        rotate: rotation,
        translateX: "-2.5px",
        translateY: "-2.5px",
        // Rotate precisely around the scaled tip of the arrow (2.5px, 2.5px)
        transformOrigin: "2.5px 2.5px"
      }}
    >
      <motion.svg 
        width="30" 
        height="30" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          scale: isHovering ? 1.2 : 1
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <motion.path 
          d="M2 2L19 8.5L11 11L8.5 19L2 2Z" 
          stroke="white" 
          strokeWidth="1.25" 
          strokeLinejoin="round" 
          strokeLinecap="round"
          fill="currentColor"
          animate={{
            opacity: isHovering ? 0.8 : 1
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.svg>
    </motion.div>
  );
}
