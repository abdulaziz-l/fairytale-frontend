import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-amber-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-bookred flex items-center justify-center shadow-soft">
            <span className="text-xl leading-none text-amber-100">📕</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg text-bookred">Fairy Tale Portrait Books</span>
            <span className="text-xs text-slate-500">Your child, the hero of the story</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/upload"
            className="hidden sm:inline-flex rounded-full bg-bookred px-4 py-2 text-sm font-medium text-amber-50 shadow-soft hover:bg-red-700 transition"
          >
            Create a book
          </Link>
          <a
            href="#how-it-works"
            className={`text-sm ${
              location.pathname === '/' ? 'text-slate-700 hover:text-bookred' : 'text-slate-500 hover:text-slate-700'
            } transition`}
          >
            How it works
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
