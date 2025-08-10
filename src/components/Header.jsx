import React from 'react';
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import {useRouter} from 'next/router';

const Header = () => {
  const router = useRouter();
  const activeLinkClass = 'text-cyan-400';
  const baseLinkClass = 'hover:text-cyan-400 transition-colors duration-300';

  return (
    <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">
            Kamil Wozniak
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4">
          <Link href="/" className={`${baseLinkClass} ${router.pathname === '/' ? activeLinkClass : ''}`}>
            Home
          </Link>
          <Link href="/projects" className={`${baseLinkClass} ${router.pathname === '/projects' ? activeLinkClass : ''}`}>
            Projects
          </Link>
        </nav>

        <div className="md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            {({open}) => (
              <>
                <MenuButton className="text-white focus:outline-none">
                  {open ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6"/>}
                </MenuButton>
                <MenuItems
                  className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                  <div className="px-1 py-1 ">
                    <MenuItem>
                      <Link href="/" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Home
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="/projects" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Projects
                      </Link>
                    </MenuItem>
                  </div>
                </MenuItems>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
