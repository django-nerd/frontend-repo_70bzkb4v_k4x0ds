import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[radial-gradient(80%_80%_at_50%_0%,#FDF2F8_0%,#EEF2FF_50%,#F5F3FF_100%)]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-28">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-black tracking-tight bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Playful creative portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-lg text-gray-700 max-w-xl"
          >
            I craft vibrant visuals across photography, video, and graphic design. Dive into interactive work with a light, fun vibe.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
              Explore Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
              Book a Project
            </a>
          </motion.div>
        </div>
        <div className="lg:block hidden" />
      </div>
    </section>
  )
}
