import { Search, Plus, Eye, Download, FileText } from 'lucide-react';

interface Invoice {
    id: string;
    invoiceNumber: string;
    customerName: string;
    amount: string;
    date: string;
    status: 'paid' | 'pending' | 'overdue';
}

// Dados de exemplo para a tabela de faturas
const invoicesData: Invoice[] = [
    { id: '1', invoiceNumber: 'INV-001', customerName: 'Ana Oliveira', amount: '$120.00', date: '25/06/2024', status: 'paid' },
    { id: '2', invoiceNumber: 'INV-002', customerName: 'Carlos Pereira', amount: '$75.50', date: '20/06/2024', status: 'pending' },
    { id: '3', invoiceNumber: 'INV-003', customerName: 'João Rodrigues', amount: '$215.00', date: '15/06/2024', status: 'overdue' },
    { id: '4', invoiceNumber: 'INV-004', customerName: 'Mariana Costa', amount: '$45.00', date: '10/06/2024', status: 'paid' },
];

export default function InvoicePage() {
    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Faturas</h1>
                <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors hover:bg-indigo-700">
                    <Plus className="h-5 w-5" />
                    Nova Fatura
                </button>
            </header>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Barra de Pesquisa */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Pesquisar por número ou cliente..."
                            className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>

            {/* Tabela de Faturas */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Número</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {invoicesData.map((invoice) => (
                                <tr key={invoice.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{invoice.invoiceNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.customerName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{invoice.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                            ${invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                                                invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'}`}>
                                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex items-center gap-2">
                                            <button className="text-gray-600 hover:text-gray-900 transition-colors">
                                                <Eye className="h-5 w-5" />
                                            </button>
                                            <button className="text-indigo-600 hover:text-indigo-900 transition-colors">
                                                <Download className="h-5 w-5" />
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
