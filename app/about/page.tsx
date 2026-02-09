'use client'

import { Users, Lightbulb, Target, Zap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About This Program</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            A groundbreaking collaboration bringing together academic excellence and
            industry expertise
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-card-foreground mb-6">
                Kongu Engineering College
              </h2>
              <p className="text-muted-foreground mb-4">
                Kongu Engineering College (KEC), established in 1981, is one of the
                premier engineering institutions in India. Located in Erode, Tamil Nadu,
                the college is known for its commitment to academic excellence and holistic
                student development.
              </p>
              <p className="text-muted-foreground mb-4">
                With state-of-the-art infrastructure, experienced faculty, and industry
                partnerships, KEC has consistently produced professionals who excel in
                their respective fields. The college emphasizes research, innovation, and
                practical skills development.
              </p>
              <p className="text-muted-foreground">
                The DevOps collaboration with GUVI represents KEC's commitment to preparing
                students for the evolving demands of the technology industry.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-lg border border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Academic Excellence
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Rigorous academic curriculum combined with practical training
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Expert Faculty
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Experienced professors and industry experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Modern Infrastructure
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Latest labs and computing facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GUVI Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold text-card-foreground mb-6">
                GUVI - IIT Madras Incubated
              </h2>
              <p className="text-muted-foreground mb-4">
                GUVI is an online learning platform incubated by IIT Madras. It specializes
                in providing industry-relevant skill-based education with a focus on
                employability. GUVI's curriculum is designed in collaboration with industry
                leaders and covers emerging technologies.
              </p>
              <p className="text-muted-foreground mb-4">
                The platform has trained thousands of students and professionals across
                India in various technology domains. GUVI's expertise in DevOps and cloud
                technologies makes it the ideal partner for this collaboration with KEC.
              </p>
              <p className="text-muted-foreground">
                Through GUVI's proven teaching methodology and industry connections, students
                gain hands-on experience with real-world DevOps scenarios and tools.
              </p>
            </div>
            <div className="lg:order-1 bg-secondary p-8 rounded-lg border border-border">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Skill-Based Education
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Focused on practical, in-demand skills
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Industry Experts
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Trainers with real-world industry experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Global Standards
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Training aligned with international best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Purpose */}
          <div className="bg-secondary rounded-lg p-8 border border-border mb-12">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Program Purpose</h3>
            <p className="text-muted-foreground mb-4">
              The KEC × GUVI DevOps Collaboration Program aims to bridge the gap between
              academic learning and industry requirements. This initiative brings together
              the academic rigor of Kongu Engineering College with the industry expertise
              and practical focus of GUVI.
            </p>
            <p className="text-muted-foreground">
              Students will gain comprehensive knowledge of DevOps practices, tools, and
              methodologies, preparing them for successful careers in cloud infrastructure,
              automation, and modern application deployment.
            </p>
          </div>

          {/* Student Benefits */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Benefits for Students</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Industry-Ready Skills</h4>
                <p className="text-primary-foreground/90">
                  Practical knowledge directly applicable to real-world scenarios
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Certification</h4>
                <p className="text-primary-foreground/90">
                  Recognized completion certificate from both institutions
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Mentorship</h4>
                <p className="text-primary-foreground/90">
                  Guidance from experienced professionals and faculty
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Career Opportunities</h4>
                <p className="text-primary-foreground/90">
                  Access to industry connections and job placement support
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hands-On Projects</h4>
                <p className="text-primary-foreground/90">
                  Real-world projects and case studies
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Community Learning</h4>
                <p className="text-primary-foreground/90">
                  Collaborate with peers and build professional networks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">
            Eligibility & Duration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-card-foreground mb-3">Eligibility</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Current KEC students (all departments)</li>
                <li>• Completed 2nd year or higher</li>
                <li>• Basic understanding of Linux</li>
                <li>• Strong willingness to learn</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-card-foreground mb-3">Duration</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• 4 weeks intensive program</li>
                <li>• 3-4 hours per day</li>
                <li>• Mix of online and offline sessions</li>
                <li>• Flexible scheduling</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-card-foreground mb-3">Schedule</h3>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>• Batch 1: January - February</li>
                <li>• Batch 2: April - May</li>
                <li>• Weekend sessions available</li>
                <li>• Limited seats per batch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
