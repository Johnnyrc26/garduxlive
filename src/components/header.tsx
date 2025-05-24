import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      maxWidth="xl"
      className="bg-background/80 backdrop-blur-md border-b border-divider"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <Icon icon="lucide:music-4" className="text-primary text-2xl" />
          <p className="font-bold text-inherit text-xl">FUSION</p>
        </div>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#home" className="font-medium">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#shows" className="font-medium">
            Shows
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact" className="font-medium">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            variant="shadow"
            radius="full"
            className="font-medium"
            endContent={<Icon icon="lucide:music" />}>
            Listen Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarMenu className="pt-6">
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#home"
            className="w-full text-lg py-2"
            onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#shows"
            className="w-full text-lg py-2"
            onClick={() => setIsMenuOpen(false)}>
            Shows
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            color="foreground"
            href="#contact"
            className="w-full text-lg py-2"
            onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
