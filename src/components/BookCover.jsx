import React from 'react'

const BookCover = () => {
  return (
    <div className="relative h-72 w-48 rounded-2xl bg-bookred shadow-soft overflow-hidden border border-red-900/40">
      <div className="absolute inset-y-0 left-0 w-4 bg-red-900/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-amber-300/20 mix-blend-screen" />
      <div className="relative flex h-full flex-col items-center justify-between px-4 py-5">
        <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-amber-200/80">
          Personal story
        </div>
        <div className="relative flex flex-col items-center">
          <div className="relative mb-3">
            <div className="h-20 w-20 rounded-full bg-amber-50/95 flex items-center justify-center shadow-soft border border-amber-200/80">
              <div className="relative h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center">
                <div className="h-6 w-6 rounded-full bg-amber-900/90 mb-2" />
                <div className="absolute bottom-2 h-5 w-9 rounded-t-full bg-amber-900/90" />
              </div>
            </div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-5 w-9 rounded-t-[1.25rem] border border-amber-200/90 bg-amber-300/95 shadow-soft flex items-center justify-center text-[10px] text-amber-900">
              👑
            </div>
          </div>
          <h2 className="font-display text-lg text-amber-50 text-center leading-snug drop-shadow">
            Your Child
            <br />
            In the Book
          </h2>
          <p className="mt-2 text-[10px] text-amber-100/90 text-center max-w-[8rem] leading-snug">
            Photo on the cover,
            story inside.
          </p>
        </div>
        <div className="mb-1 flex w-full items-center justify-between text-[9px] text-amber-100/80">
          <span>Unikid</span>
          <span className="uppercase tracking-wide">Vol. 1</span>
        </div>
      </div>
    </div>
  )
}

export default BookCover
