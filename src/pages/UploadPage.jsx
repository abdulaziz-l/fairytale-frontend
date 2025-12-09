import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'

const storyTemplates = [
  { id: 'forest_adventure', name: 'Forest Adventure' },
  { id: 'space_odyssey', name: 'Space Odyssey' },
  { id: 'castle_dreams', name: 'Castle Dreams' },
]

const MAX_FILE_SIZE_MB = 5

const UploadPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    childName: '',
    storyId: storyTemplates[0].id,
    email: '',
  })
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0]
    if (!selected) return

    if (!['image/jpeg', 'image/png'].includes(selected.type)) {
      setError('Please upload a JPG or PNG image.')
      setFile(null)
      return
    }

    const sizeMb = selected.size / (1024 * 1024)
    if (sizeMb > MAX_FILE_SIZE_MB) {
      setError(`Image is too large. Max size is ${MAX_FILE_SIZE_MB}MB.`)
      setFile(null)
      return
    }

    setError('')
    setFile(selected)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!file) {
      setError('Please upload a photo of your child.')
      return
    }

    if (!form.childName || !form.email) {
      setError('Please fill in all required fields.')
      return
    }

    try {
      setIsSubmitting(true)
      const data = new FormData()
      data.append('childName', form.childName)
      data.append('storyId', form.storyId)
      data.append('email', form.email)
      data.append('photo', file)

      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
      const res = await axios.post(`${backendUrl}/api/orders`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const orderId = res.data?.orderId
      navigate(`/success/${orderId || 'pending'}`)
    } catch (err) {
      console.error(err)
      setError('Something went wrong while submitting your order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-amber-50/80 to-lilac/10">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8">
        <h1 className="font-display text-2xl text-slate-900">Upload a photo and story details</h1>
        <p className="mt-2 text-sm text-slate-700">
          Simple form. One photo. We do the rest and contact you personally.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-6 rounded-2xl bg-white/90 p-6 shadow-soft border border-amber-100"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Child&apos;s name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="childName"
                className="w-full rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2 text-sm outline-none focus:border-bookred focus:ring-1 focus:ring-bookred"
                value={form.childName}
                onChange={handleChange}
                placeholder="e.g. Amina, Daniel"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Story template <span className="text-red-500">*</span>
              </label>
              <select
                name="storyId"
                className="w-full rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2 text-sm outline-none focus:border-bookred focus:ring-1 focus:ring-bookred"
                value={form.storyId}
                onChange={handleChange}
              >
                {storyTemplates.map((story) => (
                  <option key={story.id} value={story.id}>
                    {story.name}
                  </option>
                ))}
              </select>
              <p className="mt-1 text-[11px] text-slate-500">
                Choose the world for your child: forest, space, or castle.
              </p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Your email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2 text-sm outline-none focus:border-bookred focus:ring-1 focus:ring-bookred"
              value={form.email}
              onChange={handleChange}
              placeholder="We send the book here"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Child&apos;s photo (JPG or PNG) <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleFileChange}
              className="block w-full text-sm text-slate-700
                file:mr-3 file:rounded-full file:border-0
                file:bg-bookred file:px-4 file:py-2
                file:text-xs file:font-semibold file:text-amber-50
                hover:file:bg-red-700"
              required
            />
            <p className="mt-1 text-[11px] text-slate-500">
              Clear front-facing photo. Max size {MAX_FILE_SIZE_MB}MB.
            </p>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Payment (coming soon)
            </label>
            <input
              type="text"
              disabled
              className="w-full cursor-not-allowed rounded-xl border border-dashed border-amber-200 bg-amber-50/60 px-3 py-2 text-sm text-slate-400"
              placeholder="We will message you about payment. No card needed now."
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-bookred px-6 py-2.5 text-sm font-semibold text-amber-50 shadow-soft hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {isSubmitting ? 'Sending...' : 'Send order'}
          </button>
        </form>
      </main>
    </div>
  )
}

export default UploadPage
