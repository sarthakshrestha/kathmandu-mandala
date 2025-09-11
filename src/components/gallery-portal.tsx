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

  const renderMobileLayout = () => (
    <div className="max-sm:block hidden w-full h-full">
      <Carousel
        opts={{ loop: true }}
        className="w-full h-full"
        setApi={(api) => {
          if (api) {
            api.on("select", () => setActiveIdx(api.selectedScrollSnap()));
          }
        }}
      >
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={`${img}-${idx}`}>
              <div
                className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden"
                onClick={() => {
                  setActiveIdx(idx);
                  setOpen(true);
                }}
              >
                <Image
                  src={img}
                  alt={`${alt} ${idx + 1}`}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );

  // Handle different layouts based on image count
  const renderImageLayout = () => {
    if (images.length === 0) return null;

    return (
      <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full h-full max-sm:hidden">
        {/* Large main image - takes 2 columns and 2 rows */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div
              className="col-span-2 row-span-2 rounded-xl overflow-hidden cursor-pointer relative group"
              onClick={() => {
                setActiveIdx(0);
                setOpen(true);
              }}
            >
              <Image
                src={images[0]}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-4xl w-full p-0 bg-zinc-950 border-none">
            <VisuallyHidden>
              <DialogTitle>{alt}</DialogTitle>
            </VisuallyHidden>
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
                  <CarouselItem key={`${img}-${idx}`}>
                    <div className="relative w-full h-[70vh] flex items-center justify-center">
                      <Image
                        src={img}
                        alt={`${alt} ${idx + 1}`}
                        fill
                        className="object-contain rounded-xl"
                        sizes="90vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </DialogContent>
        </Dialog>

        {/* Top right images */}
        {images.slice(1, 3).map((img, idx) => (
          <Dialog key={`top-${idx + 1}`} open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div
                className="col-span-1 row-span-1 rounded-xl overflow-hidden cursor-pointer relative group"
                onClick={() => {
                  setActiveIdx(idx + 1);
                  setOpen(true);
                }}
              >
                <Image
                  src={img}
                  alt={`${alt} ${idx + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </DialogTrigger>
          </Dialog>
        ))}

        {/* Bottom right images */}
        {images.slice(3, 5).map((img, idx) => {
          const imageIndex = idx + 3;
          const isLastVisible = imageIndex === 4 && images.length > 5;

          return (
            <Dialog
              key={`bottom-${imageIndex}`}
              open={open}
              onOpenChange={setOpen}
            >
              <DialogTrigger asChild>
                <div
                  className="col-span-1 row-span-1 rounded-xl overflow-hidden cursor-pointer relative group"
                  onClick={() => {
                    setActiveIdx(imageIndex);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={img}
                    alt={`${alt} ${imageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Show all photos overlay on last visible image */}
                  {isLastVisible && (
                    <div className="absolute inset-0 bg-black/50 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-2 bg-white/90 hover:bg-white text-black backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIdx(5);
                          setOpen(true);
                        }}
                      >
                        <Grid2x2 className="w-4 h-4" />
                        Show all photos
                      </Button>
                    </div>
                  )}

                  {/* Always show button if there are more photos */}
                  {isLastVisible && (
                    <div className="absolute bottom-3 right-3 z-10">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-2 bg-white/90 hover:bg-white text-black backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIdx(5);
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
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-transparent rounded-2xl p-3 md:p-6 border border-slate-200/50 lg:h-[60vh] lg:min-h-[400px]">
        {images.length > 0 ? (
          <>
            {renderMobileLayout()}
            <div className="max-sm:hidden w-full h-full">
              {renderImageLayout()}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-slate-500">
            No images to display
          </div>
        )}
      </div>
    </div>
  );
}
