import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Lucide Icons
import { Server, Database, ShieldCheck } from "lucide-react";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiStripe,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiPostman,
  SiExpress,
  SiDocker
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();
  const [typeEffect] = useTypewriter({
  words: ["Engineering production-ready web applications."],
  loop: 1,
  typeSpeed: 70,
});

  useGSAP(() => {
    gsap.from(".reveal-item", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }, { scope: container });

  const skills = [
    { icon: <SiHtml5 />, label: "HTML", color: "text-[#E34F26]" },
    { icon: <SiCss3 />, label: "CSS", color: "text-[#1572B6]" },
    { icon: <SiJavascript />, label: "JS", color: "text-[#F7DF1E]" },
    { icon: <SiReact />, label: "React", color: "text-[#61DAFB]" },
    { icon: <SiNodedotjs />, label: "Node", color: "text-[#339933]" },
    { icon: <SiExpress />, label: "Express", color: "text-[#000000]" },
    { icon: <SiMongodb />, label: "MongoDB", color: "text-[#47A248]" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "text-[#06B6D4]" },
    { icon: <SiFirebase />, label: "Firebase", color: "text-[#FFCA28]" },
    { icon: <SiStripe />, label: "Stripe", color: "text-[#635BFF]" },
    { icon: <SiJsonwebtokens />, label: "JWT", color: "text-base-content" },
    { icon: <SiGit />, label: "Git", color: "text-[#F05032]" },
    { icon: <SiGithub />, label: "GitHub", color: "text-blue" },
    { icon: <SiPostman />, label: "Postman", color: "text-[#FF6C37]" },
    { icon: <SiDocker />, label: "Docker", color: "text-[#0db7ed]" },
    { icon: <Database />, label: "NoSQL", color: "text-primary" },
  ];

  return (
    <section
      id="about"
      ref={container}
      className="py-16 md:py-32 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[80px] md:blur-[120px] rounded-full -z-10 animate-pulse" />

      {/* Header Section */}
      <div className="mb-12 md:mb-24 reveal-item">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none">
          About the <span className="text-primary italic">Developer.</span>
        </h2>
        <div className="text-lg sm:text-2xl md:text-3xl font-bold text-base-content/60 mt-4">
          {typeEffect}<Cursor cursorStyle="_" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

        {/* About Me Text */}
        <div className="reveal-item col-span-1 md:col-span-6 p-6 sm:p-10 md:p-12 rounded-xl md:rounded-xl bg-base-100/5 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-black text-primary mb-4">About Me</h3>
          <p className="text-base sm:text-lg md:text-xl opacity-80 leading-relaxed">
            Hi, my name is Riadul Islam Riad .I am a MERN Stack Developer building full-stack web applications using React, Node.js, Express, MongoDB, and modern tools like Tailwind CSS and DaisyUI. I enjoy creating intuitive frontends and exploring backend development, including JWT authentication and Firebase integration.I am eager to learn new technologies and apply them to build scalable, practical web applications that solve meaningful problems.
          </p>
        </div>

        {/* Highlights / Achievements */}
        {/* <div className="reveal-item col-span-1 md:col-span-6 p-6 sm:p-10 md:p-12 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-white/10 shadow-2xl flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-black text-primary mb-6">Highlights</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {[
              { label: "Projects Completed", value: "25+" },
              { label: "GitHub Contributions", value: "500+" },
              { label: "Clients Worked With", value: "10+" },
              { label: "Certifications", value: "5" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col justify-center items-center bg-base-100/10 backdrop-blur-md p-4 rounded-2xl shadow-lg text-center">
                <span className="text-2xl md:text-4xl font-black text-primary">{item.value}</span>
                <span className="text-sm md:text-base opacity-70">{item.label}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Security-First Development */}
        <div className="reveal-item col-span-1 md:col-span-6 p-6 sm:p-10 md:p-12 rounded-xl md:rounded-2xl bg-base-100/5 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col justify-between">

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              Security-First Development
            </h3>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg opacity-80 leading-relaxed mb-8">
            I treat security as a core part of application design — not an afterthought.
            From authentication to API protection, I build systems with real-world usage
            and common attack vectors in mind.
          </p>

          {/* Principles */}
          <ul className="space-y-4">
            {[
              "JWT-based authentication & protected routes",
              "Role-based access control (RBAC)",
              "Secure handling of environment variables",
              "Backend validation & safe API design",
              "Payment & auth flow awareness (Stripe, Firebase)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm sm:text-base opacity-75 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>


        {/* Skills Section */}
        <div className="reveal-item col-span-1 md:col-span-12 p-6 sm:p-10 md:p-12 rounded-xl md:rounded-2xl bg-base-100/10 backdrop-blur-3xl border border-white/10 relative overflow-hidden group">

          {/* Text Description */}
          <div className="mb-10 text-center relative z-10">
            <div className="flex flex-col items-center gap-3 text-primary">
              <Server size={36} className="animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">Skills</h3>
            </div>
            <p className="mt-4 text-base sm:text-lg md:text-xl font-semibold opacity-80 leading-relaxed max-w-3xl mx-auto">
              I leverage a comprehensive MERN stack toolkit along with modern web technologies to build production-ready, scalable, and visually appealing web applications.
            </p>
          </div>

          {/* Skill Icons Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 sm:gap-6 md:gap-8 justify-items-center p-2 md:p-4">
            {skills.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  y: -10,
                  scale: 1.15,
                  rotate: 5,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.2)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.05 }}
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl backdrop-blur-md cursor-pointer ${item.color} shadow-lg relative group/icon`}
              >
                {item.icon}
                <span className="absolute -bottom-5 text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase opacity-0 group-hover/icon:opacity-70 transition-opacity text-center w-full">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

          <Database className="absolute -bottom-12 -left-12 md:-bottom-20 md:-left-20 text-[15rem] md:text-[25rem] opacity-[0.02] -z-10 group-hover:rotate-12 transition-transform duration-1000" />
        </div>

      </div>
    </section>
  );
};

export default About;
