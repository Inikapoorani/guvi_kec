import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-accent-foreground mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
