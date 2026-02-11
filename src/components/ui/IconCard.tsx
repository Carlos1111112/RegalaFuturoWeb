import Card from './Card'

interface IconCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export default function IconCard({ icon, title, description, className }: IconCardProps) {
  return (
    <Card className={className} hover>
      <div className="flex flex-col items-center text-center">
        {/* Warm gradient icon container adds depth and personality */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-primary-600 mb-4 shadow-soft">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-xl text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  )
}

