"use client";

import { useParams } from "next/navigation";
import { salons } from "@/data/services";

const salonSlug = "lafame";
const categories = salons[salonSlug].categories;

export default function GenderServicesPage() {
    const { slug, gender } = useParams();
    const category = categories.find((c) => c.slug === slug);

    if (!category || !category.genders?.[gender]) {
        return <div className="p-6 text-center">Nie znaleziono usług.</div>;
    }

    const section = category.genders[gender];

    return (
        <main className="min-h-screen bg-white p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">
                {category.label} – {section.label}
            </h1>

            <div className="flex flex-col gap-6 w-full max-w-sm">
                {section.subsections.map((sub, i) => (
                    <div key={i} className="w-full">
                        <h2 className="text-xl font-semibold mb-2">{sub.title}</h2>
                        <div className="flex flex-col gap-3">
                            {sub.services.map((service, idx) => (
                                <a
                                    key={idx}
                                    href={service.url || "#"}
                                    className="bg-pink-100 text-center py-4 px-4 rounded-xl text-lg font-medium hover:bg-pink-200 transition flex flex-col"
                                >
                                    <span>{service.name}{service.variant ? ` – ${service.variant}` : ""}</span>
                                    {service.price && (
                                        <span className="text-sm text-pink-700 font-semibold mt-1">
                                            {service.price}
                                        </span>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
