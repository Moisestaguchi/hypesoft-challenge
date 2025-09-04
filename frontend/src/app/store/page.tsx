"use client";

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const mockProducts: Product[] = [
    {
        id: 1,
        name: 'Camiseta Casual',
        description: 'Feita com algodão orgânico, perfeita para o dia a dia.',
        price: 79.90,
        imageUrl: 'https://placehold.co/400x300/a855f7/ffffff?text=Camiseta',
    },
    {
        id: 2,
        name: 'Calça Jeans Skinny',
        description: 'Design moderno e caimento perfeito. Ideal para qualquer ocasião.',
        price: 129.90,
        imageUrl: 'https://placehold.co/400x300/3b82f6/ffffff?text=Calça',
    },
    {
        id: 3,
        name: 'Tênis Esportivo',
        description: 'Leve e respirável, para o seu melhor desempenho.',
        price: 199.90,
        imageUrl: 'https://placehold.co/400x300/ef4444/ffffff?text=Tênis',
    },
    {
        id: 4,
        name: 'Mochila de Couro',
        description: 'Elegante e espaçosa, com compartimentos para laptop.',
        price: 249.90,
        imageUrl: 'https://placehold.co/400x300/10b981/ffffff?text=Mochila',
    },
    {
        id: 5,
        name: 'Boné Clássico',
        description: 'Proteção solar e estilo para o seu visual.',
        price: 49.90,
        imageUrl: 'https://placehold.co/400x300/f59e0b/ffffff?text=Boné',
    },
    {
        id: 6,
        name: 'Óculos de Sol',
        description: 'Lentes polarizadas com proteção UV, para mais conforto.',
        price: 159.90,
        imageUrl: 'https://placehold.co/400x300/6b7280/ffffff?text=Óculos',
    },
];

export default function StorePage() {
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

    return (
        <div className={`p-8 min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <header className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                    ShopSense
                </h1>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
                        <ShoppingCart className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                        <span className="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full text-white text-xs flex items-center justify-center"></span>
                    </button>
                </div>
            </header>

            <section className="mb-10">
                <h2 className="text-3xl font-bold mb-4">Bem-vindo à nossa loja!</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Confira a nossa seleção de produtos incríveis e encontre o que você precisa.
                </p>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockProducts.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{product.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 h-12 overflow-hidden">{product.description}</p>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">R${product.price.toFixed(2)}</span>
                                <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                                    <ShoppingCart className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
