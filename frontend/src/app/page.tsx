import { Package, Star } from 'lucide-react';
import { ActivityTable } from '@/components/dashboard/ActivityTable';
import { MetricCard } from '@/components/dashboard/MetricCard';

// Dados de exemplo para o dashboard
const activitiesData = [
  { product: 'Camisa de Linho', activityType: 'Ajuste de Estoque', details: 'Estoque ajustado de 90 para 100 após compra em massa.', date: '29 de Jun, 2024' },
  { product: 'Jeans Jacket', activityType: 'Novo Produto', details: 'Preço: $65.00, Estoque: 70 unidades', date: '29 de Jun, 2024' },
  // Adicione mais dados aqui
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Total de Produtos"
          value="586"
          change="+9 produtos"
          changeType="increase"
          icon={<Package className="h-6 w-6 text-gray-400" />}
          description="desde o último mês"
        />
        <MetricCard
          title="Avaliação Média"
          value="4.8"
          change="+0.2 estrela"
          changeType="increase"
          icon={<Star className="h-6 w-6 text-yellow-400 fill-current" />}
          description="desde o último mês"
        />
        {/* Adicione os outros cards (Sales Trends, Low Stock) aqui */}
        {/* Você pode criar um componente de gráfico para a seção de Sales Trends */}
      </div>

      {/* Seção de Atividades Recentes */}
      <ActivityTable activities={activitiesData} />
    </div>
  );
}