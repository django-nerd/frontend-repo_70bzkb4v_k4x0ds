import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 p-2"
        >
          <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
              alt="creator portrait"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        <div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Hi, I'm your colorful creator</h2>
          <p className="mt-4 text-gray-700">
            I blend playful aesthetics with polished craft. From energetic reels to vibrant product shoots and bold poster design—my work aims to make brands feel alive and fun.
          </p>
          <p className="mt-3 text-gray-700">
            Available for brand campaigns, social content, editorials, music visuals, and creative direction.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to new projects
          </div>
        </div>
      </div>
    </section>
  )
}
