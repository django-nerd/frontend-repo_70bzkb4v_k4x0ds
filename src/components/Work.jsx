import { motion } from 'framer-motion'
import { Camera, Play, Paintbrush } from 'lucide-react'

const items = [
  {
    category: 'Photography',
    icon: Camera,
    color: 'from-rose-400 to-pink-500',
    desc: 'Portraits, lifestyle, and product stories with pop colors.',
    samples: [
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    category: 'Video',
    icon: Play,
    color: 'from-indigo-400 to-violet-500',
    desc: 'Snappy edits, short-form reels, and narrative visuals.',
    samples: [
      'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523246196047-8f42f4f7b1a9?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    category: 'Graphic Design',
    icon: Paintbrush,
    color: 'from-emerald-400 to-teal-500',
    desc: 'Brand kits, cover art, posters and playful social graphics.',
    samples: [
      'https://images.unsplash.com/photo-1626785774468-2c3a106bf816?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop',
    ],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-white to-purple-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Playful, colorful work</h2>
          <p className="mt-3 text-gray-600">A mix of photo, video, and graphic design. Tap a category to peek.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow`}> 
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{item.category}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {item.samples.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl">
                    <img src={src} alt="sample" className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
