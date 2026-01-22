import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const trailRef = useRef([]);
  const trailCount = 6; // number of dots in the trail

  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 1024) return;

    const dots = trailRef.current;

    // Initialize dots
    dots.forEach((dot) => {
      gsap.set(dot, { xPercent: -50, yPercent: -50 });
    });

    const moveTrail = (e) => {
      let x = e.clientX;
      let y = e.clientY;

      dots.forEach((dot, i) => {
        const delay = i * 0.05;
        gsap.to(dot, {
          x,
          y,
          duration: 0.2 + delay,
          ease: "power2.out",
        });
        // Reduce size & opacity for trailing dots
        gsap.to(dot, {
          scale: 1 - i * 0.1,
          opacity: 1 - i * 0.15,
          duration: 0.2,
          ease: "power2.out",
        });
      });
    };

    window.addEventListener("mousemove", moveTrail);
    return () => window.removeEventListener("mousemove", moveTrail);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {[...Array(trailCount)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRef.current[i] = el)}
          className="absolute w-3 h-3 bg-primary rounded-full pointer-events-none"
          style={{ opacity: 0.8 }}
        />
      ))}
    </div>
  );
};

export default CustomCursor;
