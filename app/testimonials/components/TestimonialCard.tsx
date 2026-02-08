import Image from "next/image";
import { StarRating } from "./StarRating";
import type { Testimonial } from "../data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { customerName, customerRole, customerCompany, rating, reviewText, reviewDate, avatarUrl } = testimonial;

  return (
    <article className="group flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-zinc-900 dark:hover:bg-zinc-800">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={customerName}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-zinc-600 dark:text-zinc-400">
              {customerName.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-black dark:text-zinc-50">
            {customerName}
          </h3>
          {customerRole && customerCompany && (
            <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
              {customerRole} at {customerCompany}
            </p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <StarRating rating={rating} />
      </div>

      <p className="mb-4 flex-1 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {reviewText}
      </p>

      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        {reviewDate}
      </p>
    </article>
  );
}
