import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(916) 936-6525";
const TEL = "tel:+19169366525";
const EMAIL = "4hdhvac@gmail.com";
const MAPS =
  "https://www.google.com/maps/search/?api=1&query=H%26D%20Heating%20and%20Air%20Conditioning%20Services%2C%20Inc.&query_place_id=ChIJH7xjWOb5YkwRTRf1JSWIcYU";
const FACEBOOK = "https://www.facebook.com/HDHeatingandAirConditioning";
const NEXTDOOR = "https://nextdoor.com/pages/hd-heating-and-air-conditioning-services-wes";

const nav = [
  ["Services", "#services"],
  ["Reviews", "#reviews"],
  ["About", "#about"],
  ["Our Work", "#work"],
  ["FAQ", "#faq"],
];

const services = [
  {
    icon: "snow",
    title: "AC Repair",
    text: "When the air quits in the middle of a Sacramento heat wave, we come out the same day, often after hours. We find the real cause, explain it in plain words and get the cold air back on.",
    featured: true,
  },
  {
    icon: "flame",
    title: "Heater & Furnace Repair",
    text: "No heat on a cold winter night? We fix furnaces and heaters of every common make. If we come back to re-check a system and nothing is wrong, we tell you so and don't charge for it.",
  },
  {
    icon: "fan",
    title: "HVAC System Replacement",
    text: "When an old system is past saving, we replace it with a properly sized new unit for your home, or a new package unit for your business, and haul the old equipment away.",
  },
  {
    icon: "building",
    title: "Commercial A/C Service",
    text: "Offices, shops and light commercial buildings. You get an honest diagnosis of the actual problem, not a list of repairs you don't need, and fair pricing on new package units.",
  },
  {
    icon: "drop",
    title: "Condensate Leak Repair",
    text: "Water dripping from the air handler or ceiling? We clear and repair condensate lines and pans, and show you what to watch for so it doesn't happen again.",
  },
  {
    icon: "wrench",
    title: "HVAC Maintenance",
    text: "A seasonal tune-up catches small problems before they become a breakdown on the hottest day of the year. We clean, test and check the whole system, heating and cooling.",
  },
];

const reviews = [
  {
    name: "TC C.",
    job: "AC out during a heat wave",
    text: "Our home warranty company couldn't send anyone for a week. Humberto finished the job he was on, came right over, shared his live location so we knew when he'd arrive, and checked everything thoroughly.",
  },
  {
    name: "Blanche L.",
    job: "Hard-to-find AC part",
    text: "The manufacturer said the part would take two to three weeks. Humberto found another way to get it and had us running again within days.",
  },
  {
    name: "Fabian R.",
    job: "Commercial A/C",
    text: "He gave us an honest diagnosis of the real problem instead of selling us repairs we didn't need, and his price on a new package unit was very reasonable.",
  },
  {
    name: "Laura V.",
    job: "Heater repair",
    text: "He fixed our heater, then came back to re-inspect it. Nothing was wrong the second time and he didn't charge us for the visit.",
  },
  {
    name: "Beth A.",
    job: "AC replacement at her dad's house",
    text: "He replaced my dad's broken, outdated AC and even helped connect us with other trades we needed for the house.",
  },
  {
    name: "Google reviewer",
    job: "After-hours AC call",
    text: "Came out after hours and had our AC running again in no time.",
  },
];

const why = [
  { icon: "clock", title: "Same day, even after hours", text: "Customers say Humberto shows up when warranty companies say \"next week.\" Service is available 24/7." },
  { icon: "pin", title: "You know when he'll arrive", text: "Humberto shares his live location so you're not stuck waiting at home all afternoon." },
  { icon: "search", title: "Honest diagnosis", text: "He fixes what's actually broken and tells you when nothing is. No upselling." },
  { icon: "truck", title: "Parts in days, not weeks", text: "When a part is back-ordered, he finds another route to get it so you're not left without air." },
];

const steps = [
  { title: "Call or email", text: `Call ${PHONE} any time, day or night. Tell us what the system is doing and when it started.` },
  { title: "We come out", text: "Usually the same day. Humberto shares his location so you can see when he's close." },
  { title: "Honest diagnosis", text: "We find the real cause, explain your options and give you a clear price before any work starts." },
  { title: "Fixed and checked", text: "We make the repair, test the whole system and make sure it's heating or cooling the way it should." },
];

