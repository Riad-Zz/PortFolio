import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Image Imports
import PlacioHome from "../assets/Placio/PlacioHome.png";
import PlacioProduct from "../assets/Placio/ProductPage.png";
import PlacioCrud from "../assets/Placio/Crud.png";

import LeaflyHome from "../assets/Leafly/LefylyHomePage.png";
import LeaflyProduct from "../assets/Leafly/ProductPageLeaf.png";
import LeaflyProfile from "../assets/Leafly/profile.png";

// Icons
import { ExternalLink, Github, Lock, Zap, BarChart3 } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    title: "Placio",
    subtitle: "Role-Based MERN Web Application",
    description:
      "Placio is a modern real estate listing platform where property owners can post their available rentals or sale listings. Users can browse, search, and filter properties by price, type, or location. It functions as a lightweight Zillow/OLX-style platform with integrated ratings and reviews..",
    live: "https://projectplacio.netlify.app/",
    repo: "https://github.com/Riad-Zz/Placio ",
    images: [PlacioHome, PlacioProduct, PlacioCrud],
    highlights: [
      {
        icon: <Lock size={16} />,
        label: "Auth",
        detail: "JWT-based authentication with Admin, Moderation.",
      },
      {
        icon: <Zap size={16} />,
        label: "CRUD Flow",
        detail: "Create, update, and manage data with protected routes.",
      },
    ],
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Leafly",
    subtitle: "Community-Driven Reporting Platform",
    description:
      "Leafly is an interactive web application designed for indoor plant enthusiasts. It combines a plant marketplace, educational resources, and personalized user profiles in one seamless platform.",
    live: "https://projectleafly.netlify.app/",
    repo: "https://github.com/Riad-Zz/Leafly",
    images: [LeaflyHome, LeaflyProduct, LeaflyProfile],
    highlights: [
      {
        icon: <Zap size={16} />,
        label: "Realtime Updates",
        detail: "Firebase-powered updates for dynamic user interaction.",
      },
      {
        icon: <Lock size={16} />,
        label: "Secure Access",
        detail: "Protected routes with persistent login sessions.",
      },
      {
        icon: <BarChart3 size={16} />,
        label: "User Profiles",
        detail: "Personalized dashboards and activity views.",
      },
    ],
    accent: "from-emerald-500/20 to-teal-500/20",
  },
];

const ShufflingGallery = ({ images }) => {
  const [imgList, setImgList] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgList((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[220px] sm:h-[300px] md:h-[500px] w-full flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {imgList.map((src, index) => {
          const isFront = index === 0;
          const isMiddle = index === 1;

          return (
            <motion.div
              key={src}
              layout
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: isFront ? 1 : isMiddle ? 0.6 : 0.3,
                scale: isFront ? 1 : isMiddle ? 0.92 : 0.85,
                zIndex: isFront ? 30 : isMiddle ? 20 : 10,
                rotate: isFront ? 0 : isMiddle ? 4 : -6,
                x: isFront ? 0 : isMiddle ? 20 : -20,
                y: isFront ? 0 : isMiddle ? -10 : 12,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="absolute w-[90%] aspect-video rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-md"
            >
              <img
                src={src}
                alt="Project Screenshot"
                className="w-full h-full object-cover"
              />
              {!isFront && (
                <div className="absolute inset-0 bg-base-100/40 backdrop-blur-sm" />
              )}
              {isFront && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const container = useRef();
  const [typeEffect] = useTypewriter({
    words: ["Building real projects.", "Learning by shipping.", "Beyond the console."],
    loop: 1,
    typeSpeed: 65,
  });

  useGSAP(
    () => {
      gsap.from(".project-card", {
        rotateX: -12,
        y: 120,
        opacity: 0,
        duration: 1.1,
        stagger: 0.35,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".project-grid",
          start: "top 75%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      id="projects"
      ref={container}
      className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="mb-14 md:mb-24 space-y-4 text-center lg:text-left">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter">
          Featured <span className="text-primary italic">Projects.</span>
        </h2>
        <div className="text-lg sm:text-2xl md:text-3xl font-bold text-base-content/60">
          {typeEffect}
          <Cursor />
        </div>
      </div>

      <div className="project-grid grid grid-cols-1 gap-16 md:gap-40">
        {projectData.map((project, idx) => (
          <motion.div
            key={idx}
            className={`project-card p-6 sm:p-10 md:p-16 rounded-3xl bg-gradient-to-br ${project.accent} border border-white/10 backdrop-blur-3xl shadow-2xl`}
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 md:gap-16 items-center">
              <div className="space-y-6 order-2 lg:order-1 text-center lg:text-left">
                <div>
                  <h3 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-primary tracking-widest uppercase opacity-80 mt-2">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-base sm:text-xl leading-relaxed opacity-70">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-base-100/40 border border-white/5 backdrop-blur-md"
                    >
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 text-primary">
                        {item.icon}
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-[12px] opacity-60 leading-snug">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary rounded-full px-8 shadow-xl shadow-primary/30"
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline rounded-full px-8"
                  >
                    Source Code <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <ShufflingGallery images={project.images} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
