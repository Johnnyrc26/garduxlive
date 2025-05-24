import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-content2 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <p className="font-bold text-xl">GARDUX LIVE</p>
          </div>
          <div className="flex gap-6">
            <Link href="https://www.instagram.com/garduxlive/" aria-label="Instagram">
              <Icon icon="logos:instagram-icon" className="text-2xl" />
            </Link>
            <Link href="https://www.youtube.com/@garduxlive" aria-label="YouTube">
              <Icon icon="logos:youtube-icon" className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="text-center text-foreground-500 text-sm">
          <p>© {new Date().getFullYear()} GARDUX LIVE. <br/>All rights reserved.⚡️</p>
        </div>
      </div>
    </footer>
  );
};
