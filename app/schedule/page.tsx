'use client'

import { Calendar, MapPin, Clock } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SchedulePage() {
  const batch1 = [
    {
      day: 'Monday',
      date: 'Jan 13, 2025',
      sessions: [
        {
          time: '9:00 AM - 1:00 PM',
          topic: 'Linux Fundamentals & Command Line',
          trainer: 'Dr. Rajesh Kumar',
          mode: 'Online',
        },
        {
          time: '2:00 PM - 5:00 PM',
          topic: 'File Systems & Permissions Lab',
          trainer: 'Priya Sharma',
          mode: 'Offline',
        },
      ],
    },
    {
      day: 'Tuesday',
      date: 'Jan 14, 2025',
      sessions: [
        {
          time: '9:00 AM - 1:00 PM',
          topic: 'Shell Scripting Basics',
          trainer: 'Amit Singh',
          mode: 'Online',
        },
        {
          time: '2:00 PM - 5:00 PM',
          topic: 'Git & Version Control Workshop',
          trainer: 'Neha Verma',
          mode: 'Offline',
        },
      ],
    },
    {
      day: 'Wednesday',
      date: 'Jan 15, 2025',
      sessions: [
        {
          time: '9:00 AM - 1:00 PM',
          topic: 'Advanced Shell Scripting',
          trainer: 'Rajesh Kumar',
          mode: 'Online',
        },
        {
          time: '2:00 PM - 5:00 PM',
          topic: 'GitHub Workflows & Collaboration',
          trainer: 'Priya Sharma',
          mode: 'Offline',
        },
      ],
    },
    {
      day: 'Thursday',
      date: 'Jan 16, 2025',
      sessions: [
        {
          time: '9:00 AM - 1:00 PM',
          topic: 'Package Management & System Administration',
          trainer: 'Amit Singh',
          mode: 'Online',
        },
        {
          time: '2:00 PM - 5:00 PM',
          topic: 'Hands-On Lab: Linux Administration',
          trainer: 'Neha Verma',
          mode: 'Offline',
        },
      ],
    },
    {
      day: 'Friday',
      date: 'Jan 17, 2025',
      sessions: [
        {
          time: '9:00 AM - 12:00 PM',
          topic: 'Week 1 Review & Q&A',
          trainer: 'All Trainers',
          mode: 'Online',
        },
        {
          time: '1:00 PM - 3:00 PM',
          topic: 'Mini Project: Linux Administration',
          trainer: 'All Trainers',
          mode: 'Mixed',
        },
      ],
    },
  ]

  const weekOverview = [
    {
      week: 'Week 1',
      title: 'Linux & Git Fundamentals',
      duration: '5 days',
      hours: '20 hours',
      startDate: 'Jan 13, 2025',
    },
    {
      week: 'Week 2',
      title: 'CI/CD Pipelines & Automation',
      duration: '5 days',
      hours: '20 hours',
      startDate: 'Jan 20, 2025',
    },
    {
      week: 'Week 3',
      title: 'Docker & Containerization',
      duration: '5 days',
      hours: '20 hours',
      startDate: 'Jan 27, 2025',
    },
    {
      week: 'Week 4',
      title: 'Kubernetes Orchestration',
      duration: '5 days',
      hours: '20 hours',
      startDate: 'Feb 3, 2025',
    },
    {
      week: 'Week 5',
      title: 'Cloud & Infrastructure (AWS)',
      duration: '5 days',
      hours: '20 hours',
      startDate: 'Feb 10, 2025',
    },
    {
      week: 'Week 6',
      title: 'Monitoring & DevOps Tools',
      duration: '5 days',
      hours: '20 hours',
      startDate: 'Feb 17, 2025',
    },
  ]

  const SessionCard = ({
    time,
    topic,
    trainer,
    mode,
  }: {
    time: string
    topic: string
    trainer: string
    mode: string
  }) => (
    <div className="border-l-4 border-accent pl-4 py-3 hover:bg-secondary/50 rounded transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={16} className="text-accent" />
        <span className="font-semibold text-card-foreground">{time}</span>
      </div>
      <p className="font-medium text-card-foreground mb-1">{topic}</p>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Trainer: {trainer}</span>
        <span className="bg-accent/10 px-2 py-1 rounded text-xs">{mode}</span>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Training Schedule</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Detailed day-wise training schedule with session topics and trainer information
          </p>
        </div>
      </section>

      {/* Batches Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">
            Available Batches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border-2 border-accent rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">Batch 1</h3>
                  <p className="text-muted-foreground">January - February 2025</p>
                </div>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  Active
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent" />
                  <span>Jan 13 - Feb 21, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-accent" />
                  <span>9:00 AM - 5:00 PM (Daily)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  <span>KEC Campus & Online</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-card-foreground">Batch 2</h3>
                  <p className="text-muted-foreground">April - May 2025</p>
                </div>
                <span className="bg-secondary text-muted-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Coming Soon
                </span>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Apr 7 - May 16, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Weekend sessions available</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>KEC Campus & Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Overview */}
          <h3 className="text-2xl font-bold text-card-foreground mb-6">Weekly Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {weekOverview.map((week, index) => (
              <div key={index} className="bg-secondary rounded-lg p-4 border border-border">
                <p className="text-sm font-semibold text-accent mb-1">{week.week}</p>
                <h4 className="font-semibold text-card-foreground mb-3">{week.title}</h4>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>📅 Starts: {week.startDate}</p>
                  <p>⏱️ Duration: {week.duration}</p>
                  <p>⏰ Total: {week.hours}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Schedule Tabs */}
          <h3 className="text-2xl font-bold text-card-foreground mb-6">Batch 1 Detailed Schedule</h3>
          <Tabs defaultValue="day-0" className="w-full">
            <TabsList className="w-full flex-wrap">
              {batch1.map((item, index) => (
                <TabsTrigger key={index} value={`day-${index}`} className="flex-1">
                  <span className="hidden sm:inline">{item.day}</span>
                  <span className="sm:hidden text-xs">{item.day.slice(0, 3)}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {batch1.map((day, index) => (
              <TabsContent key={index} value={`day-${index}`} className="mt-6">
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-card-foreground">{day.day}</h3>
                    <p className="text-muted-foreground">{day.date}</p>
                  </div>
                  <div className="space-y-6">
                    {day.sessions.map((session, sessionIndex) => (
                      <SessionCard
                        key={sessionIndex}
                        time={session.time}
                        topic={session.topic}
                        trainer={session.trainer}
                        mode={session.mode}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-card-foreground mb-8">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-card-foreground mb-4">Before You Begin</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Set up your system with required tools</li>
                <li>✓ Ensure stable internet connection</li>
                <li>✓ Have a notebook for notes</li>
                <li>✓ Install Docker and necessary software</li>
                <li>✓ Create GitHub account</li>
                <li>✓ Attend orientation session</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-card-foreground mb-4">Session Guidelines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Be on time for all sessions</li>
                <li>✓ Maintain 90% attendance minimum</li>
                <li>✓ Complete daily assignments</li>
                <li>✓ Participate actively in labs</li>
                <li>✓ Ask questions and clarify doubts</li>
                <li>✓ Join community Slack channel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-12 text-center">
            Meet Your Trainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Rajesh Kumar', role: 'DevOps Expert' },
              { name: 'Priya Sharma', role: 'Cloud Specialist' },
              { name: 'Amit Singh', role: 'CI/CD Expert' },
              { name: 'Neha Verma', role: 'Kubernetes Specialist' },
            ].map((trainer, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mx-auto mb-4">
                  {trainer.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-card-foreground">{trainer.name}</h3>
                <p className="text-sm text-accent">{trainer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
