import { GlassCard, GlassCardContent, GlassCardHeader, GlassCardTitle } from "@/components/ui/glass-card"
import { GlassButton } from "@/components/ui/glass-button"
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react"
import backgroundImage from "@/assets/background.jpg"
import profilePic from "@/assets/Ranjana-Tarini-Ravikumar.jpg"


const Portfolio = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/ranjana-tarini-ravikumar-023842133/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/ranjanaravikumar", label: "GitHub" },
    { icon: Phone, href: "tel:+16237595172", label: "Phone" },
    { icon: Mail, href: "mailto:ranjanaamutha@gmail.com", label: "Email" }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Main Portfolio Card */}
        <div className="w-full max-w-6xl animate-fade-in">
          <GlassCard className="p-4 sm:p-6 lg:p-8 border-white/20 shadow-2xl">
            <div className="flex flex-col items-center gap-6 text-center">
              {/* Profile Image */}
              <div className="animate-slide-up">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-white/30 shadow-xl transition-transform hover:scale-105 duration-300">
                    <img 
                      src={profilePic} 
                      alt="Ranjana Tarini Ravikumar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Name */}
                <div className="animate-slide-up">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                    Ranjana Tarini Ravikumar
                  </h1>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
                  <GlassButton 
                    size="lg" 
                    className="bg-white/20 text-white hover:bg-white hover:text-black px-6 lg:px-8 py-3 text-base font-medium group w-full sm:w-auto border border-white/30"
                    asChild
                  >
                    <a href="/about">
                      About Me
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </GlassButton>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon
                      return (
                        <GlassButton
                          key={index}
                          variant="ghost"
                          size="icon"
                          asChild
                          className="hover:bg-white/20 hover:text-white transition-all duration-300 border-white/20"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <a 
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                          >
                            <Icon className="h-4 w-4 lg:h-5 lg:w-5" />
                          </a>
                        </GlassButton>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Welcome Message */}
        <div className="mt-6 lg:mt-8 animate-fade-in px-4">
          <p className="text-center text-white/80 text-base lg:text-lg max-w-2xl mx-auto">
            Welcome to my portfolio. Explore my work and connect with me.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-4 lg:bottom-10 right-4 lg:right-10 w-12 h-12 lg:w-24 lg:h-24 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 lg:right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-10 lg:left-20 w-3 h-3 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '500ms' }} />
    </div>
  )
}

export default Portfolio