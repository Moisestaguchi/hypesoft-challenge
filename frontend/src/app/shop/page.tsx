"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Save, Image as ImageIcon } from 'lucide-react';

export default function MyShopPage() {
    const [shopName, setShopName] = useState('ShopSense');
    const [shopDescription, setShopDescription] = useState('Uma loja incrível de produtos artesanais e tecnologia inovadora.');
    const [address, setAddress] = useState('Rua Principal, 123 - Centro, São Paulo');
    const [phone, setPhone] = useState('+55 (11) 98765-4321');
    const [email, setEmail] = useState('contato@shopsense.com');
    const [facebook, setFacebook] = useState('shopsense_br');
    const [instagram, setInstagram] = useState('shopsense_br');

    const handleSave = () => {
        console.log('Dados salvos:', { shopName, shopDescription, address, phone, email, facebook, instagram });
        alert('As informações da loja foram salvas com sucesso!');
    };

    return (
        <div className="p-8">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Minha Loja</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Seção de Edição */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Editar Informações da Loja</h2>

                    <div className="space-y-6">
                        {/* Imagem da Loja */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Logo ou Imagem Principal</label>
                            <div className="mt-1 flex justify-center items-center h-48 w-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden relative">
                                <ImageIcon className="h-12 w-12 text-gray-400" />
                                <span className="absolute bottom-2 text-xs text-gray-500">Clique para fazer upload</span>
                            </div>
                        </div>

                        {/* Informações da Loja */}
                        <div>
                            <h3 className="text-md font-semibold text-gray-800 mb-2">Informações Gerais</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="shopName" className="block text-sm font-medium text-gray-700">Nome da Loja</label>
                                    <input
                                        type="text"
                                        id="shopName"
                                        value={shopName}
                                        onChange={(e) => setShopName(e.target.value)}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 p-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="shopDescription" className="block text-sm font-medium text-gray-700">Descrição</label>
                                    <textarea
                                        id="shopDescription"
                                        value={shopDescription}
                                        onChange={(e) => setShopDescription(e.target.value)}
                                        rows={3}
                                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 p-2"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* Contatos e Redes Sociais */}
                        <div>
                            <h3 className="text-md font-semibold text-gray-800 mb-2">Contatos e Redes Sociais</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Endereço</label>
                                    <div className="relative mt-1">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 p-2 pl-9"/>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                                    <div className="relative mt-1">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 p-2 pl-9"/>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                    <div className="relative mt-1">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 p-2 pl-9"/>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook</label>
                                    <div className="relative mt-1">
                                        <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <input type="text" id="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 p-2 pl-9"/>
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram</label>
                                    <div className="relative mt-1">
                                        <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                                        <input type="text" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100 p-2 pl-9"/>
                                    </div>
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

                {/* Seção de Prévia da Loja */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-inner border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Prévia da Página da Loja</h2>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                <ImageIcon className="h-10 w-10 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{shopName}</h3>
                            <p className="text-sm text-gray-500 mt-2">{shopDescription}</p>
                        </div>
                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <div className="space-y-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm">{address}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm">{phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm">{email}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <a href={`https://facebook.com/${facebook}`} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <Facebook className="h-6 w-6" />
                                </a>
                                <a href={`https://instagram.com/${instagram}`} target="_blank" className="text-gray-400 hover:text-pink-600 transition-colors">
                                    <Instagram className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
