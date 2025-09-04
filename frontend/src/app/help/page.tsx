"use client";

import { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, Mail, Phone } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'Como faço para gerenciar meus produtos?',
        answer: 'Você pode gerenciar seus produtos na página de Produtos. Lá, você pode adicionar novos itens, editar informações de produtos existentes, controlar o estoque e alterar o status.',
    },
    {
        question: 'Posso alterar a aparência da minha loja?',
        answer: 'Sim, na página Minha Loja você pode atualizar informações como o nome, a descrição, as informações de contato e o logo, que serão exibidos na página pública da sua loja.',
    },
    {
        question: 'Onde vejo minhas vendas?',
        answer: 'Na página Dashboard, você pode ver um resumo de suas vendas, pedidos pendentes e os produtos mais vendidos. Para detalhes e gráficos, verifique a página de Estatísticas.',
    },
    {
        question: 'Como ativo o modo escuro?',
        answer: 'Você pode ativar o modo escuro na página Configurações, na seção de Preferências do Sistema. Basta clicar no botão para alternar entre os temas claro e escuro.',
    },
];

export default function HelpPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`p-8 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Ajuda</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Seção de Perguntas Frequentes */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <h2 className="text-lg font-semibold">Perguntas Frequentes</h2>
                    </div>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="flex justify-between items-center w-full text-left font-medium text-gray-900 dark:text-gray-100"
                                >
                                    <span>{item.question}</span>
                                    <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                                {openIndex === index && (
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Seção de Contato e Suporte */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                        <Mail className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        <h2 className="text-lg font-semibold">Contato e Suporte</h2>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Se você não encontrou a resposta que procurava, sinta-se à vontade para nos contatar.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            <a href="mailto:suporte@shopsense.com" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">suporte@shopsense.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                            <a href="tel:+5511987654321" className="text-sm text-gray-900 dark:text-gray-100">+55 (11) 98765-4321</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
