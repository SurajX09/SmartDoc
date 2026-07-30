import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";
import { navigation } from "../../data/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              S
            </div>

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                SmartDoc
              </h1>

              <p className="hidden sm:block text-xs text-slate-500">
                Document Services
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t py-5">
            <ul className="flex flex-col gap-5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;