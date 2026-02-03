// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";



export default function Hero() {
  // const [index, setIndex] = useState(0);


  return (
    <section id="home" className=" relative h-screen flex flex-col items-center justify-center bg-black">
      <video
        src="/video/intro.mp4"
        autoPlay
        loop
        // muted
        playsInline
        className="
          w-full h-full
          object-contain
          md:object-cover
        "
      />

      {/* Overlay opcional para legibilidad */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Contenido encima */}
      {/* <div className="relative z-10 text-white text-center">
        <p className="text-sm tracking-widest uppercase">
          Visual storytelling
        </p>
      </div> */}
    </section>
  );
}