const faqs = [
  {
    q: "Do you really answer at night and on weekends?",
    a: "Yes. H&D offers 24/7 service for heating and cooling emergencies. Many of our reviews come from customers whose AC went out after hours or during a heat wave, and we came out that same day.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve homes and businesses across the Sacramento area. If you're not sure we cover your neighborhood, give us a call and we'll tell you right away.",
  },
  {
    q: "My home warranty company can't come for a week. Can you help?",
    a: "Often, yes. Customers regularly call us when their warranty company is backed up. We can usually get to you much sooner and get the system running.",
  },
  {
    q: "Will you try to sell me a new system?",
    a: "Only if it truly makes sense. Customers mention again and again that Humberto diagnoses the real problem and doesn't push unnecessary repairs or replacements. If a repair will do, we'll tell you.",
  },
  {
    q: "What if you need a part that's back-ordered?",
    a: "We look for another source. In one recent job the manufacturer quoted two to three weeks for a part, and we had the customer running again within days.",
  },
  {
    q: "Do you work on commercial systems?",
    a: "Yes. We service commercial A/C and replace package units for offices, shops and small commercial buildings.",
  },
  {
    q: "How much does a service call cost?",
    a: `Pricing depends on the problem, so call ${PHONE} and we'll talk it through. Customers describe our prices as fair and reasonable, and you'll always get the price before we start.`,
  },
];

