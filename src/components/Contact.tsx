import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center text-black bg-white px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full max-w-md"
            >
                {/* Título */}
                <h2 className="text-2xl font-light tracking-wide text-black">
                    Contact
                </h2>

                {/* Texto */}
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    If you’d like to collaborate, commission a project, or just say hello,
                    feel free to reach out.
                </p>

                {/* Formulario */}
                <form className="mt-8 flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border-b placeholder-gray-400 border-black/20 bg-transparent py-2 text-sm focus:outline-none focus:border-black transition"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="border-b placeholder-gray-400 border-black/20 bg-transparent py-2 text-sm focus:outline-none focus:border-black transition"
                    />

                    <textarea
                        placeholder="Message"
                        rows={3}
                        className="border-b placeholder-gray-400 border-black/20 bg-transparent py-2 text-sm resize-none focus:outline-none focus:border-black transition"
                    />

                    <button
                        type="submit"
                        className="mt-6 self-start text-sm tracking-widest uppercase text-black hover:opacity-60 transition"
                    >
                        Send message
                    </button>
                </form>
            </motion.div>
        </section>
    );
}