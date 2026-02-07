import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "Head of Design",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carol",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Lead Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: 5,
    name: "Emma Davis",
    role: "Product Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: 6,
    name: "Frank Miller",
    role: "Marketing Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frank",
  },
  {
    id: 7,
    name: "Grace Wilson",
    role: "Senior Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
  },
  {
    id: 8,
    name: "Henry Moore",
    role: "Full Stack Developer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Henry",
  },
  {
    id: 9,
    name: "Ivy Taylor",
    role: "UX Researcher",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ivy",
  },
  {
    id: 10,
    name: "Jack Anderson",
    role: "DevOps Engineer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack",
  },
  {
    id: 11,
    name: "Kate Thomas",
    role: "Content Strategist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kate",
  },
  {
    id: 12,
    name: "Leo Jackson",
    role: "Data Analyst",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leo",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
              Meet Our Team
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Talented individuals working together to create amazing products
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative flex flex-col items-center rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <div className="mb-4 h-24 w-24 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
