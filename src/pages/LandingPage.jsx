import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BookCover from '../components/BookCover'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-amber-50/80 to-lilac/10">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 pb-16 pt-8">
        {/* Hero - very simple */}
        <section className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <h1 className="font-display text-3xl sm:text-4xl text-slate-900 leading-tight">
              Turn a photo
              <br />
              into a fairy-tale book.
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-800">
              1. You send us a clear photo of your child.
              <br />
              2. We put your child inside a fairy-tale story.
              <br />
              3. You get a PDF book you can print or read on your phone.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link
                to="/upload"
                className="inline-flex items-center gap-2 rounded-full bg-bookred px-5 py-2.5 text-sm font-semibold text-amber-50 shadow-soft hover:bg-red-700 transition"
              >
                Upload a photo
                <span>→</span>
              </Link>
              <span className="text-[11px] text-slate-600">
                No payment on the website yet. We contact you personally.
              </span>
            </div>

            <div className="mt-4 space-y-1 text-[12px] text-slate-700">
              <p>✅ Very simple. No accounts, no apps.</p>
              <p>✅ Works for parents in Uzbekistan, Qatar, and anywhere else.</p>
              <p>✅ We keep your child&apos;s photo private.</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full">
            <BookCover />
          </div>
        </section>

        {/* How it works - ultra clear */}
        <section id="how" className="mt-14">
          <h2 className="font-display text-xl text-slate-900 text-center">
            How it works (3 very easy steps)
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl bg-white/90 p-4 shadow-soft border border-amber-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-bookred text-xs font-semibold">
                1
              </div>
              <p className="mt-3 text-slate-800">
                Fill the short form and upload one clear photo of your child&apos;s face.
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-4 shadow-soft border border-amber-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-bookred text-xs font-semibold">
                2
              </div>
              <p className="mt-3 text-slate-800">
                We manually create the book: your child becomes the main character in the story.
              </p>
            </div>

            <div className="rounded-2xl bg-white/90 p-4 shadow-soft border border-amber-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-bookred text-xs font-semibold">
                3
              </div>
              <p className="mt-3 text-slate-800">
                We send you a PDF file. You can print it in any copy center or read it on phone/tablet.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-100 bg-amber-50/70">
        <div className="mx-auto flex max-w-4xl flex-col gap-1 px-4 py-3 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Unikid. All rights reserved.</span>
          <span>Made for busy parents who love stories.</span>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
