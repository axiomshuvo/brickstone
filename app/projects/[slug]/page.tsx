"use client"

import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[currentIndex]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    )
  }

  const previousProject = projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1]
  const nextProject = projects[currentIndex === projects.length - 1 ? 0 : currentIndex + 1]

  const goToPrevious = () => {
    router.push(`/projects/${previousProject.slug}`)
  }

  const goToNext = () => {
    router.push(`/projects/${nextProject.slug}`)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50">
            ({String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")})
          </span>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20 px-6 py-16 md:px-12 lg:px-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} - ${project.category} project in ${project.location}`}
              className="w-full aspect-[4/3] lg:aspect-[3/4] object-cover"
            />
          </div>

          {/* Right: Project Details */}
          <div className="flex flex-col">
            {/* Header with Live Link */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  {project.category} / {project.year}
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-foreground">
                  {project.title}
                </h1>
                <p className="text-sm text-muted-foreground mt-2">{project.location}</p>
              </div>
              {project.liveLink && (
                <a
                  href={project.liveLink}
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
                {project.description}
              </p>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Materials
                </p>
                <p className="text-sm text-foreground">{project.materials}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Measurement
                </p>
                <p className="text-sm text-foreground">{project.measurement}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Project Cost
                </p>
                <p className="text-sm text-foreground">{project.costing}</p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Year
                </p>
                <p className="text-sm text-foreground">{project.year}</p>
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-10">
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Challenges
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.challenges}
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
                {projects.map((p, index) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-foreground w-6" : "bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to ${p.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
