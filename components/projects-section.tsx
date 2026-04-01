"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Nordheim Residence",
    category: "Residential",
    year: "2024",
    location: "Oslo, Norway",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    description: "A contemporary family home that harmoniously blends with its natural surroundings. The design emphasizes open spaces and natural light, creating a seamless connection between indoor and outdoor living.",
    materials: "Concrete, Oak Wood, Glass, Steel",
    measurement: "450 sqm / 4,844 sq ft",
    costing: "$2.4M USD",
    challenges: "Integrating the structure into a steep hillside while maintaining panoramic fjord views and ensuring thermal efficiency in harsh Nordic winters.",
    liveLink: "https://example.com/nordheim",
  },
  {
    title: "The Lund Pavilion",
    category: "Cultural",
    year: "2023",
    location: "Lund, Sweden",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&q=80",
    description: "A cultural pavilion designed to host temporary exhibitions and community events. The structure features a modular design that allows for flexible configurations.",
    materials: "Cross-Laminated Timber, Polycarbonate, Recycled Steel",
    measurement: "320 sqm / 3,444 sq ft",
    costing: "$890K USD",
    challenges: "Creating a sustainable, demountable structure that could be relocated while meeting strict acoustic requirements for musical performances.",
    liveLink: "https://example.com/lund-pavilion",
  },
  {
    title: "Aalto Commercial Tower",
    category: "Commercial",
    year: "2023",
    location: "Helsinki, Finland",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    description: "A 24-story commercial tower featuring flexible office spaces with floor-to-ceiling windows. The building incorporates advanced sustainability features including rainwater harvesting and solar panels.",
    materials: "Reinforced Concrete, Aluminum Cladding, Low-E Glass",
    measurement: "18,500 sqm / 199,132 sq ft",
    costing: "$45M USD",
    challenges: "Achieving LEED Platinum certification while maximizing rentable floor area and navigating complex urban planning regulations in a historic district.",
    liveLink: "https://example.com/aalto-tower",
  },
  {
    title: "Bergman Cultural Centre",
    category: "Cultural",
    year: "2022",
    location: "Copenhagen, Denmark",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
    description: "A multi-purpose cultural center housing a 500-seat theater, gallery spaces, and artist studios. The design pays homage to Danish modernism while incorporating contemporary sustainable practices.",
    materials: "Brick, Blackened Steel, Terrazzo, White Oak",
    measurement: "8,200 sqm / 88,264 sq ft",
    costing: "$28M USD",
    challenges: "Acoustically isolating the theater from the busy urban environment while creating visual connections between interior spaces and the surrounding cityscape.",
    liveLink: "https://example.com/bergman-centre",
  },
]

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { ref, isVisible } = useScrollReveal(0.05)

  const currentProject = projects[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
            Projects
          </h2>
        </div>
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-4 md:mt-0">
          ({String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")})
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left: Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={currentProject.image || "/placeholder.svg"}
            alt={`${currentProject.title} - ${currentProject.category} project in ${currentProject.location}`}
            className="w-full aspect-[4/3] lg:aspect-[3/4] object-cover transition-all duration-500"
          />
        </div>

        {/* Right: Project Details */}
        <div className="flex flex-col">
          {/* Header with Live Link */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {currentProject.category} / {currentProject.year}
              </p>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground">
                {currentProject.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">{currentProject.location}</p>
            </div>
            {currentProject.liveLink && (
              <a
                href={currentProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-foreground hover:text-muted-foreground transition-colors group"
              >
                <span>View Live</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Overview
            </p>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
              {currentProject.description}
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Materials
              </p>
              <p className="text-sm text-foreground">{currentProject.materials}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Measurement
              </p>
              <p className="text-sm text-foreground">{currentProject.measurement}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Project Cost
              </p>
              <p className="text-sm text-foreground">{currentProject.costing}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                Year
              </p>
              <p className="text-sm text-foreground">{currentProject.year}</p>
            </div>
          </div>

          {/* Challenges */}
          <div className="mb-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Challenges
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {currentProject.challenges}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-auto pt-8 border-t border-border">
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center w-12 h-12 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="flex items-center justify-center w-12 h-12 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              aria-label="Next project"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="ml-auto flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-foreground w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
