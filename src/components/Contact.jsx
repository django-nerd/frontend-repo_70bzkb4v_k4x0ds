import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! I will get back to you shortly.')
      else setStatus(data.detail || 'Something went wrong')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-t from-white to-purple-50/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Let's make something fun</h2>
          <p className="mt-3 text-gray-600">Tell me about your project and timeline.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Service</label>
            <select name="service" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Photography</option>
              <option>Video</option>
              <option>Graphic Design</option>
              <option>Creative Direction</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows="5" className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button className="inline-flex justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 text-white text-sm font-semibold shadow-sm hover:shadow-md">
            Send Inquiry
          </button>
          {status && <p className="text-sm text-gray-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
