"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { salons } from "@/data/services";

const salonSlug = "lafame";
const categories = salons[salonSlug].categories;

export default function CategoryGrid() {
    return (
        <div
            className="relative min-h-screen w-full"
            style={{
                background: "linear-gradient(to bottom right, #fcf0f4, #f5c9d8)",
            }}
        >
            {/* Logo in alto a destra */}
            <div className="absolute top-6 right-6 z-10">
                <Image
                    src="/images/logo.png"
                    alt="Salon La Fame Logo"
                    width={150}
                    height={80}
                    className="object-contain"
                    priority
                />
            </div>

            <motion.section
                className="px-4 py-10 max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
                <h1 className="font-extrabold text-4xl md:text-center text-pink-900 mb-6">
                    Usługi
                </h1>
                <hr className="border-pink-300 mb-10 md:mx-auto w-full" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.slug}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <Link
                                href={`/kategoria/${cat.slug}`}
                                className="block rounded-2xl overflow-hidden shadow-md group"
                            >
                                <div className="relative h-32 sm:h-52 md:h-60 w-full transition-transform group-hover:scale-105">
                                    <Image
                                        src={cat.image}
                                        alt={cat.label}
                                        fill
                                        className="object-cover object-center"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/60 flex items-center justify-end px-6">
                                        <span className="text-white font-semibold text-xl sm:text-2xl">
                                            {cat.label}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
