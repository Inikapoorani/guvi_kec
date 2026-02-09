'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const subjects = [
    'General Inquiry',
    'Registration Help',
    'Technical Issue',
    'Feedback',
    'Other',
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email address'
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message should be at least 10 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmitted(true)
      // In a real app, you would send this data to your backend here
      console.log('Contact form submitted:', formData)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }))
    if (errors.subject) {
      setErrors((prev) => ({ ...prev, subject: '' }))
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Contact us anytime!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                      <a
                        href="mailto:contact@kecguvi.edu"
                        className="text-accent hover:underline"
                      >
                        contact@kecguvi.edu
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
                      <a href="tel:+911234567890" className="text-accent hover:underline">
                        +91 (0) 123-456-7890
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Mon - Fri, 9:00 AM - 5:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Office</h3>
                      <p className="text-muted-foreground text-sm">
                        Kongu Engineering College
                        <br />
                        Perundurai, Erode
                        <br />
                        Tamil Nadu 638 052
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-secondary rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground flex-shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2">Office Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday
                        <br />
                        9:00 AM - 6:00 PM IST
                        <br />
                        <br />
                        Saturday & Sunday - Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-200 dark:border-green-800 p-8 text-center h-full flex flex-col justify-center">
                  <CheckCircle2
                    size={48}
                    className="text-green-600 dark:text-green-400 mx-auto mb-4"
                  />
                  <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-green-800 dark:text-green-200 mb-4">
                    Thank you for reaching out. We've received your message and will get back to
                    you soon.
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    We typically respond within 24 hours
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-lg border border-border p-6 sm:p-8 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-card-foreground font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-card-foreground font-semibold">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-card-foreground font-semibold">
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-card-foreground font-semibold">
                      Subject *
                    </Label>
                    <Select value={formData.subject} onValueChange={handleSelectChange}>
                      <SelectTrigger
                        id="subject"
                        className={errors.subject ? 'border-red-500' : ''}
                      >
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subj) => (
                          <SelectItem key={subj} value={subj}>
                            {subj}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-card-foreground font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us what you think..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We'll use your email to contact you only about your
                    inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">
              Find Us
            </h2>
            <div className="bg-secondary rounded-lg border border-border overflow-hidden h-96">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Kongu Engineering College
                  </h3>
                  <p className="text-muted-foreground">
                    Perundurai, Erode, Tamil Nadu 638 052
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Map integration placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-card-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is the registration fee?',
                a: 'The program is free for all Kongu Engineering College students. No registration fees are charged.',
              },
              {
                q: 'Do I need prior DevOps experience?',
                a: 'No prior DevOps experience is required. Basic Linux knowledge is helpful but not mandatory.',
              },
              {
                q: 'Can I attend sessions if I miss some days?',
                a: 'We recommend attending all sessions for best results. However, recorded sessions will be provided for missed classes.',
              },
              {
                q: 'Will I get a certificate?',
                a: 'Yes, a completion certificate will be awarded to students who meet the attendance and coursework requirements.',
              },
              {
                q: 'Can students from other colleges apply?',
                a: 'Currently, this program is exclusive to Kongu Engineering College students. Please contact us for other options.',
              },
              {
                q: 'What if I have technical issues during the program?',
                a: 'Our support team is available to help. Contact us via email or phone during office hours.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-card-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
