export default function Home() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "Leading the company with 15+ years of experience in tech innovation.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Expert in software architecture and emerging technologies.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Creative director with a passion for user-centered design.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in modern web technologies.",
    },
    {
      id: 5,
      name: "Jessica Lee",
      role: "Product Manager",
      bio: "Driving product strategy and user experience excellence.",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Marketing Director",
      bio: "Building brand awareness and driving growth strategies.",
    },
    {
      id: 7,
      name: "Amanda Garcia",
      role: "Senior Engineer",
      bio: "Backend specialist focused on scalable infrastructure.",
    },
    {
      id: 8,
      name: "Robert Taylor",
      role: "UX Researcher",
      bio: "Understanding user needs through data-driven insights.",
    },
    {
      id: 9,
      name: "Lisa Anderson",
      role: "Operations Manager",
      bio: "Optimizing workflows and ensuring seamless operations.",
    },
    {
      id: 10,
      name: "Kevin Martinez",
      role: "Data Scientist",
      bio: "Transforming data into actionable business intelligence.",
    },
    {
      id: 11,
      name: "Rachel Brown",
      role: "Customer Success Lead",
      bio: "Dedicated to delivering exceptional customer experiences.",
    },
    {
      id: 12,
      name: "Daniel Kim",
      role: "Security Engineer",
      bio: "Protecting systems and ensuring data security compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Our Team
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Meet the talented people behind our success
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
