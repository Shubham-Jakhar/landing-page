"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Database, Palette, Video, Megaphone } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance.",
  },
  {
    icon: Database,
    title: "CRM / ERP Solutions",
    description: "Streamline your business operations with tailored CRM and ERP systems.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: Video,
    title: "Video Editing & Content",
    description: "Professional video production and content creation for your marketing needs.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns to grow your online presence and reach your audience.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={index * 100}>
              <Card className="relative overflow-hidden group h-full bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-purple-500 dark:hover:border-purple-400 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="star star-1" />
                  <span className="star star-2" />
                  <span className="star star-3" />
                  <span className="star star-4" />
                  <span className="star star-5" />
                </div>
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>

            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
