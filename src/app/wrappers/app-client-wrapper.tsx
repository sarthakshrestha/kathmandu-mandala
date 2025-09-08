"use client";
import { useInitialLocale } from "@/lib/use-initial-locale";
export default function AppClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useInitialLocale();
  return <>{children}</>;
}