const gallery = [
  { src: "/images/p5.jpg", alt: "H&D technician servicing a rooftop air conditioning unit" },
  { src: "/images/p3.jpg", alt: "Package air conditioning unit beside a Sacramento-area home" },
  { src: "/images/p11.jpg", alt: "New outdoor AC condenser installed beside a house" },
  { src: "/images/p13.jpg", alt: "New furnace installed in a hallway closet" },
  { src: "/images/p4.jpg", alt: "Furnace and ductwork in an attic" },
  { src: "/images/p6.jpg", alt: "Insulated ductwork and plenum in an attic" },
  { src: "/images/p14.jpg", alt: "New air handler ready for installation" },
  { src: "/images/p15.jpg", alt: "Furnace closet prepared for a new system" },
  { src: "/images/p7.jpg", alt: "Furnace burners being inspected during a heater repair" },
  { src: "/images/p12.jpg", alt: "Furnace burner assembly removed for cleaning" },
  { src: "/images/p2.jpg", alt: "Technician checking refrigerant pressures on an AC unit" },
  { src: "/images/p10.jpg", alt: "Dirty, worn AC condenser coil before service" },
  { src: "/images/p9.jpg", alt: "Old outdoor AC unit before replacement" },
  { src: "/images/p1.jpg", alt: "Return air grille in a hallway after an HVAC job" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "H&D Heating and Air Conditioning Services, Inc.",
  telephone: "+1-916-936-6525",
  email: EMAIL,
  image: "/images/p8.jpg",
  areaServed: "Sacramento, CA",
  address: { "@type": "PostalAddress", addressLocality: "Sacramento", addressRegion: "CA", addressCountry: "US" },
  openingHours: "Mo-Su 00:00-23:59",
  founder: { "@type": "Person", name: "Humberto" },
  sameAs: [FACEBOOK, NEXTDOOR],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "335" },
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-3 text-[0.95rem] font-semibold ${light ? "text-white/80" : "text-cta"}`}>{children}</p>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-[0.95rem] text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Serving the Sacramento area</span>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Open 24 hours, 7 days a week</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="H&D Heating and Air, back to top">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white"><Icon name="fan" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block text-[1.2rem] font-bold text-brand">H&amp;D Heating and Air</span>
              <span className="block text-[0.85rem] text-muted">Sacramento, CA</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-[1rem] font-medium text-ink hover:text-brand">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden text-[1.05rem] font-semibold text-brand md:block">{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex"><Icon name="phone" className="ring h-5 w-5" /> Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-12 w-12 place-items-center rounded-xl bg-cta text-white sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="top" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative overflow-hidden bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-12 md:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="rise mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.95rem] font-medium text-brand ring-1 ring-line">
                <Icon name="clock" className="h-4 w-4 text-cta" /> Same-day service, 24 hours a day
              </p>
              <h1 className="rise d1 text-[clamp(2.25rem,5vw,3.75rem)] text-brand-deep">
                Heating &amp; AC Repair in Sacramento, <span className="text-cta">Day or Night</span>
              </h1>
              <p className="rise d2 mt-5 max-w-[34rem] text-[1.2rem] text-muted">
                Owner Humberto and the H&amp;D team fix air conditioners, heaters and furnaces across the Sacramento area, often the same day you call. Honest diagnosis, fair prices, and you&apos;ll know exactly when we&apos;re on the way.
              </p>
              <div className="rise d3 mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta"><Icon name="phone" className="ring h-5 w-5" /> Call {PHONE}</a>
                <a href="#services" className="btn btn-outline">See our services <Icon name="arrow" className="arrow h-5 w-5" /></a>
              </div>
              <div className="rise d3 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[1rem] text-ink">
                <span className="flex items-center gap-2"><Stars className="h-5 w-5" /> <strong>5.0</strong></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:decoration-brand">335 Google reviews</a>
                <span className="flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4 text-brand" /> 24/7 service</span>
                <span className="flex items-center gap-1.5"><Icon name="user" className="h-4 w-4 text-brand" /> Owner-led</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/p8.jpg"
                alt="Humberto of H&D Heating and Air on a job site while a crane lifts a new rooftop unit"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_oklch(0.25_0.08_260/.55)]"
              />
              <figure className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-line sm:left-auto sm:right-[-1rem] sm:max-w-[20rem]">
                <Stars className="h-4 w-4" />
                <blockquote className="mt-2 text-[1rem] leading-snug text-ink">&ldquo;Home warranty couldn&apos;t come for a week. Humberto came right over.&rdquo;</blockquote>
                <figcaption className="mt-2 text-[0.9rem] text-muted">TC C. &middot; AC repair in a heat wave</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              ["5.0 on Google", "from 335 reviews", "thumb"],
              ["24/7 service", "nights and weekends", "clock"],
              ["Same-day repairs", "even in heat waves", "bolt"],
              ["Homes & businesses", "residential + commercial", "home"],
            ].map(([t, s, i]) => (
              <div key={t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10"><Icon name={i} className="h-6 w-6" /></span>
                <span><span className="block font-semibold">{t}</span><span className="block text-[0.95rem] text-white/75">{s}</span></span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[44rem]">
              <Eyebrow>Heating and cooling services</Eyebrow>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] text-brand-deep">Everything your heating and air system needs</h2>
              <p className="mt-4 text-muted">
                From a quick repair on a 105-degree afternoon to a full system replacement, H&amp;D handles residential and commercial HVAC across the Sacramento area. Every job starts with an honest look at what&apos;s actually wrong.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className={`reveal lift relative rounded-2xl bg-white p-7 ring-1 ${s.featured ? "ring-2 ring-cta" : "ring-line"}`}>
                  {s.featured && <span className="absolute right-5 top-5 rounded-full bg-cta/10 px-3 py-1 text-[0.85rem] font-semibold text-cta">Most called for</span>}
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-5 text-[1.35rem] text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-[1.05rem] text-muted">{s.text}</p>
                  <a href={TEL} className="cardlink mt-5 inline-flex items-center gap-1.5 font-semibold text-brand">Call about this <Icon name="arrow" className="arrow h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal mx-auto max-w-[44rem] text-center">
              <div className="flex justify-center"><Stars className="h-6 w-6" /></div>
              <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.75rem)] text-brand-deep">Rated 5.0 from 335 Google reviews</h2>
              <p className="mt-4 text-muted">
                Every single review is five stars. Here&apos;s what Sacramento-area homeowners and business owners say about calling H&amp;D.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name + r.job} className="reveal flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft font-semibold text-brand" aria-hidden="true">{r.name.charAt(0)}</span>
                    <span>
                      <span className="block font-semibold text-ink">{r.name}</span>
                      <span className="block text-[0.9rem] text-muted">{r.job}</span>
                    </span>
                  </div>
                  <Stars className="mt-4 h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[1.05rem] text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 text-[0.85rem] text-muted">Google review</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Read all 335 reviews on Google <Icon name="arrow" className="arrow h-5 w-5" /></a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal grid grid-cols-2 gap-4">
              <img src="/images/p5.jpg" alt="H&D technician working on a rooftop AC unit" className="aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
              <img src="/images/p13.jpg" alt="Clean new furnace installation by H&D" className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover" loading="lazy" />
            </div>
            <div className="reveal">
              <Eyebrow>About H&amp;D</Eyebrow>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] text-brand-deep">Humberto treats your home like it matters</h2>
              <p className="mt-5 text-muted">
                H&amp;D Heating and Air Conditioning Services is a Sacramento-area HVAC company led by owner Humberto. We repair, replace and maintain heating and cooling systems for homes and businesses, and we pick up the phone around the clock.
              </p>
              <p className="mt-4 text-muted">
                Customers call Humberto &ldquo;a class act.&rdquo; He finishes one job and heads straight to the next, shares his live location so you know when he&apos;ll pull up, and takes the time to explain what he finds. When a manufacturer says a part will take three weeks, he goes looking for another way. When he comes back to re-check a system and it&apos;s fine, he doesn&apos;t send a bill.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {why.map((w) => (
                  <div key={w.title} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cta/10 text-cta"><Icon name={w.icon} className="h-5 w-5" /></span>
                    <span><span className="block font-semibold text-ink">{w.title}</span><span className="block text-[1rem] text-muted">{w.text}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal max-w-[44rem]">
              <Eyebrow>How it works</Eyebrow>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] text-brand-deep">From your call to cool air in four steps</h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-6 ring-1 ring-line">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand text-[1.6rem] font-bold text-white">{i + 1}</span>
                  <h3 className="mt-5 text-[1.25rem] text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-[1.02rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="reveal flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[40rem]">
                <Eyebrow>Our work</Eyebrow>
                <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] text-brand-deep">Real jobs from around Sacramento</h2>
                <p className="mt-4 text-muted">Rooftop units, attic furnaces, closet air handlers and backyard condensers. These are photos from our own service calls.</p>
              </div>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="cardlink inline-flex items-center gap-1.5 font-semibold text-brand">More on Facebook <Icon name="arrow" className="arrow h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map((g, i) => (
                <div key={g.src} className={`zoom overflow-hidden rounded-xl bg-tint ${i === 0 ? "col-span-2 row-span-2" : ""}`}>
                  <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div className="reveal">
              <Eyebrow>Service area</Eyebrow>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] text-brand-deep">Heating and air service across the Sacramento area</h2>
              <p className="mt-4 text-muted">
                We work in homes and businesses throughout Sacramento and the surrounding communities. Not sure if you&apos;re in range? Call and ask. If we can get to you, we&apos;ll tell you when.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {["Sacramento", "Homes", "Rental properties", "Offices & shops", "Commercial buildings"].map((c) => (
                  <li key={c} className="rounded-full bg-white px-4 py-2 text-[1rem] ring-1 ring-line">{c}</li>
                ))}
              </ul>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="ring h-5 w-5" /> Check your area: {PHONE}</a>
            </div>
            <div className="reveal overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe
                title="Map of the Sacramento area served by H&D Heating and Air"
                src="https://maps.google.com/maps?q=Sacramento%2C%20CA&z=10&output=embed"
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-[48rem] px-5 md:px-6">
            <div className="reveal text-center">
              <Eyebrow>Questions</Eyebrow>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] text-brand-deep">Frequently asked questions</h2>
            </div>
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex items-center justify-between gap-6 text-[1.15rem] font-semibold text-ink">
                    {f.q}
                    <span className="tog grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="mt-3 pr-12 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-16 md:px-6 md:pb-24">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-brand px-6 py-12 text-white md:px-14 md:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)]">AC or heater acting up? Call Humberto at {PHONE}</h2>
                <p className="mt-4 max-w-[36rem] text-white/80">We answer 24 hours a day, 7 days a week. Tell us what&apos;s going on and we&apos;ll get someone to you, usually the same day.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={TEL} className="btn btn-cta"><Icon name="phone" className="ring h-5 w-5" /> Call {PHONE}</a>
                <a href={`mailto:${EMAIL}`} className="btn btn-white"><Icon name="mail" className="h-5 w-5" /> Email us</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-tint">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
          <div>
            <p className="text-[1.25rem] font-bold text-brand">H&amp;D Heating and Air Conditioning Services, Inc.</p>
            <p className="mt-3 max-w-[22rem] text-[1rem] text-muted">24/7 residential and commercial heating and cooling repair, replacement and maintenance in the Sacramento area.</p>
            <ul className="mt-5 space-y-2 text-[1rem]">
              <li><a href={TEL} className="flex items-center gap-2 font-semibold text-brand"><Icon name="phone" className="h-4 w-4" /> {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-ink hover:text-brand"><Icon name="mail" className="h-4 w-4" /> {EMAIL}</a></li>
              <li className="flex items-center gap-2 text-ink"><Icon name="clock" className="h-4 w-4" /> Open 24 hours, 7 days a week</li>
              <li className="flex items-center gap-2 text-ink"><Icon name="pin" className="h-4 w-4" /> Sacramento area, California</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Services</p>
            <ul className="mt-3 space-y-2 text-[1rem] text-muted">
              {services.map((s) => <li key={s.title}><a href="#services" className="hover:text-brand">{s.title}</a></li>)}
              <li><a href={TEL} className="hover:text-brand">24/7 Emergency Service</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Find us</p>
            <ul className="mt-3 space-y-2 text-[1rem] text-muted">
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Google reviews</a></li>
              <li><a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Facebook</a></li>
              <li><a href={NEXTDOOR} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Nextdoor</a></li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="H&D on Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand ring-1 ring-line hover:bg-brand hover:text-white"><Icon name="facebook" className="h-5 w-5" /></a>
              <a href={NEXTDOOR} target="_blank" rel="noopener noreferrer" aria-label="H&D on Nextdoor" className="grid h-11 w-11 place-items-center rounded-full bg-white text-brand ring-1 ring-line hover:bg-brand hover:text-white"><Icon name="home" className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-[1200px] px-5 py-5 text-[0.9rem] text-muted md:px-6">&copy; {new Date().getFullYear()} H&amp;D Heating and Air Conditioning Services, Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-2 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" /> Call</a>
        <a href={`mailto:${EMAIL}`} className="btn btn-outline"><Icon name="mail" className="h-5 w-5" /> Email</a>
      </div>
    </>
  );
}
