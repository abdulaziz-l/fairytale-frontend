import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SuccessPage = () => {
  const { orderId } = useParams()

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-amber-50/80 to-lilac/10">
      <Navbar />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-4 pb-16 pt-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint shadow-soft">
          <span className="text-xl">✨</span>
        </div>
        <h1 className="mt-4 font-display text-2xl text-slate-900">
          Thank you! We received your order.
        </h1>
        <p className="mt-3 text-sm text-slate-700">
          We will create your child&apos;s fairy-tale book and send the PDF to your email.
          If we need anything, we will contact you.
        </p>
        {orderId && orderId !== 'pending' && (
          <p className="mt-2 text-xs text-slate-500">
            Your order ID: <span className="font-mono">{orderId}</span>
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link
            to="/"
            className="rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-slate-700 hover:border-bookred hover:text-bookred transition"
          >
            Back to home
          </Link>
          <Link
            to="/upload"
            className="rounded-full bg-bookred px-4 py-2 text-amber-50 shadow-soft hover:bg-red-700 transition"
          >
            Create another book
          </Link>
        </div>
      </main>
    </div>
  )
}

export default SuccessPage
