import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description: "Read what our customers have to say about their experience with us",
};

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechCorp Solutions",
    rating: 5,
    review: "Working with this team has been an absolute game-changer for our business. Their attention to detail and commitment to excellence is unmatched. We've seen a 300% increase in productivity since implementing their solutions.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Innovation Labs",
    rating: 5,
    review: "The level of professionalism and expertise demonstrated throughout our project was exceptional. They delivered ahead of schedule and exceeded all our expectations. I highly recommend their services to anyone looking for quality work.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Dynamics",
    rating: 4,
    review: "Outstanding service from start to finish. The team was responsive, creative, and really understood our vision. They transformed our ideas into reality and helped us launch a product that our customers love.",
  },
  {
    id: 4,
    name: "James Thompson",
    role: "CTO",
    company: "CloudScale Systems",
    rating: 5,
    review: "Impressed by their technical knowledge and problem-solving abilities. They tackled complex challenges with ease and provided innovative solutions we hadn't even considered. Our infrastructure has never been more robust.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Founder",
    company: "StartupHub",
    rating: 5,
    review: "As a startup, we needed a partner who could move fast without sacrificing quality. This team delivered on both fronts perfectly. They've been instrumental in helping us scale from zero to thousands of users.",
  },
  {
    id: 6,
    name: "David Park",
    role: "Operations Manager",
    company: "Enterprise Global",
    rating: 4,
    review: "Fantastic collaboration experience with a team that truly cares about their clients' success. They went above and beyond to ensure our project was successful. The ongoing support has been exceptional as well.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 ${
            star <= rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-zinc-300 dark:text-zinc-600"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
              Customer Testimonials
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Hear what our satisfied customers have to say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900"
              >
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                
                <p className="mb-6 flex-grow text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {testimonial.review}
                </p>
                
                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4">
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
