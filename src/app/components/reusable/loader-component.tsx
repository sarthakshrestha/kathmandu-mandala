"use client";
import { Loader2 } from "lucide-react";

const LoaderComponent = () => (
  <div className="absolute inset-0 flex items-center justify-center bg-transparent z-50">
    <Loader2 className="animate-spin w-10 h-10 text-zinc-800" />
  </div>
);

export default LoaderComponent;
