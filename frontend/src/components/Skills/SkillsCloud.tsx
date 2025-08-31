import React, { useEffect, useRef, useState } from "react";

interface Skill {
  img: string;
  alt: string;
}

interface AnimatedSkill extends Skill {
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  id: number;
}

const skills: Skill[] = [
  { img: "https://img.shields.io/badge/-JavaScript-000000?logo=javascript&logoColor=white", alt: "Javascript" },
  { img: "https://img.shields.io/badge/-C%20/%20C++-000000?logo=cplusplus&logoColor=white", alt: "C++" },
  { img: "https://img.shields.io/badge/-TypeScript-000000?logo=typescript&logoColor=white", alt: "TypeScript" },
  { img: "https://img.shields.io/badge/-Python-000000?logo=python&logoColor=white", alt: "Python" },
  { img: "https://img.shields.io/badge/-HTML5-000000?logo=html5&logoColor=white", alt: "HTML" },
  { img: "https://img.shields.io/badge/-CSS3-000000?logo=css&logoColor=white", alt: "CSS" },
  { img: "https://img.shields.io/badge/-Bootstrap-000000?logo=bootstrap&logoColor=white", alt: "Bootstrap" },
  { img: "https://img.shields.io/badge/-TailwindCSS-000000?logo=tailwindcss&logoColor=white", alt: "TailwindCSS" },
  { img: "https://img.shields.io/badge/-Markdown-000000?logo=markdown&logoColor=white", alt: "Markdown" },
  { img: "https://img.shields.io/badge/-React-000000?logo=react&logoColor=white", alt: "React" },
  { img: "https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white", alt: "Next.js" },
  { img: "https://img.shields.io/badge/-Redux-000000?logo=redux&logoColor=white", alt: "Redux" },
  { img: "https://img.shields.io/badge/-Node.js-000000?logo=node.js&logoColor=white", alt: "Node.js" },
  { img: "https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white", alt: "Express.js" },
  { img: "https://img.shields.io/badge/-Puppeteer-000000?logo=puppeteer&logoColor=white", alt: "Puppeteer" },
  { img: "https://img.shields.io/badge/-Socket.io-000000?logo=socket.io&logoColor=white", alt: "Socket.io" },
  { img: "https://img.shields.io/badge/-MongoDB-000000?logo=mongodb&logoColor=white", alt: "MongoDB" },
  { img: "https://img.shields.io/badge/-MySQL-000000?logo=mysql&logoColor=white", alt: "MySQL" },
  { img: "https://img.shields.io/badge/-VectorDB-000000?logo=databricks&logoColor=white", alt: "VectorDB" },
  { img: "https://img.shields.io/badge/-Postman-000000?logo=postman&logoColor=white", alt: "Postman" },
  { img: "https://img.shields.io/badge/-SQL-000000?logo=database&logoColor=white", alt: "SQL" },
  { img: "https://img.shields.io/badge/-Docker-000000?logo=docker&logoColor=white", alt: "Docker" },
  { img: "https://img.shields.io/badge/-Figma-000000?logo=figma&logoColor=white", alt: "Figma" },
  { img: "https://img.shields.io/badge/-React%20Testing%20Library-000000?logo=testinglibrary&logoColor=white", alt: "React Testing Library" },
  { img: "https://img.shields.io/badge/-Jest-000000?logo=jest&logoColor=white", alt: "Jest" },
  { img: "https://img.shields.io/badge/-Cypress-000000?logo=cypress&logoColor=white", alt: "Cypress" },
  { img: "https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white", alt: "Vercel" },
  { img: "https://img.shields.io/badge/AWS-000000?logo=googlecloud&logoColor=white", alt: "AWS" },
  { img: "https://img.shields.io/badge/-DSA-000000?logo=thealgorithms&logoColor=white", alt: "DSA" },
  { img: "https://img.shields.io/badge/-OOPs-000000?logo=codecrafters&logoColor=white", alt: "OOPs" },
  { img: "https://img.shields.io/badge/-SDLC-000000?logoColor=white", alt: "SDLC" },
  { img: "https://img.shields.io/badge/-DBMS-000000?logo=databricks&logoColor=white", alt: "DBMS" },
  { img: "https://img.shields.io/badge/-Git-000000?logo=git&logoColor=white", alt: "Git" },
];

const fibonacciSphere = (samples: number, radius: number) => {
  const pts: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    pts.push({ x: x * radius, y: y * radius, z: z * radius });
  }
  return pts;
};

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const DEFAULT_SPEED = { x: 0.004, y: 0.006, z: 0.001 };

const SkillsCloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [animatedSkills, setAnimatedSkills] = useState<AnimatedSkill[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const radiusRef = useRef<number>(220);
  const animationRef = useRef<number | null>(null);
  const speedRef = useRef({ ...DEFAULT_SPEED });
  const targetSpeedRef = useRef({ ...DEFAULT_SPEED });

  // Drag/pointer refs
  const isDraggingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const velRef = useRef({ x: 0, y: 0 });

  // Measure & init
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const r = Math.max(80, Math.floor(Math.min(rect.width, rect.height) * 0.4));
      radiusRef.current = r;
      const pts = fibonacciSphere(skills.length, r);
      const init: AnimatedSkill[] = skills.map((s, i) => ({
        ...s,
        x: pts[i].x,
        y: pts[i].y,
        z: pts[i].z,
        scale: 1,
        opacity: 1,
        id: i,
      }));
      setAnimatedSkills(init.sort((a, b) => a.z - b.z));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const getScreenScaleFactor = () => {
    if (!containerRef.current) return 1;
    const width = containerRef.current.getBoundingClientRect().width;
    if (width < 300) return 0.6;
    if (width < 420) return 0.8;
    return 1;                  
  };

  // Animation loop (rotation)
  useEffect(() => {
    const animate = () => {
      const s = speedRef.current;
      const t = targetSpeedRef.current;
      const lerp = 0.08;
      s.x += (t.x - s.x) * lerp;
      s.y += (t.y - s.y) * lerp;
      s.z += (t.z - s.z) * lerp;

      setAnimatedSkills((prev) => {
        const rx = s.x, ry = s.y, rz = s.z;
        const cosX = Math.cos(rx), sinX = Math.sin(rx);
        const cosY = Math.cos(ry), sinY = Math.sin(ry);
        const cosZ = Math.cos(rz), sinZ = Math.sin(rz);
        const r = radiusRef.current;

        const next = prev.map((sk) => {
          let { x, y, z } = sk;

          // Y rotation
          const nx1 = x * cosY + z * sinY;
          const nz1 = -x * sinY + z * cosY;

          // X rotation
          const ny2 = y * cosX - nz1 * sinX;
          const nz2 = y * sinX + nz1 * cosX;

          // Z rotation
          const nx3 = nx1 * cosZ - ny2 * sinZ;
          const ny3 = nx1 * sinZ + ny2 * cosZ;

          const depthN = (nz2 + r) / (2 * r);
          const screenScale = getScreenScaleFactor();
          const baseScale = (0.3 + depthN * 0.9) * screenScale;
          const baseOpacity = Math.max(0.35, 0.45 + depthN * 0.55);

          return {
            ...sk,
            x: nx3,
            y: ny3,
            z: nz2,
            scale: baseScale,
            opacity: baseOpacity,
          };
        });

        next.sort((a, b) => a.z - b.z);
        return next;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    lastPosRef.current = { x: e.clientX, y: e.clientY };
    lastTimeRef.current = performance.now();
    velRef.current = { x: 0, y: 0 };

    try {
      (containerRef.current as Element | null)?.setPointerCapture?.(e.pointerId);
    } catch {
      /* ignore in older browsers */
    }

    targetSpeedRef.current = { x: 0, y: 0, z: 0 };
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !lastPosRef.current || !lastTimeRef.current) return;
    e.preventDefault();

    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    const dx = e.clientX - lastPosRef.current.x;
    const dy = e.clientY - lastPosRef.current.y;

    velRef.current = { x: dx / dt, y: dy / dt };
    lastTimeRef.current = now;
    lastPosRef.current = { x: e.clientX, y: e.clientY };

    // map drag delta to rotation speeds.
    // factor to control sensitivity
    const factor = 0.01;
    const tx = clamp(-dy * factor, -0.12, 0.12); // vertical rotation
    const ty = clamp(dx * factor, -0.12, 0.12); // horizontal rotation
    const tz = clamp((dx * dy) * 0.00002, -0.012, 0.012);

    targetSpeedRef.current = { x: tx, y: ty, z: tz };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      lastPosRef.current = null;
      lastTimeRef.current = null;

      try {
        (containerRef.current as Element | null)?.releasePointerCapture?.(e.pointerId);
      } catch {}

      const inertiaFactor = 28; 
      const ivx = clamp(-velRef.current.y * inertiaFactor, -0.12, 0.12);
      const ivy = clamp(velRef.current.x * inertiaFactor, -0.12, 0.12);

      targetSpeedRef.current = { x: ivx, y: ivy, z: 0 };

      window.setTimeout(() => {
        targetSpeedRef.current = { ...DEFAULT_SPEED };
      }, 700);
    }

    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  };

  const skillStyle = (s: AnimatedSkill): React.CSSProperties => {
    const isHovered = hoveredSkill === s.id;
    const pe = hoveredSkill !== null ? (isHovered ? "auto" : "none") : "auto";

    let scale = s.scale;
    let opacity = s.opacity;
    let filter = "none";

    if (hoveredSkill !== null) {
      if (isHovered) {
        scale *= 1.9;
        opacity = 1;
        filter = "none";
      } else {
        opacity = Math.max(0.15, s.opacity * 0.25);
        filter = "grayscale(60%)";
      }
    }

    return {
      transform: `translate(-50%, -50%) translate3d(${s.x}px, ${s.y}px, ${s.z * 0.3}px) scale(${scale})`,
      opacity,
      zIndex: Math.round(s.z + radiusRef.current + 100),
      transition: "transform 180ms ease, opacity 180ms ease, filter 180ms ease",
      willChange: "transform, opacity",
      pointerEvents: pe as React.CSSProperties["pointerEvents"],
      filter,
    };
  };

  return (
    <div
      ref={containerRef}
      className="skills-container"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onPointerLeave={(e) => {
        if (!isDraggingRef.current) {
          targetSpeedRef.current = { ...DEFAULT_SPEED };
        }
      }}
      onMouseEnter={() => {
        if (!isDraggingRef.current) targetSpeedRef.current = { x: 0.0015, y: 0.002, z: 0.0003 };
      }}
      onMouseLeave={() => {
        if (!isDraggingRef.current) targetSpeedRef.current = { ...DEFAULT_SPEED };
        setHoveredSkill(null);
      }}
    >
      {animatedSkills.map((sk) => (
        <img
          key={sk.id}
          src={sk.img}
          className="skill"
          alt={sk.alt}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          style={skillStyle(sk)}
          onMouseEnter={() => setHoveredSkill(sk.id)}
          onMouseLeave={() => setHoveredSkill(null)}
        />
      ))}
    </div>
  );
};

export default SkillsCloud;
