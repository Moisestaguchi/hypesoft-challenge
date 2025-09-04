"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import axios from 'axios';
import "./globals.css";
import { Inter } from 'next/font/google';
import { ReactNode } from "react";
import Link from 'next/link';
import {
  Menu,
  Search,
  LayoutDashboard,
  BarChart2,
  Store,
  Box,
  Users,
  FileText,
  MessageSquare,
  Settings,
  HelpCircle,
  Tag,
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

interface NavigationProps {
  title: string;
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  notifications?: number;
}

const Navigation: React.FC<NavigationProps> = ({ title, href, isActive, icon, notifications }) => (
  <Link href={href} className={`flex items-center gap-4 py-2 px-4 rounded-lg transition-colors ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
    {icon}
    <span className="font-medium">{title}</span>
    {notifications !== undefined && notifications > 0 && (
      <span className="ml-auto bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        {notifications}
      </span>
    )}
  </Link>
);


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isTokenProcessing, setIsTokenProcessing] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            const getToken = async () => {
                try {
                    const response = await axios.post(
                        'http://localhost:8080/realms/AuthShop/protocol/openid-connect/token',
                        new URLSearchParams({
                            grant_type: 'authorization_code',
                            client_id: 'frontend-app',
                            redirect_uri: 'http://localhost:3000',
                            code: code,
                        }),
                        {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded',
                            },
                        }
                    );

                    localStorage.setItem('access_token', response.data.access_token);
                    localStorage.setItem('id_token', response.data.id_token);

                    const newUrl = window.location.origin + window.location.pathname;
                    window.history.replaceState({}, document.title, newUrl);

                } catch (error) {
                    console.error('Erro na troca do código por token:', error);
                    router.push('/AuthPage');
                } finally {
                    setIsTokenProcessing(false);
                }
            };
            getToken();
        } else {
            setIsTokenProcessing(false);
        }
    }, [router, pathname]);

    return (
        <html lang="pt-BR">
            <body className={`${inter.className} bg-gray-50 text-gray-900`}>
                {isTokenProcessing ? (
                    // Exibe a tela de carregamento enquanto o token está sendo processado
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-indigo-500 border-gray-200 mx-auto mb-4"></div>
                            <p className="text-gray-600 dark:text-gray-400">Processando autenticação...</p>
                        </div>
                    </div>
                ) : (
                    // Exibe o layout completo após o token ser processado
                    <div className="flex bg-gray-50 min-h-screen font-sans antialiased">
                        <aside className="hidden md:flex flex-col w-64 bg-gray-900 text-white p-6 shadow-lg z-50">
                            <div className="flex items-center gap-3 mb-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-indigo-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                                <span className="text-xl font-bold">ShopSense</span>
                            </div>
                            <nav className="flex flex-col gap-2">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">GERAL</span>
                                <Navigation title="Dashboard" href="/dashboard" isActive={pathname === '/dashboard' || pathname === '/'} icon={<LayoutDashboard className="h-5 w-5 text-indigo-400" />} />
                                <Navigation title="Statistics" href="/statistics" isActive={pathname === '/statistics'} icon={<BarChart2 className="h-5 w-5" />} />
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">SHOP</span>
                                <Navigation title="My Shop" href="/shop" isActive={pathname === '/shop'} icon={<Store className="h-5 w-5" />} />
                                <Navigation title="Produtos" href="/products" isActive={pathname.startsWith('/products')} icon={<Box className="h-5 w-5" />} />
                                <Navigation title="Categorias" href="/categories" isActive={pathname.startsWith('/categories')} icon={<Tag className="h-5 w-5" />} />
                                <Navigation title="Clientes" href="/customers" isActive={pathname === '/customers'} icon={<Users className="h-5 w-5" />} />
                                <Navigation title="Fatura" href="/invoice" isActive={pathname === '/invoice'} icon={<FileText className="h-5 w-5" />} />
                                <Navigation title="Mensagens" href="/messages" isActive={pathname === '/messages'} icon={<MessageSquare className="h-5 w-5" />} notifications={4} />
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">SUPORTE</span>
                                <Navigation title="Configurações" href="/settings" isActive={pathname === '/settings'} icon={<Settings className="h-5 w-5" />} />
                                <Navigation title="Ajuda" href="/help" isActive={pathname === '/help'} icon={<HelpCircle className="h-5 w-5" />} />
                            </nav>
                            <div className="mt-auto p-4 mx-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
                                <h4 className="font-semibold text-lg mb-1">Experimente o ShopSense Pro</h4>
                                <p className="text-xs text-indigo-200 mb-4">Obtenha acesso a mais de 20 recursos para aprimorar suas vendas.</p>
                                <button className="bg-white text-indigo-600 text-sm font-bold py-2 px-4 rounded-full w-full hover:bg-indigo-50 transition-colors">
                                    Atualizar Plano
                                </button>
                            </div>
                        </aside>
                        <div className="flex-1 flex flex-col">
                            <header className="flex items-center justify-between p-6 bg-white border-b border-gray-200 shadow-sm z-40">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setIsSidebarOpen(true)}
                                        className="md:hidden p-2 rounded-md hover:bg-gray-100"
                                    >
                                        <Menu className="h-6 w-6 text-gray-700" />
                                    </button>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900">ShopSense</span>
                                        <span className="text-xs text-gray-500">Shop Admin</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="relative md:w-64 hidden md:block">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <input
                                            type="text"
                                            placeholder="Pesquisar..."
                                            className="w-full pl-9 py-2 pr-4 rounded-lg bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col items-end">
                                            <span className="text-sm font-semibold text-gray-800">Miguel Santos</span>
                                            <span className="text-xs text-gray-500">Shop Admin</span>
                                        </div>
                                        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-600">
                                            MS
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <main className="flex-1 overflow-auto">
                                {children}
                            </main>
                        </div>

                        <div
                            className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-50 md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onClick={() => setIsSidebarOpen(false)}
                        ></div>
                        <aside
                            className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 shadow-xl z-[60] transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-indigo-400"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                    </svg>
                                    <span className="text-xl font-bold">ShopSense</span>
                                </div>
                                <button onClick={() => setIsSidebarOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                            <nav className="flex flex-col gap-2">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">GERAL</span>
                                <Navigation title="Dashboard" href="/dashboard" isActive={pathname === '/dashboard' || pathname === '/'} icon={<LayoutDashboard className="h-5 w-5 text-indigo-400" />} />
                                <Navigation title="Statistics" href="/statistics" isActive={pathname === '/statistics'} icon={<BarChart2 className="h-5 w-5" />} />
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">SHOP</span>
                                <Navigation title="My Shop" href="/shop" isActive={pathname === '/shop'} icon={<Store className="h-5 w-5" />} />
                                <Navigation title="Produtos" href="/products" isActive={pathname.startsWith('/products')} icon={<Box className="h-5 w-5" />} />
                                <Navigation title="Categorias" href="/categories" isActive={pathname.startsWith('/categories')} icon={<Tag className="h-5 w-5" />} />
                                <Navigation title="Clientes" href="/customers" isActive={pathname === '/customers'} icon={<Users className="h-5 w-5" />} />
                                <Navigation title="Fatura" href="/invoice" isActive={pathname === '/invoice'} icon={<FileText className="h-5 w-5" />} />
                                <Navigation title="Mensagens" href="/messages" isActive={pathname === '/messages'} icon={<MessageSquare className="h-5 w-5" />} notifications={4} />
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-4 mb-2">SUPORTE</span>
                                <Navigation title="Configurações" href="/settings" isActive={pathname === '/settings'} icon={<Settings className="h-5 w-5" />} />
                                <Navigation title="Ajuda" href="/help" isActive={pathname === '/help'} icon={<HelpCircle className="h-5 w-5" />} />
                            </nav>
                            <div className="mt-auto p-4 mx-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center">
                                <h4 className="font-semibold text-lg mb-1">Experimente o ShopSense Pro</h4>
                                <p className="text-xs text-indigo-200 mb-4">Obtenha acesso a mais de 20 recursos para aprimorar suas vendas.</p>
                                <button className="bg-white text-indigo-600 text-sm font-bold py-2 px-4 rounded-full w-full hover:bg-indigo-50 transition-colors">
                                    Atualizar Plano
                                </button>
                            </div>
                        </aside>
                    </div>
                )}
            </body>
        </html>
    );
}
