import { Skeleton } from "@/components/ui/skeleton";

export default function TravelSkeleton() {
  return (
    <section className="relative py-10 max-sm:py-12 max-sm:px-4 px-2 sm:px-6 pb-24 lg:px-18 overflow-hidden bg-[#FFF9EE]">
      <div className="relative z-10 max-w-7xl px-18 max-sm:px-8 mx-auto">
        <div className="text-center mb-2">
          <Skeleton className="h-8 w-full mx-auto mb-2" />
        </div>
        <Skeleton className="h-12 w-full mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(3)].map((_, idx) => (
            <Skeleton key={idx} className="w-full h-48 rounded-lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
