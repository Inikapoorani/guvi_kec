import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">KEC × GUVI</h3>
            <p className="text-sm opacity-90">
              Empowering students with industry-ready DevOps skills through a
              collaborative training program.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-accent transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-accent transition-colors">
                  Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@kecguvi.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 (0) 123-456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Erode, Tamil Nadu</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-75">
            © {currentYear} Kongu Engineering College × GUVI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
