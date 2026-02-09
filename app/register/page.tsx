'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    collegeName: 'Kongu Engineering College',
    collegeId: '',
    department: '',
    year: '',
    email: '',
    phone: '',
    batch: '',
    agreeToTerms: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const departments = [
    'Computer Science and Engineering',
    'Electrical and Electronics Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics and Communication Engineering',
    'Aeronautical Engineering',
    'Automobile Engineering',
    'Other',
  ]

  const years = ['2nd Year', '3rd Year', '4th Year', 'Passed Out']

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.collegeId.trim()) newErrors.collegeId = 'College ID is required'
    if (!formData.department) newErrors.department = 'Department is required'
    if (!formData.year) newErrors.year = 'Year is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email address'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Phone number must be 10 digits'
    if (!formData.batch) newErrors.batch = 'Batch selection is required'
    if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setSubmitted(true)
      // In a real app, you would send this data to your backend here
      console.log('Form submitted:', formData)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          collegeName: 'Kongu Engineering College',
          collegeId: '',
          department: '',
          year: '',
          email: '',
          phone: '',
          batch: '',
          agreeToTerms: false,
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join the Program</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Fill out this form to register for the KEC × GUVI DevOps Collaboration Program
          </p>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-950 rounded-lg border-2 border-green-200 dark:border-green-800 p-8 text-center">
              <CheckCircle2 size={48} className="text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                Registration Successful!
              </h2>
              <p className="text-green-800 dark:text-green-200 mb-4">
                Thank you for registering. We've received your application and will contact you
                shortly with further details.
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">
                A confirmation email has been sent to {formData.email}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-lg border border-border p-6 sm:p-8">
              {/* Full Name */}
              <div>
                <Label htmlFor="fullName" className="text-card-foreground font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? 'border-red-500' : ''}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* College Name */}
              <div>
                <Label htmlFor="collegeName" className="text-card-foreground font-semibold">
                  College Name
                </Label>
                <Input
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  disabled
                  className="opacity-75"
                />
              </div>

              {/* College ID */}
              <div>
                <Label htmlFor="collegeId" className="text-card-foreground font-semibold">
                  College ID / Register Number *
                </Label>
                <Input
                  id="collegeId"
                  name="collegeId"
                  placeholder="KEC2022001"
                  value={formData.collegeId}
                  onChange={handleChange}
                  className={errors.collegeId ? 'border-red-500' : ''}
                />
                {errors.collegeId && (
                  <p className="text-red-500 text-sm mt-1">{errors.collegeId}</p>
                )}
              </div>

              {/* Department */}
              <div>
                <Label htmlFor="department" className="text-card-foreground font-semibold">
                  Department *
                </Label>
                <Select
                  value={formData.department}
                  onValueChange={(value) => handleSelectChange('department', value)}
                >
                  <SelectTrigger
                    id="department"
                    className={errors.department ? 'border-red-500' : ''}
                  >
                    <SelectValue placeholder="Select your department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.department && (
                  <p className="text-red-500 text-sm mt-1">{errors.department}</p>
                )}
              </div>

              {/* Year */}
              <div>
                <Label htmlFor="year" className="text-card-foreground font-semibold">
                  Current Year *
                </Label>
                <Select value={formData.year} onValueChange={(value) => handleSelectChange('year', value)}>
                  <SelectTrigger id="year" className={errors.year ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((yr) => (
                      <SelectItem key={yr} value={yr}>
                        {yr}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
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
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-red-500' : ''}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <Label htmlFor="phone" className="text-card-foreground font-semibold">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'border-red-500' : ''}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Batch Selection */}
              <div>
                <Label htmlFor="batch" className="text-card-foreground font-semibold">
                  Preferred Batch *
                </Label>
                <Select value={formData.batch} onValueChange={(value) => handleSelectChange('batch', value)}>
                  <SelectTrigger id="batch" className={errors.batch ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select batch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="batch1-jan">
                      Batch 1 - January to February 2025 (Active)
                    </SelectItem>
                    <SelectItem value="batch2-apr">
                      Batch 2 - April to May 2025
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.batch && <p className="text-red-500 text-sm mt-1">{errors.batch}</p>}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start gap-3 pt-4">
                <Checkbox
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    handleChange({
                      target: {
                        name: 'agreeToTerms',
                        checked: checked as boolean,
                        type: 'checkbox',
                        value: '',
                      },
                    } as any)
                  }
                  className={errors.agreeToTerms ? 'border-red-500' : ''}
                />
                <Label htmlFor="agreeToTerms" className="text-sm text-muted-foreground cursor-pointer">
                  I agree to the terms and conditions of the program and confirm that all
                  information provided is accurate *
                </Label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm">{errors.agreeToTerms}</p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Register Now
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Required fields. We respect your privacy and will not share your information.
              </p>
            </form>
          )}

          {/* Info Cards */}
          {!submitted && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-card-foreground mb-2">Quick Process</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out this form, receive confirmation, and start your DevOps journey!
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-card-foreground mb-2">Limited Seats</h3>
                <p className="text-sm text-muted-foreground">
                  Only 50 seats per batch. Early registration is recommended.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-card-foreground mb-2">Questions?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us at contact@kecguvi.edu or visit the Contact page.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
