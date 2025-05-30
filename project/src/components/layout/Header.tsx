import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, HardHat } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <HardHat size={32} className="text-primary-600" />
            <span className="text-2xl font-bold text-primary-800">BrickMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-neutral-800 hover:text-primary-600' 
                      : 'text-white hover:text-primary-100'
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-neutral-800 hover:text-primary-600' 
                      : 'text-white hover:text-primary-100'
                }`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-neutral-800 hover:text-primary-600' 
                      : 'text-white hover:text-primary-100'
                }`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-neutral-800 hover:text-primary-600' 
                      : 'text-white hover:text-primary-100'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-primary-600' 
                    : isScrolled 
                      ? 'text-neutral-800 hover:text-primary-600' 
                      : 'text-white hover:text-primary-100'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919010011734" className="flex items-center text-sm font-medium">
              <Phone size={16} className={`mr-2 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
              <span className={isScrolled ? 'text-neutral-800' : 'text-white'}>
                +91 9010011734
              </span>
            </a>
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-neutral-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 mt-2 animate-slide-down">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                  }`
                }
                onClick={toggleMenu}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                  }`
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                  }`
                }
                onClick={toggleMenu}
              >
                Services
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                  }`
                }
                onClick={toggleMenu}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-primary-600' : 'text-neutral-800 hover:text-primary-600'
                  }`
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
              <div className="pt-4 border-t border-neutral-200 mt-2">
                <a href="tel:+919010011734" className="flex items-center text-sm font-medium text-neutral-800">
                  <Phone size={16} className="mr-2 text-primary-600" />
                  +91 9010011734
                </a>
                <a href="mailto:BrickmasterBhanu@gmail.com" className="flex items-center text-sm font-medium text-neutral-800 mt-2">
                  <Mail size={16} className="mr-2 text-primary-600" />
                  BrickmasterBhanu@gmail.com
                </a>
              </div>
              <Link 
                to="/contact" 
                className="btn-primary w-full text-center mt-4"
                onClick={toggleMenu}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;