"use client";
import Image from 'next/image'
import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Find a Doctor", href: "/search" },
    { title: "Specialties", href: "/specialties" },
    { title: "About Us", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background shadow-sm border-b border-foreground/10">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" alt="logo" width={40} height={40} className="dark:invert"/>
        </a>

        {/* Desktop Menu */}
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {menuItems.map((item) => (
              <li key={item.title}>
                <a className="text-foreground transition hover:text-foreground/75" href={item.href}> {item.title} </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary/90"
              href="#"
            >
              Login
            </a>
            <a
              className="hidden rounded-md bg-foreground/5 px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-foreground/10 sm:block"
              href="#"
            >
              Register
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded bg-foreground/5 p-2.5 text-foreground transition hover:text-foreground/75"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav aria-label="Global" className="px-4 pt-2 pb-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a className="block rounded-lg px-4 py-2 text-sm text-foreground hover:bg-foreground/5" href={item.href}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2 px-4">
                <a
                className="block rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-primary/90"
                href="#"
                >
                Login
                </a>

                <a
                className="block rounded-md bg-foreground/5 px-5 py-2.5 text-center text-sm font-medium text-primary transition hover:bg-foreground/10"
                href="#"
                >
                Register
                </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
