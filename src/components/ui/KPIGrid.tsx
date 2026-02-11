import Card from './Card'

interface KPI {
  label: string
  value: string | number
  icon?: React.ReactNode
  trend?: string
}

interface KPIGridProps {
  kpis: KPI[]
}

export default function KPIGrid({ kpis }: KPIGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <Card key={index} className="text-center bg-white" hover>
          {kpi.icon && (
            <div className="flex justify-center mb-4 text-primary-600">
              {kpi.icon}
            </div>
          )}
          {/* Large, confident numbers in warm primary color */}
          <div className="text-4xl font-display font-bold text-primary-600 mb-2">
            {kpi.value}
          </div>
          <div className="text-sm font-semibold text-text-secondary mb-1">
            {kpi.label}
          </div>
          {kpi.trend && (
            <div className="text-xs text-accent-600 font-medium">
              {kpi.trend}
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}

