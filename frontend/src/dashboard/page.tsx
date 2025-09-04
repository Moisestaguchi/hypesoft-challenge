
import { Card } from "@/components/ui/card";

export default function DashboardPage() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold mb-6">Hypesoft</h1>
                <nav className="flex flex-col gap-3">
                    <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
                    <a href="/products" className="hover:text-gray-300">Produtos</a>
                    <a href="/categories" className="hover:text-gray-300">Categorias</a>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card className="p-4">
                        <h3 className="text-lg font-semibold">Total de Produtos</h3>
                        <p className="text-2xl mt-2">120</p>
                    </Card>
                    <Card className="p-4">
                        <h3 className="text-lg font-semibold">Valor Total do Estoque</h3>
                        <p className="text-2xl mt-2">R$ 25.000</p>
                    </Card>
                    <Card className="p-4">
                        <h3 className="text-lg font-semibold">Produtos com Estoque Baixo</h3>
                        <p className="text-2xl mt-2">8</p>
                    </Card>
                </div>

                {/* Placeholder gráfico */}
                <Card className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Produtos por Categoria</h3>
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                        Gráfico aqui
                    </div>
                </Card>
            </main>
        </div>
    );
}
