import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const [orders, setOrders] = useState([])
  const [error, setError] = useState('')
  const [uploadingId, setUploadingId] = useState(null)
  const navigate = useNavigate()

  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'
  const adminToken = typeof window !== 'undefined' ? localStorage.getItem('ftpb_admin_token') : ''

  useEffect(() => {
    if (!adminToken) {
      navigate('/admin')
      return
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/admin/orders`, {
          headers: {
            'x-admin-token': adminToken,
          },
        })
        setOrders(res.data?.orders || [])
      } catch (err) {
        console.error(err)
        setError('Failed to fetch orders. Check admin password or backend.')
      }
    }

    fetchOrders()
  }, [backendUrl, adminToken, navigate])

  const handlePdfUpload = async (orderId, file) => {
    if (!file) return
    setError('')
    setUploadingId(orderId)
    try {
      const data = new FormData()
      data.append('pdf', file)

      await axios.post(`${backendUrl}/api/admin/orders/${orderId}/upload-pdf`, data, {
        headers: {
          'x-admin-token': adminToken,
          'Content-Type': 'multipart/form-data',
        },
      })

      // Refresh orders
      const res = await axios.get(`${backendUrl}/api/admin/orders`, {
        headers: {
          'x-admin-token': adminToken,
        },
      })
      setOrders(res.data?.orders || [])
    } catch (err) {
      console.error(err)
      setError('Failed to upload PDF. Please try again.')
    } finally {
      setUploadingId(null)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('ftpb_admin_token')
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-amber-50/80 to-lilac/10 px-4 py-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white/90 p-6 shadow-soft border border-amber-100">
        <div className="flex items-center justify-between">
          <h1 className="font-display text-2xl text-slate-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs text-slate-700 hover:border-bookred hover:text-bookred transition"
          >
            Log out
          </button>
        </div>
        <p className="mt-1 text-xs text-slate-600">
          View incoming orders, upload finished PDFs, and mark books as ready.
        </p>

        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
            {error}
          </div>
        )}

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-xs border-separate border-spacing-y-2">
            <thead className="text-[11px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="text-left px-2 py-1.5">Order ID</th>
                <th className="text-left px-2 py-1.5">Child</th>
                <th className="text-left px-2 py-1.5">Story</th>
                <th className="text-left px-2 py-1.5">Email</th>
                <th className="text-left px-2 py-1.5">Status</th>
                <th className="text-left px-2 py-1.5">PDF</th>
                <th className="text-left px-2 py-1.5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-2 py-4 text-center text-xs text-slate-500">
                    No orders yet.
                  </td>
                </tr>
              )}
              {orders.map((order) => (
                <tr key={order.id} className="bg-amber-50/60">
                  <td className="px-2 py-2 font-mono text-[11px] text-slate-800">
                    {order.id}
                  </td>
                  <td className="px-2 py-2 text-slate-800">
                    {order.child_name}
                  </td>
                  <td className="px-2 py-2 text-slate-700">
                    {order.story_id}
                  </td>
                  <td className="px-2 py-2 text-slate-700">
                    {order.email}
                  </td>
                  <td className="px-2 py-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        order.status === 'ready'
                          ? 'bg-mint text-emerald-900'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-2 py-2">
                    {order.pdf_url ? (
                      <a
                        href={order.pdf_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-bookred hover:underline"
                      >
                        View PDF
                      </a>
                    ) : (
                      <span className="text-[11px] text-slate-500">Not uploaded</span>
                    )}
                  </td>
                  <td className="px-2 py-2">
                    <label className="inline-flex items-center gap-2 text-[11px] text-slate-700 cursor-pointer">
                      <span>Upload PDF</span>
                      <input
                        type="file"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0]
                          if (file) handlePdfUpload(order.id, file)
                        }}
                      />
                    </label>
                    {uploadingId === order.id && (
                      <div className="mt-1 text-[10px] text-slate-500">
                        Uploading...
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
