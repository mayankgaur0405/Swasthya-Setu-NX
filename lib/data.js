import {
  Calendar,
  Video,
  CreditCard,
  User,
  FileText,
  ShieldCheck,
} from "lucide-react";

// JSON data for features
export const features = [
  {
    icon: <User className="h-6 w-6 text-emerald-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and complete your profile to get personalized healthcare recommendations and services.",
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-400" />,
    title: "Book Appointments",
    description:
      "Browse doctor profiles, check availability, and book appointments that fit your schedule.",
  },
  {
    icon: <Video className="h-6 w-6 text-emerald-400" />,
    title: "Video Consultation",
    description:
      "Connect with doctors through secure, high-quality video consultations from the comfort of your home.",
  },
  {
    icon: <CreditCard className="h-6 w-6 text-emerald-400" />,
    title: "Consultation Credits",
    description:
      "Purchase credit packages that fit your healthcare needs with our simple subscription model.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: "Verified Doctors",
    description:
      "All healthcare providers are carefully vetted and verified to ensure quality care.",
  },
  {
    icon: <FileText className="h-6 w-6 text-emerald-400" />,
    title: "Medical Documentation",
    description:
      "Access and manage your appointment history, doctor's notes, and medical recommendations.",
  },
];

// JSON data for testimonials
export const testimonials = [
  {
    initials: "AS",
    name: "Asha Singh",
    role: "Working Professional",
    quote:
      "Scheduling an online consultation took minutes. I got expert advice from home without taking a leave from work or waiting in a clinic.",
  },
  {
    initials: "DK",
    name: "Dr.Kunal Rai",
    role: "Dermatologist",
    quote:
      "This platform has transformed how I consult patients. It’s seamless, time-efficient, and helps me connect with people beyond the clinic walls.",
  },
  {
    initials: "RM",
    name: "Rohan Mathur",
    role: "Father of Two",
    quote:
      "The credit model is flexible and easy. I purchased a family plan, and we've used it multiple times without worrying about hidden costs.",
  },
];


// JSON data for credit system benefits
export const creditBenefits = [
  "Every session uses <strong class='text-emerald-400'>2 credits</strong>, no matter how long it lasts",
  "<strong class='text-emerald-400'>Credits never expire</strong> — keep them until you need care",
  "Active plans receive <strong class='text-emerald-400'>new credits monthly</strong> for regular use",
  "Change or cancel anytime — <strong class='text-emerald-400'>no hidden fees</strong> or lock-ins",
];

