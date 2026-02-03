import { motion, useScroll, useTransform } from "framer-motion";


const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", alt: "Foto 1" },
    // { id: 2, src: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4", alt: "Foto 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429", alt: "Foto 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", alt: "Foto 4" },
    { id: 5, src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc", alt: "Foto 5" },
    // { id: 6, src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde", alt: "Foto 6" },
];


export default function Gallery() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -200]);


    return (
        <section id="gallery" className="bg-black text-white px-6 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    style={{ y }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center text-3xl md:text-4xl font-light tracking-tight"
                >
                    Lo que hacemos
                </motion.h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="group relative overflow-hidden"
                        >
                            <img
                                src={`${photo.src}?auto=format&fit=crop&w=800&q=80`}
                                alt={photo.alt}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                loading="lazy"
                            />


                            {/* Overlay hover */}
                            <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/30" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}