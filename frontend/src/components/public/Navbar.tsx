import React, { useState } from 'react';
import { Menu, X, Megaphone } from 'lucide-react';
import { Link } from './Link';
import { Button } from '../ui/Button';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const navLinks = [
  {
    name: 'Accueil',
    href: '/'
  },
  {
    name: 'Événements',
    href: '/events'
  },
  {
    name: 'Articles',
    href: '/articles'
  },
  {
    name: 'Galerie',
    href: '/gallery'
  },
  {
    name: 'À Propos',
    href: '/about'
  }];

  const isActive = (href: string) => {
    if (href === '/' && path === '/') return true;
    if (href !== '/' && path.startsWith(href)) return true;
    return false;
  };
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-ureport-blue p-2 rounded-xl group-hover:bg-ureport-gold transition-colors">
                <Megaphone className="h-6 w-6 text-white" />
              </div>
              <span className="font-heading font-bold text-2xl text-ureport-dark tracking-tight">
                U-Report <span className="text-ureport-blue">Cocody</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors hover:text-ureport-blue relative ${isActive(link.href) ? 'text-ureport-blue' : 'text-gray-600'}`}>
              
                {link.name}
                {isActive(link.href) &&
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-2 left-0 right-0 h-1 bg-ureport-blue rounded-t-full" />

              }
              </Link>
            )}
            <Link href="/events">
              <Button size="sm">S'engager</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-ureport-blue focus:outline-none p-2">
              
              {isOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white border-b border-gray-100 overflow-hidden">
          
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-semibold ${isActive(link.href) ? 'bg-ureport-light text-ureport-blue' : 'text-gray-600 hover:bg-gray-50'}`}>
              
                  {link.name}
                </Link>
            )}
              <div className="pt-4 px-4">
                <Link href="/events" onClick={() => setIsOpen(false)}>
                  <Button fullWidth>S'engager maintenant</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}