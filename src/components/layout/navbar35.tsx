"use client";

import {  Menu } from "lucide-react";
import { cn } from "cn";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar35Props {
  className?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu: MenuItem[];
  auth: {
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

const defaultProps: Navbar35Props = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://cdn.shadcnblocks.com/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  menu: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Branch", url: "/contact/branch" },
  ],
  auth: {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
  },
};

const Navbar35 = ({ className, ...props }: Partial<Navbar35Props>) => {
  const { logo, menu, auth } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-4 ", className)}>
      <div className="container mx-auto">
        <nav className="hidden  grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <a
            href={logo.url}
            className="flex items-center gap-2 justify-self-start"
          >
            <img
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </a>
          <NavigationMenu className="justify-self-center">
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex gap-2 justify-self-end">
            <ModeToggle></ModeToggle>
            <Button variant="outline" size="sm" render={<Link href={auth.login.url} />} nativeButton={false}>{auth.login.title}</Button>
            <Button size="sm" render={<Link href={auth.signup.url} />} nativeButton={false}>{auth.signup.title}</Button>
          </div>
        </nav>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
            </a>
            <Sheet>
              <SheetTrigger render={<Button variant="outline" size="icon" />}><Menu className="size-4" /></SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img
                        src={logo.src}
                        className="max-h-8 dark:invert"
                        alt={logo.alt}
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button variant="outline" render={<Link href={auth.login.url} />} nativeButton={false}>{auth.login.title}</Button>
                    <Button render={<Link href={auth.signup.url} />} nativeButton={false}>{auth.signup.title}</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {


  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink 
       render={<Link href={item.url}></Link>}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
       {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  
  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};



export { Navbar35 };
