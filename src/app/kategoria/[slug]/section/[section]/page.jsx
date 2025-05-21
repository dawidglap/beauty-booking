"use client";

import { useParams } from "next/navigation";
import { salons } from "@/data/services";

const salonSlug = "lafame";
const categories = salons[salonSlug].categories;

export default function SubsectionPage() {
    const { slug, section } = useParams();
    const category = categories.find((c) => c.slug === slug);

    if (!category || !category.subsections) {
        return <div className="p-6 text-center">Nie znaleziono kategorii lub sekcji.</div>;
    }

    const sectionIndex = parseInt(section.replace("sekcja-", ""), 10);
    const subsection = category.subsections[sectionIndex];

    if (!subsection) {
        return <div className="p-6 text-center">Sekcja nie istnieje.</div>;
    }

    return (
        <main className="min-h-screen bg-white p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">{subsection.title}</h1>
            <div className="flex flex-col gap-4 w-full max-w-sm">
                {subsection.services.length > 0 ? (
                    subsection.services.map((service, idx) => (
                        <a
                            key={idx}
                            href={service.url || "#"}
                            className="bg-pink-100 text-center py-4 px-4 rounded-xl text-lg font-medium hover:bg-pink-200 transition flex flex-col"
                        >
                            <span className="text-base">{service.name}</span>
                            {service.price && (
                                <span className="text-sm text-pink-700 font-semibold mt-1">
                                    {service.price}
                                </span>
                            )}
                        </a>
                    ))
                ) : (
                    <p className="text-gray-500">Brak usług w tej sekcji.</p>
                )}
            </div>
        </main>
    );
}
