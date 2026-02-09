'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FeatureCard } from '@/components/feature-card'
import {
  GitBranch,
  Box,
  Cloud,
  Zap,
  Users,
  Award,
  ArrowRight,
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <GitBranch size={24} />,
      title: 'CI/CD Pipelines',
      description:
        'Learn continuous integration and deployment practices with industry-standard tools',
    },
    {
      icon: <Box size={24} />,
      title: 'Docker & Kubernetes',
      description: 'Master containerization and orchestration technologies',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Fundamentals',
      description: 'Understand AWS and cloud infrastructure essentials',
    },
    {
      icon: <Zap size={24} />,
      title: 'DevOps Automation',
      description: 'Automate workflows and infrastructure as code',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Work with industry professionals and peers',
    },
    {
      icon: <Award size={24} />,
      title: 'Industry Certification',
      description: 'Get recognized with completion certificates',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 Industry-Ready Training
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              KEC × GUVI – DevOps Collaboration Program
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
              Empowering students with industry-ready DevOps skills through a comprehensive
              collaboration between Kongu Engineering College and GUVI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Register Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/schedule">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  View Schedule
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <p className="text-primary-foreground/90">Training Modules</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <p className="text-primary-foreground/90">Weeks Duration</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-primary-foreground/90">Student Capacity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-muted-foreground font-semibold mb-8">
            A collaboration between leading institutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-items-center">
            <div className="bg-card rounded-lg p-8 border border-border w-full sm:w-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-3">
                  KEC
                </div>
                <h3 className="font-semibold text-card-foreground">
                  Kongu Engineering College
                </h3>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border w-full sm:w-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-xl mx-auto mb-3">
                  GUVI
                </div>
                <h3 className="font-semibold text-card-foreground">
                  GUVI (IIT-Madras Incubated)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive DevOps training covering essential tools and practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Level Up Your DevOps Skills?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Join the next batch of DevOps engineers trained by industry experts
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Register Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
