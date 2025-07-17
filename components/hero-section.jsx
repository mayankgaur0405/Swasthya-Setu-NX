"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { checkUser } from "@/lib/checkUser";

export default function HeroSection() {
  const [user, setUser] = useState(null);

  // Memoized function to fetch user once
  const fetchUser = useCallback(async () => {
    try {
      const userData = await checkUser();
      setUser(userData);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // Role-based button rendering - memoized
  // Prevents unnecessary re-renders (useMemo
  const buttonContent = useMemo(() => {
    if (!user) {
      //show buttons for unauthenticated users one for onboarding and one for exploring doctors
      return (
        <>
          <Button
            asChild
            size="lg"
            className="bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Link href="/onboarding">
              Start Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-emerald-700/30 hover:bg-muted/80"
          >
            <Link href="/doctors">Explore Doctors</Link>
          </Button>
        </>
      );
    }

    if (user.role === "PATIENT") {
      return (
        <Button
          asChild
          size="lg"
          className="bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Link href="/appointments">
            Go to My Appointments <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      );
    }

    if (user.role === "DOCTOR") {
      return (
        <Button
          asChild
          size="lg"
          className="bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Link href="/doctor">
            Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      );
    }

    return null;
  }, [user]);

  return (
    <section className="relative overflow-hidden px-4 pt-22 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                Consult with care, anytime
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Talk to a doctor <br />
              <span className="gradient-title">from the comfort of home</span>
            </motion.h1>

            <motion.div
              className="text-lg md:text-xl font-semibold gradient-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  "Book Appointments Instantly",
                  1500,
                  "Consult Real Doctors via Video",
                  1500,
                  "Secure & Private Healthcare",
                  1500,
                ]}
                speed={40}
                deletionSpeed={60}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our platform helps you book appointments, consult 1-on-1 via video,
              and manage your health with ease — all in one secure place.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {buttonContent}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/banner2.png"
              alt="Online doctor consultation"
              fill
              priority
              className="md:object-cover object-contain md:pt-14 rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
