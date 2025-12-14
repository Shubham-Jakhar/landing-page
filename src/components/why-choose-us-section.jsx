"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Lightbulb, Cpu, HeartHandshake, Clock } from "lucide-react"

const features = [
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description: "Tailored strategies designed specifically for your unique business requirements.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "We use cutting-edge tools and frameworks to build future-proof solutions.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused Approach",
    description: "Your success is our priority. We work closely with you every step of the way.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and ensure your project is delivered when promised.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver excellence through expertise, innovation, and dedication
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <div className="relative overflow-hidden text-center group p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300">

                {/* ⭐ Starry Dots */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="star star-1" />
                  <span className="star star-2" />
                  <span className="star star-3" />
                  <span className="star star-4" />
                  <span className="star star-5" />
                  <span className="star star-6" />
                </div>

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="relative z-10 text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>

                <p className="relative z-10 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>

            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
