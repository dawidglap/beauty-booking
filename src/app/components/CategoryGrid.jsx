"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { salons } from "@/data/services";

const salonSlug = "lafame";
const categories = salons[salonSlug].categories;

export default function CategoryGrid() {
    return (
        <motion.div
            className="flex flex-col gap-4 px-6 py-12 max-w-sm w-full mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.1 } },
            }}
        >
            {categories.map((cat) => (
                <motion.div
                    key={cat.slug}
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                >
                    <Link
                        href={`/kategoria/${cat.slug}`}
                        className="block bg-pink-100 text-pink-900 font-semibold rounded-xl text-center py-4 text-lg hover:bg-pink-200 transition"
                    >
                        {cat.label}
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
}
