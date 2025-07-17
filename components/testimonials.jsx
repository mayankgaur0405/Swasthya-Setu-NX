"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="px-4 pt-22 pb-10 bg-muted/30">
      <div className="container mx-auto px-4">
        
        {/* Header with fade in */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="outline"
            className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4"
          >
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from patients and doctors using our healthcare platform
          </p>
        </motion.div>

        {/* Testimonials grid with fade in */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-emerald-900/20 hover:border-emerald-800/40 transition-all duration-300 hover:scale-110 hover:shadow-3xl hover:shadow-emerald-900/25 group cursor-pointer h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center mr-4 group-hover:bg-emerald-800/30 group-hover:scale-110 transition-all duration-300">
                      <span className="text-emerald-400 font-bold group-hover:text-emerald-300 transition-colors duration-300">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-emerald-100 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground group-hover:text-slate-300 transition-colors duration-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
