import { useEffect, useRef } from 'react'

const testimonials = [
  {
    text: "The mindfulness programs helped me regain balance during a stressful period at work.",
    author: "Mark S.",
    meta: "41"
  },
  {
    text: "As a student preparing for competitive exams, I was constantly stressed and couldn't focus. The small audio sessions helped me deal with stress while studying, and the breathing exercises between study sessions made a huge difference in my concentration and overall well-being.",
    author: "Ravi K.",
    meta: "24"
  },
  {
    text: "Short therapist-led sessions made it easy to start my mental health journey.",
    author: "Anna R.",
    meta: "28"
  },
  {
    text: "Daily check-ins keep me consistent with my mental health practices. I actually look forward to them now because they help me stay grounded and focused, and the personalized reminders motivate me to maintain healthy habits even on busy days.",
    author: "Neha P.",
    meta: "32"
  },
  {
    text: "Breathing exercises improved my sleep in a week. Simple and effective.",
    author: "Ishan D.",
    meta: "35"
  },
  {
    text: "The peer community feels safe and supportive. It changed how I handle tough days and helped me realize I'm not alone in my mental health journey.",
    author: "Mira L.",
    meta: "27"
  }
]

const bgByIndex = (index) => {
  const mod = index % 3
  if (mod === 0) return 'bg-[#E6F6D9]'
  if (mod === 1) return 'bg-[#F1E9FF]'
  return 'bg-[#FFE8DA]'
}

const Avatar = ({ name }) => {
  const initials = name
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
      {initials}
    </div>
  )
}

const Testimonials = () => {
  const scrollerRef = useRef(null)
  const intervalRef = useRef(null)

  const scrollByPage = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = el.clientWidth
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const scrollOne = (direction = 1) => {
    const el = scrollerRef.current
    if (!el) return
    const firstChild = el.firstElementChild
    if (!firstChild) return
    const childWidth = firstChild.getBoundingClientRect().width
    const gap = parseFloat(getComputedStyle(el).columnGap || '0')
    const amount = childWidth + gap
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
    if (atEnd && direction === 1) {
      el.scrollTo({ left: 0, behavior: 'auto' })
      return
    }
    if (el.scrollLeft <= 0 && direction === -1) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'auto' })
      return
    }
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => scrollOne(1), 3000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="space-y-6 lg:col-span-1 text-center lg:text-left">
            <p className="tracking-widest text-sm text-gray-500">TESTIMONIALS</p>
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Trusted by learners and
              <br />
              wellness seekers
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg m-0">
              Hear how real people found support, built new skills, and moved forward with confidence.
            </p>
            <div className="hidden lg:flex items-center gap-4 pt-2">
              <button
                aria-label="Previous"
                onClick={() => scrollByPage(-1)}
                className="w-12 h-12 rounded-full bg-[#FFECE2] text-gray-900 flex items-center justify-center hover:opacity-80 transition"
              >
                ←
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollByPage(1)}
                className="w-12 h-12 rounded-full bg-[#1A100D] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                →
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative overflow-hidden">
              <div
                ref={scrollerRef}
                className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 no-scrollbar"
              >
              {testimonials.map((t, idx) => (
                <article
                  key={idx}
                  className={`min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] lg:min-h-[400px] ${bgByIndex(idx)} rounded-3xl p-8 snap-start flex flex-col justify-between`}
                >
                  <p className="text-lg sm:text-xl text-gray-800 leading-relaxed line-clamp-6">{t.text}</p>
                  <div className="flex items-center gap-3 pt-8 mt-auto">
                    <Avatar name={t.author} />
                    <p className="text-gray-800 font-medium">— {t.author}, {t.meta}</p>
                  </div>
                </article>
              ))}
              </div>
            </div>
            
            <div className="flex lg:hidden items-center justify-center gap-4 pt-6">
              <button
                aria-label="Previous"
                onClick={() => scrollByPage(-1)}
                className="w-12 h-12 rounded-full bg-[#FFECE2] text-gray-900 flex items-center justify-center hover:opacity-80 transition"
              >
                ←
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollByPage(1)}
                className="w-12 h-12 rounded-full bg-[#1A100D] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


