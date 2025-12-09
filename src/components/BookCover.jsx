import React from 'react'

const BookCover = () => {
  return (
    <div className="relative h-80 w-56 rounded-2xl bg-bookred shadow-soft overflow-hidden border border-red-900/40">
      {/* Spine */}
      <div className="absolute inset-y-0 left-0 w-5 bg-red-900/40" />
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-amber-300/20 mix-blend-screen" />
      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-between px-4 py-5">
        <div className="mt-1 text-xs uppercase tracking-[0.25em] text-amber-200/80">
          A Personal Story
        </div>
        <div className="relative flex flex-col items-center">
          {/* Child silhouette with crown */}
          <div className="relative mb-4">
            <div className="h-24 w-24 rounded-full bg-amber-50/95 flex items-center justify-center shadow-soft border border-amber-200/80">
              <div className="relative h-14 w-14 rounded-full bg-amber-200 flex items-center justify-center">
                <div className="h-7 w-7 rounded-full bg-amber-900/90 mb-3" />
                <div className="absolute bottom-3 h-6 w-10 rounded-t-full bg-amber-900/90" />
              </div>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-10 rounded-t-[1.25rem] border border-amber-200/90 bg-amber-300/95 shadow-soft flex items-center justify-center text-xs text-amber-900">
              👑
            </div>
          </div>
          <h2 className="font-display text-xl text-amber-50 text-center leading-snug drop-shadow">
            Your Child
            <br />
            The Hero
          </h2>
          <p className="mt-2 text-[11px] text-amber-100/90 text-center max-w-[8.5rem] leading-snug">
            Upload a photo and we turn it into a magical storybook.
          </p>
        </div>
        <div className="mb-1 flex w-full items-center justify-between text-[9px] text-amber-100/80">
          <span>Fairy Tale Portrait Books</span>
          <span className="uppercase tracking-wide">Vol. 1</span>
        </div>
      </div>
    </div>
  )
}

export default BookCover
