"use client";

import { useState, useEffect } from 'react';
import { User, Sun, Moon, Bell, Globe, Save } from 'lucide-react';

export default function SettingsPage() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [language, setLanguage] = useState('Português');

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

    // Efeito para salvar o estado do dark mode no localStorage e aplicar a classe
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleSave = () => {
        // Lógica para salvar as configurações
        console.log('Configurações salvas:', { isDarkMode, notificationsEnabled, language });
        alert('As configurações foram salvas com sucesso!');
    };

    return (
        <div className={`p-8 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Configurações</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Preferências do Sistema */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold mb-4">Preferências do Sistema</h2>
                    <div className="space-y-6">
                        {/* Seletor de Modo Escuro */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-400" /> : <Moon className="h-6 w-6 text-gray-500 dark:text-gray-400" />}
                                <span className="text-gray-900 dark:text-gray-100">Modo Escuro</span>
                            </div>
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDarkMode ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-600'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        {/* Seção de Notificações */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Bell className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-900 dark:text-gray-100">Notificações</span>
                            </div>
                            <button
                                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notificationsEnabled ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-600'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notificationsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        {/* Seção de Idioma */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Globe className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                <span className="text-gray-900 dark:text-gray-100">Idioma</span>
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <option>Português</option>
                                <option>Inglês</option>
                                <option>Espanhol</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Configurações da Conta */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold mb-4">Configurações da Conta</h2>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <User className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Atualizar Perfil</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Altere seu nome de usuário, e-mail e senha.</p>
                            </div>
                        </div>

                        {/* Exemplo de botão de logout */}
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <button className="text-red-600 dark:text-red-400 text-sm font-medium hover:underline">
                                Sair da Conta
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    onClick={handleSave}
                    className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors hover:bg-indigo-700"
                >
                    <Save className="h-5 w-5" />
                    Salvar Alterações
                </button>
            </div>
        </div>
    );
}
