"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { salons } from "@/data/services";

const salonSlug = "lafame";
const categories = salons[salonSlug].categories;

export default function CategoryPage() {
    const { slug } = useParams();
    const category = categories.find((c) => c.slug === slug);

    if (!category) return <div className="p-6 text-center">Brak kategorii.</div>;

    if (category.hasGenderSplit) {
        return (
            <main className="min-h-screen bg-white p-6 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-6">{category.label}</h1>
                <div className="flex flex-col gap-4 w-full max-w-sm">
                    {Object.entries(category.genders).map(([key, gender]) => (
                        <Link
                            key={key}
                            href={`/kategoria/${slug}/${key}`}
                            className="bg-pink-100 text-center py-4 rounded-xl text-lg font-medium hover:bg-pink-200 transition"
                        >
                            {gender.label}
                        </Link>
                    ))}
                </div>
            </main>
        );
    }

    // Flat service list
    return (
        <main className="min-h-screen bg-white p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">{category.label}</h1>
            <div className="flex flex-col gap-4 w-full max-w-sm">
                {category.services?.length > 0 ? (
                    category.services.map((service, idx) => (
                        <a
                            key={idx}
                            href={service.url}
                            className="bg-pink-100 text-center py-4 rounded-xl text-lg font-medium hover:bg-pink-200 transition"
                        >
                            {service.name}
                        </a>
                    ))
                ) : (
                    <p className="text-gray-500">Brak usług.</p>
                )}
            </div>
        </main>
    );
}
