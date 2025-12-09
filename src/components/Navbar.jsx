import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-amber-100">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-bookred flex items-center justify-center shadow-soft">
            <span className="text-lg leading-none text-amber-100">📕</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base text-bookred">Unikid</span>
            <span className="text-[11px] text-slate-500">Photo → Fairy tale book</span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/upload"
            className="rounded-full bg-bookred px-4 py-1.5 text-xs font-semibold text-amber-50 shadow-soft hover:bg-red-700 transition"
          >
            Start now
          </Link>
          {location.pathname === '/' && (
            <a
              href="#how"
              className="text-[11px] text-slate-600 hover:text-bookred transition"
            >
              How it works
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
