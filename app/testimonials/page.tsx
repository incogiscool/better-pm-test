import type { Metadata } from "next";
import { TestimonialCard } from "./components/TestimonialCard";
import { testimonials } from "./data/testimonials";

export const metadata: Metadata = {
  title: "Customer Testimonials | Create Next App",
  description: "Read what our customers have to say about their experience",
};

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
              Customer Testimonials
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Discover why thousands of customers trust us to deliver exceptional results. 
              Read their stories and experiences working with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
