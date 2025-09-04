import { Search, Plus, Pencil, Trash2 } from 'lucide-react';

interface Customer {
    id: string;
    name: string;
    email: string;
    totalOrders: number;
}

// Dados de exemplo para a tabela de clientes
const customersData: Customer[] = [
    { id: '1', name: 'Ana Oliveira', email: 'ana.o@email.com', totalOrders: 5 },
    { id: '2', name: 'Carlos Pereira', email: 'carlos.p@email.com', totalOrders: 12 },
    { id: '3', name: 'Sofia Mendes', email: 'sofia.m@email.com', totalOrders: 3 },
    { id: '4', name: 'João Rodrigues', email: 'joao.r@email.com', totalOrders: 25 },
    { id: '5', name: 'Mariana Costa', email: 'mariana.c@email.com', totalOrders: 7 },
];

export default function CustomersPage() {
    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Clientes</h1>
                <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors hover:bg-indigo-700">
                    <Plus className="h-5 w-5" />
                    Novo Cliente
                </button>
            </header>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Barra de Pesquisa */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Pesquisar por nome ou e-mail..."
                            className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>

            {/* Tabela de Clientes */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-mail</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total de Pedidos</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {customersData.map((customer) => (
                                <tr key={customer.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.totalOrders}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center gap-2">
                                            <button className="text-indigo-600 hover:text-indigo-900 transition-colors">
                                                <Pencil className="h-5 w-5" />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900 transition-colors">
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
