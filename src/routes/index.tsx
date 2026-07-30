import { createFileRoute } from '@tanstack/react-router'
import {
  Captions,
  Clapperboard,
  Linkedin,
  Mail,
  Phone,
  Scissors,
  Sparkles,
  Volume2,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
})

const portfolioVideos = [
  {
    id: 'yJGu-8mpLGs',
    title: 'Short-form edit 01',
  },
  {
    id: 'cBxOQDVU0CE',
    title: 'Short-form edit 02',
  },
  {
    id: 'tCI9xxQgpA8',
    title: 'Short-form edit 03',
  },
  {
    id: 'QDvVJ21f5GA',
    title: 'Short-form edit 04',
  },
  {
    id: 'oqKdDjdWPog',
    title: 'Short-form edit 05',
  },
  {
    id: 'OtBxsV-_VwU',
    title: 'Short-form edit 06',
  },
  {
    id: 'U5gh6HBKglw',
    title: 'Short-form edit 07'
  },
    {
    id: 'CC8xlAtG8B8',
    title: 'Short-form edit 08'
  },
]

const differentiators = [
  'Hook-focused editing to maximize audience retention',
  'Fast-paced, clean, and modern editing style',
  'Custom animations and motion graphics tailored to each video',
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
                href="mailto:prajitnarule123@gmail.com"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#9ee68b]/35 px-6 text-sm font-bold text-[#e9f8e4] transition hover:border-[#9ee68b] hover:bg-[#9ee68b]/10 focus:outline-none focus:ring-2 focus:ring-[#bff4b1] focus:ring-offset-2 focus:ring-offset-[#0f1511]"
              >
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
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9ee68b]">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#f8fff5] sm:text-5xl">
                Recent short-form edits
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#cfe5ca]">
              All five samples are visible upfront so clients can quickly
              evaluate pacing, captions, storytelling, and polish.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {portfolioVideos.map((video) => (
              <article
                key={video.id}
                className="overflow-hidden rounded-lg border border-[#9ee68b]/20 bg-[#182219]"
              >
                <div className="aspect-[9/16] bg-[#101812]">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#9ee68b]/15 bg-[#132017] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
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
          </div>

          <div className="grid gap-3">
            {differentiators.map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-lg border border-[#9ee68b]/15 bg-[#0f1511]/70 p-4"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9ee68b]" />
                <p className="text-sm leading-6 text-[#e9f8e4]">{item}</p>
              </div>
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
            {services.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-lg border border-[#9ee68b]/15 bg-[#182219] p-5"
              >
                <Icon className="h-7 w-7 text-[#9ee68b]" aria-hidden="true" />
                <p className="mt-5 text-base font-bold leading-6 text-[#f8fff5]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 lg:px-10 lg:pb-16">
        <div className="mx-auto max-w-7xl rounded-lg border border-[#9ee68b]/20 bg-[#9ee68b]/10 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
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
        </div>
      </section>
    </main>
  )
            }
