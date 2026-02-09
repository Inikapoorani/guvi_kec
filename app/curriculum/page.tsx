'use client'

import { Card } from '@/components/ui/card'
import {
  GitBranch,
  Box,
  Cloud,
  Monitor,
  Shield,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'

export default function CurriculumPage() {
  const modules = [
    {
      week: 'Week 1',
      title: 'Linux & Git Fundamentals',
      icon: <GitBranch size={32} />,
      topics: [
        'Linux basics and command line',
        'File system and permissions',
        'Shell scripting fundamentals',
        'Git version control',
        'GitHub workflows and collaboration',
        'Hands-on lab exercises',
      ],
      color: 'bg-blue-50 dark:bg-blue-950',
    },
    {
      week: 'Week 2',
      title: 'CI/CD Pipelines & Automation',
      icon: <GitBranch size={32} />,
      topics: [
        'Continuous Integration concepts',
        'Jenkins setup and configuration',
        'GitHub Actions introduction',
        'Pipeline scripting',
        'Automated testing integration',
        'Build and deployment automation',
      ],
      color: 'bg-purple-50 dark:bg-purple-950',
    },
    {
      week: 'Week 3',
      title: 'Docker & Containerization',
      icon: <Box size={32} />,
      topics: [
        'Docker fundamentals',
        'Building Docker images',
        'Container networking',
        'Docker Compose for multi-container apps',
        'Registry management',
        'Container security best practices',
      ],
      color: 'bg-indigo-50 dark:bg-indigo-950',
    },
    {
      week: 'Week 4',
      title: 'Kubernetes Orchestration',
      icon: <Monitor size={32} />,
      topics: [
        'Kubernetes architecture',
        'Pods, services, and deployments',
        'ConfigMaps and Secrets',
        'Persistent volumes',
        'Health checks and auto-scaling',
        'Real-world deployment scenarios',
      ],
      color: 'bg-cyan-50 dark:bg-cyan-950',
    },
    {
      week: 'Week 5',
      title: 'Cloud & Infrastructure',
      icon: <Cloud size={32} />,
      topics: [
        'AWS fundamentals',
        'EC2 and VPC basics',
        'S3 storage and CDN',
        'Load balancing',
        'Auto-scaling groups',
        'Cost optimization strategies',
      ],
      color: 'bg-orange-50 dark:bg-orange-950',
    },
    {
      week: 'Week 6',
      title: 'Monitoring & DevOps Tools',
      icon: <BarChart3 size={32} />,
      topics: [
        'Prometheus monitoring setup',
        'Grafana dashboards',
        'ELK stack basics',
        'Log aggregation',
        'Performance metrics',
        'Alerting and incident response',
      ],
      color: 'bg-green-50 dark:bg-green-950',
    },
  ]

  const coreCompetencies = [
    {
      title: 'Infrastructure as Code',
      description: 'Write and manage infrastructure using code',
      icon: <Shield size={24} />,
    },
    {
      title: 'Containerization',
      description: 'Master Docker and container technologies',
      icon: <Box size={24} />,
    },
    {
      title: 'Orchestration',
      description: 'Deploy and manage containerized applications',
      icon: <Monitor size={24} />,
    },
    {
      title: 'Cloud Platforms',
      description: 'Work with AWS and cloud services',
      icon: <Cloud size={24} />,
    },
    {
      title: 'CI/CD Implementation',
      description: 'Build automated deployment pipelines',
      icon: <GitBranch size={24} />,
    },
    {
      title: 'Monitoring & Logging',
      description: 'Monitor applications and troubleshoot issues',
      icon: <BarChart3 size={24} />,
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">DevOps Curriculum</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive training covering all essential DevOps tools and practices
          </p>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-12 text-center">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((competency, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mb-4">
                  {competency.icon}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {competency.title}
                </h3>
                <p className="text-muted-foreground text-sm">{competency.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-12 text-center">
            Training Modules
          </h2>
          <div className="space-y-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow ${module.color}`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 text-accent flex-shrink-0">{module.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-accent">{module.week}</p>
                      <h3 className="text-2xl font-bold text-card-foreground">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-accent flex-shrink-0 mt-0.5"
                        />
                        <span className="text-card-foreground text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Learning Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">By the end of this program, you will:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Master Linux command line and shell scripting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Set up and manage CI/CD pipelines with Jenkins and GitHub Actions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Create, manage, and deploy Docker containers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Orchestrate containerized applications with Kubernetes</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Deploy applications on AWS cloud infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Monitor applications and troubleshoot issues effectively</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Implement Infrastructure as Code principles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Be ready for DevOps engineering roles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-12 text-center">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'Linux',
              'Git/GitHub',
              'Docker',
              'Kubernetes',
              'Jenkins',
              'AWS',
              'Prometheus',
              'Grafana',
              'GitHub Actions',
              'Docker Compose',
              'Ansible',
              'Terraform',
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-card p-4 rounded-lg border border-border text-center hover:border-accent transition-colors"
              >
                <p className="font-semibold text-card-foreground">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
