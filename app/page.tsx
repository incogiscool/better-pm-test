import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    bio: "Leading product strategy and vision with 8+ years of experience in tech.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer",
    bio: "Full-stack developer passionate about building scalable applications.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer",
    bio: "Creating beautiful and intuitive user experiences for modern web apps.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  },
  {
    id: 4,
    name: "David Kim",
    role: "DevOps Engineer",
    bio: "Ensuring smooth deployments and maintaining robust infrastructure.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Marketing Lead",
    bio: "Driving growth through strategic marketing and customer engagement.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica"
  },
  {
    id: 6,
    name: "Ryan Thompson",
    role: "QA Engineer",
    bio: "Maintaining quality standards and ensuring bug-free releases.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="mb-16 text-center">
          <Image
            className="mx-auto mb-8 dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={24}
            priority
          />
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Meet Our Team
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A diverse group of talented individuals working together to build amazing products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-white p-8 text-center transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-black dark:text-zinc-50">
                {member.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-base font-medium sm:flex-row sm:justify-center">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
