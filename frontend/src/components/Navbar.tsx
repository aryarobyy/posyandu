import { useState, useEffect } from 'react';
import { Menu, X, Info, Mail, FileText, ChevronDown, BookOpenText } from 'lucide-react';
import { Link } from 'react-router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(false);
        }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navClasses = `fixed w-full top-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white md:bg-[var(--white-color)] md:py-2 py-1'}
        shadow-sm md:shadow-none`;

    const handleMobileNavItemClick = () => {
        setIsOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
                <Link to="/">
                <span className="text-xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent">
                    Posyandu
                </span>
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                {/* <NavItem icon={<BookOpenText size={18} />} label="Sejarah" /> */}

                <NavItem icon={<Info size={18} />} label="About" />
                <NavItem icon={<FileText size={18} />} label="Blog" />
                <NavItem icon={<Mail size={18} />} label="Contact" />
                <div className="relative">
                <button
                    className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-[var(--secondary-color)] hover:bg-gray-50 transition-all duration-200"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span className="mr-1">Services</span>
                    <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {dropdownOpen && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 animate-fadeIn">
                    <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        Batita
                    </Link>
                    <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        Balita
                    </Link>
                    <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        Ibu Hamil
                    </Link>
                    </div>
                )}
                </div>

                <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md border border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] transition-colors duration-200">
                    Masuk
                </button>
            </div>

            <div className="block md:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[var(--secondary-color)] hover:bg-gray-100 focus:outline-none border border-gray-300"
                aria-expanded={isOpen}
                >
                {isOpen ? (
                    <X className="h-6 w-6" stroke="currentColor" strokeWidth={2} aria-hidden="true" />
                ) : (
                    <Menu className="h-6 w-6" stroke="currentColor" strokeWidth={2} aria-hidden="true" />
                )}
                </button>
            </div>
            </div>
        </div>

        <div
            className={`
            md:hidden transform transition-all duration-300 ease-in-out
            ${isOpen ? 'opacity-100 max-h-screen overflow-y-auto' : 'opacity-0 max-h-0 overflow-hidden'}
            `}
        >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {/* <NavItem icon={<BookOpenText size={18} />} label="Sejarah" onClick={handleMobileNavItemClick} mobile /> */}
            <NavItem icon={<Info size={18} />} label="About" onClick={handleMobileNavItemClick} mobile />
            <NavItem icon={<FileText size={18} />} label="Blog" onClick={handleMobileNavItemClick} mobile />
            <NavItem icon={<Mail size={18} />} label="Contact" onClick={handleMobileNavItemClick} mobile />

            <div className="border-t border-gray-200 pt-2">
                <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                <span>Services</span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
                </button>
                {dropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                    <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                    Batita
                    </Link>
                    <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                    Balita
                    </Link>
                    <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                    Ibu Hamil
                    </Link>
                </div>
                )}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 px-4">
                <button
                onClick={handleMobileNavItemClick}
                className="w-full text-center bg-[var(--primary-color)] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200"
                >
                    Masuk
                </button>
            </div>
            </div>
        </div>
        </nav>
    );
    }

    type NavItemProps = {
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
    mobile?: boolean;
    };

    function NavItem({ icon, label, onClick, mobile = false }: NavItemProps) {
    const paddingClass = mobile ? 'px-3 py-3' : 'px-3 py-2';
    return (
        <Link
        to="#"
        onClick={onClick}
        className={`flex items-center ${paddingClass} rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200`}
        >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
        </Link>
    );
}
