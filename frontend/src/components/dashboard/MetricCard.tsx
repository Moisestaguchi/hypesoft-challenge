import { ReactNode } from 'react';

// O componente para os cards de métricas
export interface MetricCardProps {
    title: string;
    value: string;
    change?: string;
    changeType?: 'increase' | 'decrease';
    icon: ReactNode;
    description: string;
}

export function MetricCard({ title, value, change, changeType, icon, description }: MetricCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                {icon}
            </div>
            <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-gray-900">{value}</span>
                {change && (
                    <span
                        className={`text-sm font-semibold ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}
                    >
                        {change}
                    </span>
                )}
            </div>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>
    );
}