'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const Links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
]

const Navbar = () => {
    const pathname = usePathname()

    return (
        <nav className='flex gap-8 items-center relative'>
            {Links.map((link, index) => {
                const isActive = pathname === link.path
                return (
                    <div key={index} className='relative'>
                        <Link
                            href={link.path}
                            className={`capitalize font-medium transition-colors duration-300 
                            ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`}
                        >
                            {link.name}
                        </Link>
                        {isActive && (
                            <motion.div
                                layoutId="underline"
                                className="absolute left-0 -bottom-1 h-[2px] w-full bg-accent rounded"
                                transition={{ type: "layout", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </div>
                )
            })}
        </nav>
    )
}

export default Navbar
