"use client"

import { ScrollAnimation } from "@/components/scroll-animation"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Sammunat
              </h3>
              <p className="text-gray-400 mb-4">Building digital solutions that drive business growth.</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Web Development", "CRM Solutions", "UI/UX Design", "Video Editing", "Digital Marketing"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#services"
                        className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Our Work", "Testimonials", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-purple-400 transition-colors hover:translate-x-1 inline-block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>contact@sammunat.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>New York, NY</span>
                </li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {currentYear} Sammunat LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
