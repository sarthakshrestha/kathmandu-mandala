import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Component2Skeleton() {
  return (
    <section className="relative py-24 max-sm:py-12 max-sm:px-4 px-2 sm:px-6 lg:px-18 overflow-hidden bg-[#FFF9EE]">
      {/* Decorative background pattern */}
      <Image
        src="/images/background/BackgroundPattern.png"
        alt="Background Pattern"
        fill
        className="object-cover object-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
        priority
      />
      <div className="relative z-10 max-w-7xl px-18 max-sm:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} className="w-full h-48 rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
