import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
    { label: "Inicio", to: "/" },
    { label: "Galería", to: "/gallery" },
    { label: "Contacto", to: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    // Cerrar con ESC
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);


    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <>
            {/* Botón menú */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 left-6 z-50  text-2xl md:text-3xl"
                aria-label="Toggle menu"
            >
                {/* Contorno blanco desplazado */}
                <span className="absolute inset-0 translate-x-1 translate-y-1 text-white pointer-events-none">
                    {isOpen ? "✕" : "☰"}
                </span>

                {/* Símbolo principal */}
                <span className="relative text-black">
                    {isOpen ? "✕" : "☰"}
                </span>
            </button>

            {/* Menú fullscreen */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-white text-black flex items-center justify-center"
                    >
                        <ul className="space-y-8 text-center">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.to}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.4,
                                        ease: "easeOut",
                                    }}
                                >
                                    <Link
                                        to={item.to}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl md:text-6xl font-light tracking-tight hover:opacity-60 transition-opacity"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}