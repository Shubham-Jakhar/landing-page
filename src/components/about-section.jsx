"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Building2, Target, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Sammunat
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Sammunat LLC is a digital solutions company helping startups and businesses grow through modern
                technology, clean design, and scalable systems. We transform ideas into powerful digital experiences.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    50+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    40+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Years</div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Building2, title: "Modern Technology", desc: "Latest tools and frameworks" },
                { icon: Target, title: "Clean Design", desc: "User-focused interfaces" },
                { icon: Users, title: "Scalable Systems", desc: "Built for growth" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
