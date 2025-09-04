import { Package, TrendingUp, Users, Clock, LineChart, Star, DollarSign, Box } from 'lucide-react';
import Link from 'next/link';

// Dados de exemplo para o dashboard
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

interface TopProduct {
    id: string;
    name: string;
    sales: number;
}

interface RecentOrder {
    id: string;
    customerName: string;
    amount: string;
    timestamp: string;
}

const topProducts: TopProduct[] = [
    { id: '1', name: 'Smartwatch Esportivo', sales: 120 },
    { id: '2', name: 'Fone de Ouvido Bluetooth', sales: 95 },
    { id: '3', name: 'Mochila Impermeável', sales: 80 },
    { id: '4', name: 'Garrafa Térmica 1L', sales: 72 },
    { id: '5', name: 'Capa de Celular (diversas)', sales: 65 },
];

const recentOrders: RecentOrder[] = [
    { id: 'INV-005', customerName: 'Ana Oliveira', amount: '$120.00', timestamp: 'há 10 minutos' },
    { id: 'INV-004', customerName: 'João Rodrigues', amount: '$215.00', timestamp: 'há 2 dias' },
    { id: 'INV-003', customerName: 'Carlos Pereira', amount: '$75.50', timestamp: 'há 3 dias' },
    { id: 'INV-002', customerName: 'Sofia Mendes', amount: '$45.00', timestamp: 'há 4 dias' },
];

export default function DashboardPage() {
    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </header>

            {/* Cards de Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Total de Vendas"
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
                    title="Total de Produtos"
                    value="350"
                    description="Novos 15 produtos adicionados"
                    icon={<Package className="h-6 w-6 text-indigo-500" />}
                />
                <StatCard
                    title="Total de Clientes"
                    value="458"
                    description="Novos 35 clientes este mês"
                    icon={<Users className="h-6 w-6 text-blue-500" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Seção de Visão Geral de Vendas */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Visão Geral de Vendas</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-5xl font-extrabold text-indigo-600">$1,500</span>
                            <p className="text-sm text-gray-500 mt-2">vendas esta semana</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="bg-green-100 text-green-600 p-2 rounded-full">
                                <TrendingUp className="h-5 w-5" />
                            </div>
                            <span>Aumento de 8% nas vendas <br /> em relação à semana passada.</span>
                        </div>
                    </div>
                </div>

                {/* Seção de Top Produtos */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Produtos Mais Vendidos</h2>
                    <ul className="divide-y divide-gray-200">
                        {topProducts.map((product) => (
                            <li key={product.id} className="py-2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm font-medium text-gray-900">{product.name}</span>
                                </div>
                                <span className="text-sm text-gray-500">{product.sales} vendas</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Seção de Últimos Pedidos */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Últimos Pedidos</h2>
                <ul className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                        <li key={order.id} className="py-4">
                            <Link href={`/invoice/${order.id}`} className="flex items-start gap-3 transition-colors hover:bg-gray-50 -mx-6 px-6 rounded-lg">
                                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600">
                                    <DollarSign className="h-4 w-4" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">Novo pedido de <span className="font-semibold">{order.customerName}</span></p>
                                    <p className="text-xs text-gray-500 mt-1">{order.timestamp}</p>
                                </div>
                                <span className="text-sm font-bold text-gray-900">{order.amount}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
