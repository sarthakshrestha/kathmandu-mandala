import { Skeleton } from "@/components/ui/skeleton";

export default function Component1Skeleton() {
  return (
    <section className="px-18 py-16 max-sm:py-12 flex items-center justify-center max-sm:px-4 bg-transparent">
      <div className="mx-auto flex flex-col md:flex-row gap-10 items-center w-full px-12 max-sm:px-8">
        <div className="flex-1 w-full">
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-6" />
          <Skeleton className="h-8 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-6" />
          <Skeleton className="h-10 w-1/2 mb-6" />
          <Skeleton className="h-12 w-1/3 mb-6" />
          <Skeleton className="h-10 w-1/4 mb-6" />
          <Skeleton className="h-12 w-full mb-6" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:w-[700px] md:h-[800px] max-sm:hidden">
          <Skeleton className="w-full h-full rounded" />
        </div>
      </div>
    </section>
  );
}
