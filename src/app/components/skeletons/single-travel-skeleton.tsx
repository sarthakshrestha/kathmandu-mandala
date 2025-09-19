import { Skeleton } from "@/components/ui/skeleton";

export default function SingleTravelSkeleton() {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-2 sm:px-0 max-sm:px-8 bg-[#FFF9EE]">
      <div className="flex flex-col gap-8">
        <Skeleton className="w-full h-[250px] sm:h-[400px] rounded-xl" />
        <Skeleton className="h-10 w-full mb-4" />
        <Skeleton className="h-6 w-full mb-6" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
