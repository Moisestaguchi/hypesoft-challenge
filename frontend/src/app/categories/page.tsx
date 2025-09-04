import { Plus, Pencil, Trash2 } from 'lucide-react';

interface Category {
    id: string;
    name: string;
    productCount: number;
}

// Dados de exemplo para a tabela de categorias
const categoriesData: Category[] = [
    { id: '1', name: 'Vestuário', productCount: 154 },
    { id: '2', name: 'Calçados', productCount: 87 },
    { id: '3', name: 'Eletrônicos', productCount: 210 },
    { id: '4', name: 'Acessórios', productCount: 75 },
    { id: '5', name: 'Casa & Decoração', productCount: 120 },
];

export default function CategoriesPage() {
    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Categorias</h1>
                <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors hover:bg-indigo-700">
                    <Plus className="h-5 w-5" />
                    Nova Categoria
                </button>
            </header>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total de Produtos</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {categoriesData.map((category) => (
                                <tr key={category.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.productCount}</td>
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
