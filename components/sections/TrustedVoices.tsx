import { Quote } from "lucide-react";

type Testimonial = {
  multiplier?: string;
  title: string;
  quote: string;
  name: string;
  role: string;
};

const primary: Testimonial = {
  multiplier: "8X",
  title: "More users converted after redesign",
  quote:
    "Working with Owen has been a fantastic experience. His attention to detail and commitment to quality are evident in every project. He consistently delivers results that exceed expectations, making him a valuable asset to any team.",
  name: "Pablo Stanley",
  role: "Product Manager at Finovate",
};

const topRight: Testimonial = {
  multiplier: "3X",
  title: "Improved user engagement and sign-ups",
  quote:
    "Owen’s expertise in frontend development is remarkable. He brings creativity and innovation to the table, ensuring that every project is not only functional but also visually appealing.",
  name: "Pablo Stanley",
  role: "Product Manager at Finovate",
};

const bottomRight: Testimonial[] = [
  {
    title: "Reliable, thoughtful collaboration",
    quote:
      "Owen’s work ethic and dedication are truly inspiring. He approaches challenges with a positive attitude and consistently finds effective solutions.",
    name: "Pablo Stanley",
    role: "Product Manager at Finovate",
  },
  {
    title: "Complex ideas turned into polished UI",
    quote:
      "Owen has a unique ability to transform complex ideas into user-friendly designs. His contributions have significantly enhanced our projects.",
    name: "Pablo Stanley",
    role: "Product Manager at Finovate",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-xs text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function AvatarCircle({ name }: { name: string }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-emerald-400 text-sm font-semibold text-black">
      {initial}
    </div>
  );
}

export default function TrustedVoicesSection() {
  return (
    <section className="relative z-30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Trusted Voices
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Here&apos;s what people say about working with me — across projects,
            teams, and timelines.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
          <article className="flex h-full flex-col justify-between border border-white/10 bg-gradient-to-br from-cyan-900/60 via-slate-900/80 to-black p-7 md:p-9">
            <div>
              <p className="text-4xl font-extrabold text-white md:text-5xl">
                {primary.multiplier}
              </p>
              <h3 className="mt-4 text-lg font-semibold md:text-xl">
                {primary.title}
              </h3>

              <div className="mt-4">
                <Stars />
              </div>

              <p className="mt-5 text-sm leading-6 text-white/75 md:text-[15px]">
                {primary.quote}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <AvatarCircle name={primary.name} />
                <div>
                  <p className="text-sm font-medium">{primary.name}</p>
                  <p className="text-xs text-white/60">{primary.role}</p>
                </div>
              </div>
              <Quote className="h-6 w-6 text-white/40" />
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <article className="border border-white/10 bg-zinc-950/70 p-7 md:p-8">
              <div>
                <div className="flex items-center gap-3">
                  {topRight.multiplier && (
                    <span className="text-2xl font-bold">
                      {topRight.multiplier}
                    </span>
                  )}
                  <h3 className="text-sm font-semibold md:text-base">
                    {topRight.title}
                  </h3>
                </div>

                <div className="mt-3">
                  <Stars />
                </div>

                <p className="mt-4 text-sm leading-6 text-white/75 md:text-[15px]">
                  {topRight.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AvatarCircle name={topRight.name} />
                  <div className="text-left">
                    <p className="text-sm font-medium">{topRight.name}</p>
                    <p className="text-xs text-white/60">{topRight.role}</p>
                  </div>
                </div>
                <Quote className="h-5 w-5 text-white/40" />
              </div>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              {bottomRight.map((t, idx) => (
                <article
                  key={idx}
                  className="flex flex-col justify-between border border-white/10 bg-zinc-950/70 p-7"
                >
                  <div>
                    <div className="mb-3">
                      <Stars />
                    </div>
                    <h3 className="text-sm font-semibold">{t.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/75">
                      {t.quote}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <AvatarCircle name={t.name} />
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-white/60">{t.role}</p>
                      </div>
                    </div>
                    <Quote className="h-5 w-5 text-white/40" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
