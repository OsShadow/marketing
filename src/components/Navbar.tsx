import { motion,  AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const logos = [
    "/images/1.jfif",
    "/images/2.jfif",
    "/images/3.jfif",
    "/images/4.jfif",
    "/images/5.jfif",
    "/images/6.jfif",
];

const glitchVariants = {
    initial: {
        opacity: 0,
        x: 0,
        filter: "blur(2px)",
    },
    animate: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
    },
    exit: {
        opacity: .5,
        x: [-40, 40, -30, 30, 0],
        filter: "blur(5px)",
        transition: { duration: 0.20 },
    },
};

export default function Navbar() {
    // const { scrollY } = useScroll();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % logos.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);


    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-6 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2  rounded-2xl bg-black/70 backdrop-blur-md border border-black/10"
        >
            <div className="flex items-center justify-between px-6 py-4">
                <span className="text-sm font-light tracking-wide ">

                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={logos[index]}
                            alt="Logo"
                            className="w-15"
                            variants={glitchVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        />
                    </AnimatePresence>


                </span>


                <ul className="flex gap-6 text-xs uppercase tracking-widest text-white-600">
                    <li className="cursor-point er hover:text-black transition">
                        <a href="#home" className="relative after:absolute after:left-0 after:-bottom-1
             after:h-px after:w-0 after:bg-black
             hover:after:w-full after:transition-all">
                            Home
                        </a>
                    </li>
                    <li className="cursor-pointer hover:text-black transition">
                        <a href="#gallery" className="relative after:absolute after:left-0 after:-bottom-1
             after:h-px after:w-0 after:bg-black
             hover:after:w-full after:transition-all">
                            Galeria
                        </a>
                    </li>
                    <li className="cursor-pointer hover:text-black transition">
                        <a href="#contact" className="relative after:absolute after:left-0 after:-bottom-1
             after:h-px after:w-0 after:bg-black
             hover:after:w-full after:transition-all">
                            Contacto
                        </a>
                    </li>
                </ul>
            </div>
        </motion.nav>
    );
}