"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Grid2x2 } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
interface GalleryPortalProps {
  images: string[];
  alt?: string;
}

export default function GalleryPortal({
  images,
  alt = "Gallery Image",
}: GalleryPortalProps) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div
      className="w-full max-w-7xl mx-auto"
      style={{ height: "80vh", maxHeight: "40vh" }}
    >
      <div className="bg-[#FCF8F2] rounded-2xl p-2 md:p-4 flex flex-col items-center justify-center h-full">
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-2 md:gap-4 w-full h-full">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div
                className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 rounded-xl overflow-hidden cursor-pointer relative h-full"
                onClick={() => {
                  setActiveIdx(0);
                  setOpen(true);
                }}
              >
                <Image
                  src={images[0]}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 bg-transparent flex items-center justify-center">
              {/* Accessible DialogTitle */}
              <VisuallyHidden>
                <DialogTitle>{alt}</DialogTitle>
              </VisuallyHidden>
              {/* Carousel for images */}
              <Carousel
                opts={{ startIndex: activeIdx, loop: true }}
                className="w-full"
                setApi={(api) => {
                  if (api) {
                    api.on("select", () =>
                      setActiveIdx(api.selectedScrollSnap())
                    );
                  }
                }}
              >
                <CarouselContent>
                  {images.map((img, idx) => (
                    <CarouselItem key={img}>
                      <div className="relative w-full h-[60vh] flex items-center justify-center">
                        <Image
                          src={img}
                          alt={alt}
                          fill
                          className="object-contain rounded-xl bg-black"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </DialogContent>
          </Dialog>
          {/* Small images right */}
          {images.slice(1, 5).map((img, idx) => (
            <Dialog
              key={idx + 1}
              open={open && activeIdx === idx + 1}
              onOpenChange={setOpen}
            >
              <DialogTrigger asChild>
                <div
                  className="rounded-xl overflow-hidden cursor-pointer relative aspect-square h-full"
                  onClick={() => {
                    setActiveIdx(idx + 1);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-contain w-full h-full"
                  />
                  {/* Show all photos button on last image */}
                  {idx === 3 && images.length > 5 && (
                    <div className="absolute bottom-2 right-2 z-10">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 bg-white/80 text-[#23233B] shadow"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIdx(4);
                          setOpen(true);
                        }}
                      >
                        <Grid2x2 className="w-4 h-4" />
                        Show all photos
                      </Button>
                    </div>
                  )}
                </div>
              </DialogTrigger>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
