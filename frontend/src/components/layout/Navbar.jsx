import Container from "../common/Container";
import { navigation } from "../../data/navigation";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-600">
            SmartDoc
          </h1>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;