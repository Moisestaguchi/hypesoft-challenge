"use client";

import { useState, useEffect } from 'react';
import { ChevronRight, LogIn } from 'lucide-react';

export default function AuthPage() {
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

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Redireciona para o endpoint de autorização do Keycloak.
        // O nome do 'client_id' foi ajustado para 'frontend-app'.
        window.location.href = `http://localhost:8080/realms/AuthShop/protocol/openid-connect/auth?client_id=frontend-app&redirect_uri=http://localhost:3000&response_type=code`;
    };

    const handleRegister = () => {
        // Redireciona para a página de registro do Keycloak.
        // O nome do 'client_id' foi ajustado para 'frontend-app'.
        window.location.href = `http://localhost:8080/realms/AuthShop/protocol/openid-connect/auth?client_id=frontend-app&redirect_uri=http://localhost:3000&response_type=code&scope=openid&kc_action=kc_registration`;
    };

    return (
        <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-sm border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">Acesse sua conta</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                        Entre para gerenciar seus produtos
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Botão de Login com Keycloak */}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-indigo-700"
                    >
                        <LogIn className="h-5 w-5" />
                        Login com Keycloak
                    </button>
                </div>

                {/* Link de Cadastro */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Não tem uma conta?
                        <button
                            onClick={handleRegister}
                            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 ml-1 font-medium transition-colors hover:text-indigo-800 dark:hover:text-indigo-600"
                        >
                            Registre-se
                            <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}
