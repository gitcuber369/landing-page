import React from "react";
import { Menu } from "lucide-react";
import Logo from "@/public/Logo";
import { Button } from "@/components/Button";
function Header() {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <div className="border size-10 rounded-lg justify-center items-center border-white/15 inline-flex">
              <Logo className="size-10" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition">
                Feature
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Developers
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Pricing
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                Changelog
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join Waiting List</Button>
            <Menu className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
