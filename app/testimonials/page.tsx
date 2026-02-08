import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechFlow Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
    review: "Outstanding service and exceptional quality. The team exceeded our expectations at every turn. Their attention to detail and commitment to excellence has transformed our business operations completely.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
    review: "Working with this team has been an absolute game-changer for our product development. They delivered ahead of schedule and maintained excellent communication throughout the entire process.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "StartUp Ventures",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
    review: "I couldn't be happier with the results. The professionalism and expertise displayed throughout our collaboration were truly impressive. Highly recommend to anyone looking for top-tier service.",
  },
  {
    id: 4,
    name: "James Thompson",
    role: "Director of Engineering",
    company: "CloudScale Systems",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    rating: 5,
    review: "The level of technical expertise and problem-solving ability is unmatched. They took the time to understand our unique challenges and delivered solutions that exceeded our requirements.",
  },
  {
    id: 5,
    name: "Olivia Park",
    role: "Marketing Director",
    company: "Digital Dreams Co",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
    rating: 5,
    review: "From concept to execution, everything was handled flawlessly. The creative approach and strategic thinking brought fresh perspectives to our campaigns. Results speak for themselves.",
  },
  {
    id: 6,
    name: "Daniel Roberts",
    role: "CTO",
    company: "DataPrime Analytics",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel",
    rating: 5,
    review: "Exceptional technical skills combined with outstanding customer service. They addressed every concern promptly and went above and beyond to ensure our satisfaction.",
  },
  {
    id: 7,
    name: "Sophia Williams",
    role: "VP of Operations",
    company: "NextGen Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia",
    rating: 5,
    review: "The efficiency and quality of work delivered has been phenomenal. Our team productivity increased significantly, and the implementation was seamless. Could not ask for a better experience.",
  },
  {
    id: 8,
    name: "Alexander Kim",
    role: "Lead Developer",
    company: "CodeCraft Studios",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander",
    rating: 5,
    review: "Best decision we made this year. The technical depth and modern approach to development perfectly aligned with our vision. They truly understand what businesses need to succeed.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, index) => (
        <svg
          key={index}
          className="h-5 w-5 fill-yellow-400"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
              What Our Customers Say
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Real feedback from real people who trust our services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative flex flex-col rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900 dark:hover:bg-zinc-800"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
