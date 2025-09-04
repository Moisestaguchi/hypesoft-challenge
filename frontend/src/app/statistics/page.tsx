import { LineChart, BarChart, TrendingUp, TrendingDown, Clock } from 'lucide-react';

// Componente simples para os cards de estatísticas
interface StatCardProps {
    title: string;
    value: string;
    description: string;
    icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            {icon}
        </div>
        <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-gray-900">{value}</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
    </div>
);

export default function StatisticsPage() {
    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Estatísticas</h1>
            </header>

            {/* Cards de Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Vendas Totais"
                    value="$12,450"
                    description="Aumento de 15% em relação ao mês anterior"
                    icon={<TrendingUp className="h-6 w-6 text-green-500" />}
                />
                <StatCard
                    title="Pedidos Pendentes"
                    value="25"
                    description="Pedidos que ainda precisam de atenção"
                    icon={<Clock className="h-6 w-6 text-yellow-500" />}
                />
                <StatCard
                    title="Clientes Ativos"
                    value="458"
                    description="Novos 35 clientes este mês"
                    icon={<TrendingUp className="h-6 w-6 text-indigo-500" />}
                />
                <StatCard
                    title="Estoque Baixo"
                    value="8 produtos"
                    description="Produtos que precisam ser reabastecidos"
                    icon={<TrendingDown className="h-6 w-6 text-red-500" />}
                />
            </div>

            {/* Seção de Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Placeholder para Gráfico de Linha de Vendas */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Vendas por Mês</h2>
                    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg text-gray-500">
                        <span className="flex items-center gap-2">
                            <LineChart className="h-8 w-8" />
                            Gráfico de Vendas (Placeholder)
                        </span>
                    </div>
                </div>
                {/* Placeholder para Gráfico de Barras de Produtos */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Top 5 Produtos</h2>
                    <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg text-gray-500">
                        <span className="flex items-center gap-2">
                            <BarChart className="h-8 w-8" />
                            Gráfico de Produtos (Placeholder)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
