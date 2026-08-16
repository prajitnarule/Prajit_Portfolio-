import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  Captions,
  Clapperboard,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Volume2,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
})

// WhatsApp contact used by the "Hire Me" button.
// Number is in international format, digits only (no +, spaces, or leading 0).
// Currently reusing the phone number already in the Contact section below.
const whatsappNumber = '919579517645'
const whatsappMessage =
  "Hi Prajit, I'd like to hire you for a video editing project!"
const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`

type PortfolioVideo = {
  id: string
  title: string
}

type PortfolioCategory = {
  title: string
  videos: PortfolioVideo[]
}

const portfolioCategories: PortfolioCategory[] = [
  {
    title: 'Motion Graphics Videos',
    videos: [
      { id: 'yJGu-8mpLGs', title: 'Motion Graphics edit 1' },
      { id: 'aXGvo9uLoGQ', title: 'Motion Graphics edit 2' },
      { id: 'tCI9xxQgpA8', title: 'Motion Graphics edit 3' },
    ],
  },
  {
    title: 'Talking Head Videos',
    videos: [
      { id: 'oqKdDjdWPog', title: 'Talking Head edit 1' },
      { id: 'YbTiwUSPhGE', title: 'Talking Head edit 2' },
      { id: 'cBxOQDVU0CE', title: 'Talking Head edit 3' },
      { id: 'CC8xlAtG8B8', title: 'Talking Head edit 4' },
      { id: 'OtBxsV-_VwU', title: 'Talking Head edit 5' },
    ],
  },
  {
    title: 'Documentary Videos',
    videos: [
      { id: 'OtBxsV-_VwU', title: 'Documentary edit 1' },
      { id: 'v6EWU-AgBww', title: 'Documentary edit 2' },
      { id: '5pQLXwW1MHo', title: 'Documentary edit 3' },
      { id: 'otwRgiV1VgQ', title: 'Documentary edit 4' },
    ],
  },
  {
    title: 'Clean Documentary Videos',
    videos: [{ id: 'ifgGiM0eBM0', title: 'Clean Documentary edit' }],
  },
  {
    title: 'My Introduction Video',
    videos: [{ id: '3nxClh81If8', title: 'Introduction video' }],
  },
]

const differentiators = [
  'Hook-focused editing to maximize audience retention',
  'Fast-paced, clean, and modern editing style',
  'Custom animations and motion graphics tailored toeachh video',
  'Videos optimized for Instagram Reels, YouTube Shorts, and TikTok',
  'Clear communication, on-time delivery, and attention to every detail',
]

const services = [
  { icon: Scissors, label: 'Instagram Reels editing' },
  { icon: Clapperboard, label: 'YouTube Shorts editing' },
  { icon: Zap, label: 'TikTok editing' },
  { icon: Captions, label: 'Motion graphics & captions' },
  { icon: Volume2, label: 'Sound design' },
]

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function VideoCarousel({ videos }: { videos: PortfolioVideo[] }) {
  const [index, setIndex] = useState(0)
  const canNavigate = videos.length > 1
  const active = videos[index]

  const goPrev = () =>
    setIndex((i) => (i - 1 + videos.length) % videos.length)
  const goNext = () => setIndex((i) => (i + 1) % videos.length)

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-[260px] sm:max-w-[280px]">
        <div className="aspect-[9/16] overflow-hidden rounded-lg border border-[#9ee68b]/20 bg-[#182219]">
          <iframe
            key={active.id}
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${active.id}`}
            title={active.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {canNavigate && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous video"
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#9ee68b]/30 bg-[#0f1511]/85 text-[#f4fbf2] backdrop-blur transition hover:bg-[#9ee68b]/25 focus:outline-none focus:ring-2 focus:ring-[#bff4b1]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next video"
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#9ee68b]/30 bg-[#0f1511]/85 text-[#f4fbf2] backdrop-blur transition hover:bg-[#9ee68b]/25 focus:outline-none focus:ring-2 focus:ring-[#bff4b1]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {canNavigate && (
        <div className="mt-4 flex items-center gap-2">
          {videos.map((video, i) => (
            <button
              key={`${video.id}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show video ${i + 1} of ${videos.length}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-[#9ee68b]' : 'w-1.5 bg-[#9ee68b]/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function PortfolioHome() {
  return (
    <main className="min-h-screen bg-[#0f1511] text-[#f4fbf2]">
      <section className="border-b border-[#9ee68b]/15">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <p className="mb-5 w-fit rounded-full border border-[#9ee68b]/25 bg-[#9ee68b]/10 px-4 py-2 text-sm font-medium text-[#bff4b1]">
              Short-form video editor
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-[#f8fff5] sm:text-6xl lg:text-7xl">
              Prajit Narule
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-[#bff4b1] sm:text-2xl">
              Short-Form Video Editor
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#dcebd8] sm:text-lg">
              I create high-retention reels, shorts, and TikToks for creators
              and personal brands using sharp hooks, clean pacing, motion
              graphics, captions, and sound design.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#9ee68b] px-6 text-sm font-bold text-[#102014] transition hover:bg-[#bff4b1] focus:outline-none focus:ring-2 focus:ring-[#bff4b1] focus:ring-offset-2 focus:ring-offset-[#0f1511]"
              >
                View Portfolio
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#9ee68b]/35 px-6 text-sm font-bold text-[#e9f8e4] transition hover:border-[#9ee68b] hover:bg-[#9ee68b]/10 focus:outline-none focus:ring-2 focus:ring-[#bff4b1] focus:ring-offset-2 focus:ring-offset-[#0f1511]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Hire Me
              </a>
            </div>
          </div>

          <div className="grid content-center gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[#9ee68b]/15 bg-[#182219] p-5">
              <p className="text-4xl font-black text-[#9ee68b]">2+</p>
              <p className="mt-2 text-sm leading-6 text-[#dcebd8]">
                Years creating engaging content for creators and personal
                brands.
              </p>
            </div>
            <div className="rounded-lg border border-[#9ee68b]/15 bg-[#182219] p-5 sm:mt-10">
              <Sparkles className="h-8 w-8 text-[#9ee68b]" aria-hidden="true" />
              <p className="mt-4 text-sm leading-6 text-[#dcebd8]">
                Built around the first few seconds: hook, pace, retention, and
                clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9ee68b]">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#f8fff5] sm:text-5xl">
                Recent short-form edits
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#cfe5ca]">
              Browse by style below — use the arrows to move through each set
              and evaluate pacing, captions, storytelling, and polish.
            </p>
          </div>

          <div className="space-y-14 sm:space-y-16">
            {portfolioCategories.map((category, index) => (
              <div
                key={category.title}
                className="border-t border-[#9ee68b]/10 pt-14 first:border-t-0 first:pt-0 sm:pt-16"
              >
                <FadeIn delay={(index % 3) * 100}>
                  <h3 className="mb-6 text-center text-2xl font-black text-[#f8fff5] sm:text-3xl">
                    {category.title}
                  </h3>
                  <VideoCarousel videos={category.videos} />
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#9ee68b]/15 bg-[#132017] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9ee68b]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#f8fff5] sm:text-5xl">
              Editing built for retention
            </h2>
            <p className="mt-6 text-base leading-8 text-[#dcebd8]">
              Hi, I'm Prajit Narule. I'm a Short-Form Video Editor with 2+
              years of experience creating engaging, high-retention content for
              creators and personal brands. I specialize in transforming raw
              footage into videos that capture attention within the first few
              seconds and keep viewers engaged until the end.
            </p>
            <p className="mt-4 text-base leading-8 text-[#dcebd8]">
              My editing style focuses on clean storytelling, dynamic pacing,
              smooth transitions, motion graphics, captions, and sound design
              that help content perform better.
            </p>
          </FadeIn>

          <div className="grid gap-3">
            {differentiators.map((item, index) => (
              <FadeIn key={item} delay={index * 80}>
                <div className="flex gap-4 rounded-lg border border-[#9ee68b]/15 bg-[#0f1511]/70 p-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9ee68b]" />
                  <p className="text-sm leading-6 text-[#e9f8e4]">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9ee68b]">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#f8fff5] sm:text-5xl">
            Short-form editing support
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ icon: Icon, label }, index) => (
              <FadeIn key={label} delay={index * 80}>
                <div className="rounded-lg border border-[#9ee68b]/15 bg-[#182219] p-5">
                  <Icon className="h-7 w-7 text-[#9ee68b]" aria-hidden="true" />
                  <p className="mt-5 text-base font-bold leading-6 text-[#f8fff5]">
                    {label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16">
        <FadeIn className="mx-auto max-w-7xl rounded-lg border border-[#9ee68b]/20 bg-[#9ee68b]/10 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9ee68b]">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#f8fff5] sm:text-5xl">
              Ready to make better shorts?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#dcebd8]">
              Send over your raw footage, brief, or reference style and start a
              focused conversation about the edit.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-0 lg:min-w-[520px]">
            <a
              href="mailto:prajitnarule123@gmail.com"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#9ee68b] px-4 text-sm font-bold text-[#102014] transition hover:bg-[#bff4b1] focus:outline-none focus:ring-2 focus:ring-[#bff4b1] focus:ring-offset-2 focus:ring-offset-[#132017]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            <a
              href="tel:+919579517645"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#9ee68b]/35 px-4 text-sm font-bold text-[#e9f8e4] transition hover:border-[#9ee68b] hover:bg-[#9ee68b]/10 focus:outline-none focus:ring-2 focus:ring-[#bff4b1] focus:ring-offset-2 focus:ring-offset-[#132017]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Phone
            </a>
            <a
              href="https://www.linkedin.com/in/prajit-narule-40121b2a7"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#9ee68b]/35 px-4 text-sm font-bold text-[#e9f8e4] transition hover:border-[#9ee68b] hover:bg-[#9ee68b]/10 focus:outline-none focus:ring-2 focus:ring-[#bff4b1] focus:ring-offset-2 focus:ring-offset-[#132017]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  )
      }

