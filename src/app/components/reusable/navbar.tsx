"use client";
import { Book, Menu, Sunset, Trees, Zap, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "@/app/hooks/use-translation";
import { useTranslationStore } from "@/app/store/translation-store";
import { MailIcon, PhoneCallIcon } from "lucide-react";
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
import { Plane, Send, Utensils, Globe, Gift } from "lucide-react";
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
    url: "#",
    src: "#",
    alt: "logo",
    title: "#",
  },
}: Navbar1Props) => {
  const { t, locale, isLoaded } = useTranslation();

  if (!isLoaded) {
    return null;
  }

  const menu = [
    {
      title: t("navbar_menu_travel_services"),
      url: "#",
      items: [
        {
          title: t("navbar_menu_visa_service"),
          description: t("navbar_menu_visa_service_desc"),
          icon: <Book className="size-5 shrink-0" />,
          url: "/visa",
        },
        {
          title: t("navbar_menu_travel_offers"),
          description: t("navbar_menu_travel_offers_desc"),
          icon: <Plane className="size-5 shrink-0" />,
          url: "/travel",
        },
        // {
        //   title: t("navbar_menu_courier_service"),
        //   description: t("navbar_menu_courier_service_desc"),
        //   icon: <Send className="size-5 shrink-0" />, // Courier Service
        //   url: "#",
        // },
      ],
    },
    {
      title: t("navbar_menu_food_dining"),
      url: "#",
      items: [
        {
          title: t("navbar_menu_restaurant"),
          description: t("navbar_menu_restaurant_desc"),
          icon: <Utensils className="size-5 shrink-0" />, // Restaurant
          url: "/restaurant",
        },
      ],
    },
    {
      title: t("navbar_menu_information_promotion"),
      url: "#",
      items: [
        {
          title: t("navbar_menu_about"),
          description: t("navbar_menu_about_desc"),
          icon: <Book className="size-5 shrink-0" />, // About
          url: "/about",
        },
        // {
        //   title: t("navbar_menu_about_nepal"),
        //   description: t("navbar_menu_about_nepal_desc"),
        //   icon: <Globe className="size-5 shrink-0" />, // About Nepal
        //   url: "#",
        // },
        // {
        //   title: t("navbar_menu_product_showcase"),
        //   description: t("navbar_menu_product_showcase_desc"),
        //   icon: <Gift className="size-5 shrink-0" />, // Product Showcase
        //   url: "#",
        // },
      ],
    },
    {
      title: t("navbar_menu_contact_us"),
      url: "/contact",
      icon: <Phone className="size-5 shrink-0" />, // Contact Us
    },
  ];
  return (
    <section className="sticky top-0 left-0 w-full z-30">
      <nav className=" bg-black/60 backdrop-blur-[24px] max-sm:backdrop-blur-[24px] sticky">
        <div className="relative max-w-screen-3xl mx-auto flex items-center justify-between h-20 px-4 lg:px-12 max-lg:hidden">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 z-10 flex-row">
            <span className="text-3xl font-garamond tracking-tighter text-[#FFD868]">
              <img
                src="/images/icons/WhiteLogoHorizontal.svg"
                alt={t("navbar_logo_alt")}
                className="w-36 h-auto"
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

          <div className="flex items-center space-x-2 z-10">
            <a
              href="/contact"
              aria-label={t("contact_tab_contact")}
              className="rounded-lg border border-[#e5e5e5] bg-white text-[#23233B] hover:bg-[#9A2731] hover:text-white transition flex items-center justify-center p-2"
            >
              <MailIcon className="size-6" />
            </a>
            <a
              href="/contact?schedule=1"
              aria-label={t("contact_tab_schedule")}
              className="rounded-lg border border-[#e5e5e5] bg-white text-[#23233B] hover:bg-[#9A2731] hover:text-white transition flex items-center justify-center p-2"
            >
              <PhoneCallIcon className="size-6" />
            </a>
            <div className="mx-4">
              <LanguageSelector />
            </div>
            <div className="bg-[#4B2323] text-white rounded-lg py-2 px-1 flex items-center space-x-3 max-sm:hidden">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-links text-xs">
                  {t("navbar_questions")}
                </div>
                <div className="font-links font-semibold text-sm">
                  {t("navbar_phone")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Left: Contact & Schedule Buttons */}
            <div className="flex items-center">
              <a
                href="/contact"
                aria-label={t("contact_tab_contact")}
                className="rounded-lg border border-[#e5e5e5] bg-white text-[#23233B] hover:bg-[#9A2731] hover:text-white transition flex items-center justify-center p-2 mr-2"
              >
                <MailIcon className="size-4" />
              </a>
              <a
                href="/contact?schedule=1"
                aria-label={t("contact_tab_schedule")}
                className="rounded-lg border border-[#e5e5e5] bg-white text-[#23233B] hover:bg-[#9A2731] hover:text-white transition flex items-center justify-center p-2 mr-2"
              >
                <PhoneCallIcon className="size-4" />
              </a>
            </div>
            {/* Right: Hamburger Menu */}
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
                  <SheetTitle className="font-garamond text-3xl">
                    <a href="/" className="block">
                      <img
                        src="/images/icons/DarkLogoHorizontal.svg"
                        alt={t("navbar_logo_alt")}
                        className="w-36 h-auto"
                      />
                    </a>
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
                  {/* Language Switcher Buttons for mobile */}
                  <div className="flex flex-row items-center gap-2 relative">
                    <Button
                      type="button"
                      onClick={() =>
                        useTranslationStore.getState().setLocale("de")
                      }
                      className="px-5 py-4 border-2 rounded-3xl font-semibold bg-transparent shadow-none hover:bg-transparent text-[#23233B] font-links text-base focus:outline-none focus:ring-2 focus:ring-[#FFD868] transition"
                    >
                      🇩🇪 DE
                    </Button>
                    <Button
                      type="button"
                      onClick={() =>
                        useTranslationStore.getState().setLocale("en")
                      }
                      className="px-5 py-4 border-2 rounded-3xl bg-transparent font-semibold shadow-none text-[#23233B] hover:bg-transparent font-links text-base focus:outline-none focus:ring-2 focus:ring-[#FFD868] transition"
                    >
                      🇬🇧 EN
                    </Button>
                  </div>
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
    const isSingle = item.items.length === 1;
    return (
      <NavigationMenuItem key={item.title} className="bg-transparent">
        <NavigationMenuTrigger className=" bg-transparent text-white   items-center gap-2 hover:text-zinc-900">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent
          className={`bg-popover flex text-popover-foreground gap-2 p-6 ${
            isSingle ? "md:w-[320px]" : "md:w-[700px]"
          }`}
        >
          {item.items.map((subItem) => (
            <NavigationMenuLink
              asChild
              key={subItem.title}
              className="sm:max-w-4xl"
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
        className="font-links bg-transparent text-white hover:text-zinc-800 group inline-flex h-10 w-max items-center font-medium justify-center rounded-md px-4 py-2 transition-colors"
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
    <a key={item.title} href={item.url} className="text-md font-medium  ">
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
