import Container from "../common/Container";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
              SmartDoc
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Your trusted partner for document services, business registration,
              PF/ESIC, travel booking and online services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#home" className="transition hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="transition hover:text-blue-400">
                  Services
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-blue-400">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" size={18} />
                <span>+91 8983557005</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={18} />
                <span>smartdoc.support1@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-400" size={18} />
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect With Us
            </h3>

            <div className="flex gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918983557005?text=Hello%20SmartDoc,%20I%20need%20information%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition duration-300 hover:-translate-y-1 hover:bg-green-600"
              >
                <FaWhatsapp size={22} />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                <FaFacebookF size={18} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white transition duration-300 hover:-translate-y-1"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">
              <div className="flex items-center gap-2 text-green-400">
                <MessageCircle size={18} />
                <span className="font-medium">Quick Support</span>
              </div>

              <p className="mt-2 text-sm text-slate-400">
                Chat with us on WhatsApp for instant assistance and document
                requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800 py-6 text-center text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} SmartDoc. All Rights Reserved.
          </p>

          <p>
            Made with ❤️ for Digital Document Services
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;