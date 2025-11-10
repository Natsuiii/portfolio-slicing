// components/sections/ProjectsSection.tsx
import Image from "next/image";
import Link from "next/link";

type Project = {
  title?: string;
  year?: string;
  image?: string;
  href?: string;
  placeholder?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "TMDB Movie Explorer",
    year: "2025",
    image: "/assets/project_image/tmdb.png",
    href: "https://ecommerce-fe-omega-wine.vercel.app/",
  },
  {
    title: "E-Commerce Storefront",
    year: "2025",
    image: "/assets/project_image/ecommerce.png",
    href: "https://challenge-9-natsuiii.vercel.app/",
  },
  {
    placeholder: true,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Bridging Design and Development
          </h2>
          <p className="mt-3 text-sm text-white/70">
            These are real projects where I implemented frontend interfaces with
            precision and attention to detail.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, year, image, href, placeholder }: Project) {
  const content = (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
        {placeholder ? (
          <div className="h-full w-full bg-gradient-to-br from-white/5 via-white/0 to-white/10" />
        ) : (
          image && (
            <Image
              src={image}
              alt={title ?? "Project screenshot"}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          )
        )}
      </div>

      {!placeholder && (
        <div className="mt-4">
          <h3 className="text-base font-semibold">{title}</h3>
          {year && (
            <p className="mt-1 text-sm text-white/60">
              {year}
            </p>
          )}
        </div>
      )}
    </div>
  );

  if (!placeholder && href) {
    return (
      <Link href={href} target="_blank" rel="noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}
