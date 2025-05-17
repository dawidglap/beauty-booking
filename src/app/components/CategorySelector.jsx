"use client";

import { motion } from "framer-motion";

export default function CategorySelector() {
    return (
        <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-pink-600"
        >
            Framer Motion funziona ✨
        </motion.h1>
    );
}
