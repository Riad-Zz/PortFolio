import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    // Center everything
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    // Dot moves instantly — super precise
    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "none" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "none" });

    // Ring follows with a smooth lag — cool hover effect
    const ringX = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3.out" });

    const moveCursor = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const handleHover = (e) => {
      // Check if hovering over clickable stuff
      const isHoverable = e.target.closest("button, a, .cursor-pointer, .project-card");
      setIsHovering(!!isHoverable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Tiny dot — your mouse buddy */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full"
      />

      {/* Ring that chills behind the dot and reacts on hover */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-primary transition-all duration-300 ease-out ${
          isHovering 
          ? "w-6 h-6 opacity-100 border-2" // Saying hello to buttons and links
          : "w-10 h-10 opacity-30"         // Just vibing around normally
        }`}
      />
    </div>
  );
};

export default CustomCursor;
