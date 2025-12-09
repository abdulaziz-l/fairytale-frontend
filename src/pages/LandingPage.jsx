import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BookCover from '../components/BookCover'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-amber-50/80 to-lilac/10">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        {/* Hero */}
        <section className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs text-slate-600 shadow-soft border border-amber-100">
              <span>✨ New</span>
              <span className="h-1 w-1 rounded-full bg-bookred" />
              <span>Turn photos into fairy-tale books</span>
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight">
              Turn your child into
              <br />
              <span className="bg-gradient-to-r from-bookred via-orange-500 to-lilac bg-clip-text text-transparent">
                the hero of their own story.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-700">
              Upload a photo, choose a story template, and receive a beautifully illustrated, printable
              fairy-tale book where your child is the main character.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/upload"
                className="inline-flex items-center gap-2 rounded-full bg-bookred px-6 py-3 text-sm font-semibold text-amber-50 shadow-soft hover:bg-red-700 transition"
              >
                Start your book
                <span>→</span>
              </Link>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-slate-700 hover:text-bookred transition"
              >
                See how it works
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span>📕</span>
                <span>Printable PDF or physical copy</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🖼️</span>
                <span>High-quality, child-friendly artwork</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Private & secure photo handling</span>
              </div>
            </div>
          </div>

          {/* Right side: 3D-like book cover + thumbnails */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -left-10 -top-6 h-20 w-20 rounded-full bg-lilac/40 blur-2xl" />
              <div className="absolute -right-10 bottom-0 h-24 w-24 rounded-full bg-mint/50 blur-2xl" />
              <div className="relative flex items-center gap-6">
                <BookCover />
                <div className="hidden sm:flex flex-col gap-3">
                  <div className="h-20 w-28 rounded-xl bg-amber-100 shadow-soft flex items-center justify-center text-xs text-slate-700">
                    Forest Adventure
                  </div>
                  <div className="h-20 w-28 rounded-xl bg-lilac/30 shadow-soft flex items-center justify-center text-xs text-slate-800">
                    Space Journey
                  </div>
                  <div className="h-20 w-28 rounded-xl bg-mint/40 shadow-soft flex items-center justify-center text-xs text-slate-800">
                    Princess & Dragon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mt-16">
          <h2 className="font-display text-2xl sm:text-3xl text-slate-900">
            How it works
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-700">
            We keep things simple, magical, and safe for busy parents.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-5 shadow-soft border border-amber-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-bookred text-sm font-semibold">
                1
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">Upload a photo</h3>
              <p className="mt-2 text-sm text-slate-700">
                Choose a clear photo of your child&apos;s face and select a story template that matches
                their personality.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-5 shadow-soft border border-amber-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-bookred text-sm font-semibold">
                2
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">We work our magic</h3>
              <p className="mt-2 text-sm text-slate-700">
                We carefully transform the photo into fairy-tale artwork and place your child as the main
                character in the story.
              </p>
            </div>

            <div className="rounded-2xl bg-white/80 p-5 shadow-soft border border-amber-100">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-bookred text-sm font-semibold">
                3
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">Receive your book</h3>
              <p className="mt-2 text-sm text-slate-700">
                Once ready, we send you a printable PDF. In selected locations, you can also order a
                beautifully printed physical book.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-100 bg-amber-50/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Fairy Tale Portrait Books. All rights reserved.</span>
          <span>Made with ✨ for children who love stories.</span>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
