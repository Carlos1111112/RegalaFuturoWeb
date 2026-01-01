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
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mb-4">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </Card>
  )
}

