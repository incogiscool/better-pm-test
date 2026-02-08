export interface Testimonial {
  id: number;
  customerName: string;
  customerRole?: string;
  customerCompany?: string;
  rating: number;
  reviewText: string;
  reviewDate: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    customerName: "Sarah Chen",
    customerRole: "VP of Engineering",
    customerCompany: "TechFlow Solutions",
    rating: 5,
    reviewText: "Outstanding service and exceptional results. The team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. Our productivity has increased by 40% since implementation.",
    reviewDate: "March 2024",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    customerName: "Michael Rodriguez",
    customerRole: "Founder & CEO",
    customerCompany: "StartupHub",
    rating: 5,
    reviewText: "Game-changing platform that transformed how we operate. The intuitive interface and powerful features made onboarding seamless. Highly recommend to any growing business.",
    reviewDate: "February 2024",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: 3,
    customerName: "Emily Watson",
    customerRole: "Operations Manager",
    customerCompany: "Global Logistics Corp",
    rating: 5,
    reviewText: "Best decision we made this year. The customer support is phenomenal and the product delivers exactly what was promised. We've seen significant improvements in efficiency and team collaboration.",
    reviewDate: "January 2024",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    id: 4,
    customerName: "David Kim",
    customerRole: "Product Designer",
    customerCompany: "Creative Studios",
    rating: 4,
    reviewText: "Really impressed with the attention to detail and user experience. The design is clean and modern, making it easy for our entire team to adopt. Looking forward to future updates.",
    reviewDate: "March 2024",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: 5,
    customerName: "Jessica Thompson",
    customerRole: "Marketing Director",
    customerCompany: "BrandWorks Agency",
    rating: 5,
    reviewText: "This has revolutionized our workflow completely. We can now handle three times the workload with the same team size. The analytics features provide invaluable insights that drive our strategy.",
    reviewDate: "February 2024",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
  },
  {
    id: 6,
    customerName: "Robert Patel",
    customerRole: "CTO",
    customerCompany: "DataSync Technologies",
    rating: 5,
    reviewText: "Exceptional quality and reliability. The technical architecture is solid and scales beautifully. Integration was straightforward and the documentation is comprehensive.",
    reviewDate: "January 2024",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
  },
  {
    id: 7,
    customerName: "Amanda Foster",
    customerRole: "HR Director",
    customerCompany: "PeopleFirst Inc",
    rating: 4,
    reviewText: "Great tool that our entire organization has embraced. The learning curve was minimal and the benefits were immediate. Customer service team is responsive and helpful.",
    reviewDate: "December 2023",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
  },
  {
    id: 8,
    customerName: "James Wilson",
    customerRole: "Small Business Owner",
    customerCompany: "Wilson & Associates",
    rating: 5,
    reviewText: "Perfect for small businesses like ours. Affordable, powerful, and easy to use. It's helped us compete with much larger companies in our industry.",
    reviewDate: "December 2023",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
];
