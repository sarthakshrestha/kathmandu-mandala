"use client";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface TourCard {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface MoreToursPortalProps {
  tours: TourCard[];
  sectionTitle?: string;
}

export default function MoreToursPortal({
  tours,
  sectionTitle = "More Tours",
}: MoreToursPortalProps) {
  return (
    <section className="w-full #F7ECD8 rounded-xl p-4 md:p-8">
      <h2 className="font-garamond font-semibold text-lg md:text-2xl mb-4">
        {sectionTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tours.map((tour, idx) => (
          <Card key={idx} className="bg-white rounded-xl shadow-sm px-4">
            <div className="w-full h-48 rounded-xl overflow-hidden relative ">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex flex-col gap-2 px-0">
              <CardTitle className="font-garamond font-semibold text-lg mb-1">
                {tour.title}
              </CardTitle>
              <CardDescription className="text-[#23233B] text-base mb-2">
                {tour.description}
              </CardDescription>
              <span className="text-[#B94B4B] font-garamond text-lg font-medium">
                {tour.price}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
