import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!password) {
      setError('Please enter the admin password.')
      return
    }
    // For MVP, we just store the password locally and let backend validate it.
    localStorage.setItem('ftpb_admin_token', password)
    navigate('/admin/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-amber-50/80 to-lilac/10 flex items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white/90 p-6 shadow-soft border border-amber-100">
        <h1 className="font-display text-2xl text-slate-900 text-center">Admin Login</h1>
        <p className="mt-2 text-xs text-slate-600 text-center">
          Enter the admin password to manage orders.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2 text-sm outline-none focus:border-bookred focus:ring-1 focus:ring-bookred"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-bookred px-4 py-2.5 text-sm font-semibold text-amber-50 shadow-soft hover:bg-red-700 transition"
          >
            Enter dashboard
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
