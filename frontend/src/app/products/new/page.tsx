"use client";

import { useState, useEffect } from 'react';
import { DollarSign, Text, Package, List, Save, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function NewProductPage() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Efeito para carregar o estado do dark mode do localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode) {
            const mode = JSON.parse(savedMode);
            setIsDarkMode(mode);
            if (mode) {
                document.documentElement.classList.add('dark');
            }
        }
    }, []);

    // Efeito para aplicar a classe do dark mode
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implementar a lógica para enviar os dados para a API
        console.log('Novo produto a ser salvo:', { name, description, price, category, stock });
        alert('Produto adicionado com sucesso (lógica da API pendente)!');
        // Redirecionar para a página de listagem após salvar
        // router.push('/products');
    };

    return (
        <div className={`p-8 min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Adicionar Novo Produto</h1>
                <Link href="/products" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600 transition-colors font-medium">
                    Voltar para a lista
                </Link>
            </header>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Imagem do Produto */}
                        <div className="lg:col-span-1 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Imagem do Produto
                            </label>
                            <div className="flex justify-center items-center h-48 w-full border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden relative transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                                <ImageIcon className="h-12 w-12 text-gray-400 dark:text-gray-500" />
                                <span className="absolute bottom-2 text-xs text-gray-500 dark:text-gray-400">Clique para fazer upload</span>
                            </div>
                        </div>

                        {/* Informações Básicas */}
                        <div className="lg:col-span-2 md:col-span-1">
                            <div className="space-y-6">
                                {/* Nome do Produto */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        <Text className="inline-block h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                        Nome do Produto
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-100"
                                        required
                                    />
                                </div>
                                
                                {/* Preço e Estoque */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Preço */}
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            <DollarSign className="inline-block h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                            Preço
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            className="w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-100"
                                            required
                                            min="0"
                                        />
                                    </div>
                                    {/* Quantidade em Estoque */}
                                    <div>
                                        <label htmlFor="stock" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            <Package className="inline-block h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                            Quantidade em Estoque
                                        </label>
                                        <input
                                            type="number"
                                            id="stock"
                                            value={stock}
                                            onChange={(e) => setStock(e.target.value)}
                                            className="w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-100"
                                            required
                                            min="0"
                                        />
                                    </div>
                                </div>
                                {/* Categoria */}
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        <List className="inline-block h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                                        Categoria
                                    </label>
                                    <input
                                        type="text"
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-100"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Descrição do Produto */}
                    <div className="mb-8">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Descrição
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            className="w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 dark:bg-gray-700 p-2 text-gray-900 dark:text-gray-100"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors hover:bg-indigo-700"
                        >
                            <Save className="h-5 w-5" />
                            Salvar Produto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
