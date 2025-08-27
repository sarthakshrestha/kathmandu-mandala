"use client";
import { Book, Menu, Sunset, Trees, Zap, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSelector from "./language-selector";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu = [
    // { title: "Home", url: "#" },
    {
      title: "Travel & Services",
      url: "#",
      items: [
        {
          title: "Blog",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Company",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Information & Promotion",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Our Shop",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },

    {
      title: "Contact Us",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="absolute top-0 left-0 w-full z-30">
      <nav className="relative bg-black/30">
        <div className="relative max-w-screen-3xl mx-auto flex items-center justify-between h-20 px-4 lg:px-12 max-lg:hidden">
          {" "}
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2 z-10 flex-row">
            <span className="text-3xl font-garamond tracking-tighter text-[#FFD868]">
              <img
                src="/images/icons/WhiteLogoHorizontal.svg"
                alt="Mandala Logo"
                className="w-auto h-72"
              />
            </span>
          </a>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 ml-10 z-10 ">
            <NavigationMenu>
              <NavigationMenuList className="bg-transparent">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Right Side */}
          <div className="flex items-center space-x-4 z-10">
            {/* Language */}
            <div className="mx-4">
              <LanguageSelector />
            </div>
            {/* Contact Box */}
            <div className="bg-[#4B2323] text-white rounded-lg px-4 py-2 flex items-center space-x-3 max-sm:hidden">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-links text-xs">Haben Sie Fragen?</div>
                <div className="font-links font-semibold ">
                  (+977)-98123456789
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-end px-4 py-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-transparent hover:bg-transparent"
                >
                  <Menu className="size-4 bg-none text-white hover:bg-transparent" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto ">
                <SheetHeader>
                  <SheetTitle className="font-garamond  text-3xl">
                    <img
                      src="/images/icons/DarkLogoHorizontal.svg"
                      alt="Mandala Logo"
                      className="w-36 h-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4 bg-none text-zinc-900"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  {/* <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="bg-none">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="bg-transparent">
        <NavigationMenuTrigger className=" bg-transparent text-white  flex items-center gap-2 hover:text-zinc-500">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground flex gap-2 p-6">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              asChild
              key={subItem.title}
              className="sm:max-w-3xl"
            >
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="font-links bg-transparent text-white text-base hover:text-yellow-300 group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md ">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted flex-col hover:text-accent-foreground flex select-none gap-4 rounded-md p-4 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className=" font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug mt-4">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
