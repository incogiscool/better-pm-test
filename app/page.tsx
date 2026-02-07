import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "David Park",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Jessica Williams",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "James Anderson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Amanda Martinez",
    role: "Senior Designer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Robert Taylor",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Lisa Thompson",
    role: "UX Researcher",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
  },
  {
    id: 10,
    name: "Daniel Kim",
    role: "Frontend Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 11,
    name: "Sophie Brown",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop",
  },
  {
    id: 12,
    name: "Alex Turner",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=400&h=400&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
              Meet Our Team
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Talented individuals working together to create amazing experiences
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900"
              >
                <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
