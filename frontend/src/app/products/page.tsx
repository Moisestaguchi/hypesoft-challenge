"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, PlusCircle, Trash2, Edit } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setError('Usuário não autenticado. Redirecionando para a página de login...');
                    setIsLoading(false);
                    // Redireciona para a página de login correta após um curto atraso
                    setTimeout(() => {
                        window.location.href = '/AuthPage';
                    }, 2000);
                    return;
                }

                // URL da sua API de produtos
                const apiUrl = 'http://localhost:5000/api/products';
                
                const response = await axios.get(apiUrl, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProducts(response.data);
                setIsLoading(false);

            } catch (err) {
                console.error("Erro ao buscar produtos:", err);
                setError('Falha ao carregar os produtos. Por favor, tente novamente.');
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = (id: string) => {
        // Implementar lógica de exclusão
        alert(`Implementar exclusão para o produto com ID: ${id}`);
    };

    const handleEdit = (id: string) => {
        // Implementar lógica de edição
        alert(`Implementar edição para o produto com ID: ${id}`);
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full p-6">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-indigo-500 border-gray-200 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Carregando produtos...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-full p-6">
                <div className="text-center text-red-500">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Produtos</h1>
                <button
                    className="flex items-center gap-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
                >
                    <PlusCircle className="h-5 w-5" />
                    Adicionar Produto
                </button>
            </div>
            
            {products.length === 0 ? (
                <div className="flex items-center justify-center h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <Box className="h-16 w-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
                        <p className="text-lg font-medium">Nenhum produto encontrado.</p>
                        <p>Adicione seu primeiro produto para começar.</p>
                    </div>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Imagem
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Nome
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Preço
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Descrição
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                                        Categoria
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Ações</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex-shrink-0 h-16 w-16">
                                                <img 
                                                    className="h-16 w-16 rounded-md object-cover" 
                                                    src={product.imageUrl || 'https://placehold.co/64x64/E2E8F0/A0AEC0?text=Sem+Foto'} 
                                                    alt={product.name} 
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{product.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">R${product.price.toFixed(2)}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-sm overflow-hidden text-ellipsis">{product.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{product.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button onClick={() => handleEdit(product.id)} className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600 mr-2 transition-colors">
                                                <Edit className="h-5 w-5" />
                                            </button>
                                            <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-600 transition-colors">
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
