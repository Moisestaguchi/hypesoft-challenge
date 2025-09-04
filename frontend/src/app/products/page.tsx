import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
    return (



        

        <div className="p-6 bg-gray-100 min-h-screen">


            <h2 className="text-2xl font-bold mb-4">Produtos</h2>

            <div className="mb-4">
                <Button>Adicionar Produto</Button>
            </div>

            <Card className="p-4">
                <table className="min-w-full table-auto border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2">Nome</th>
                            <th className="px-4 py-2">Descrição</th>
                            <th className="px-4 py-2">Preço</th>
                            <th className="px-4 py-2">Categoria</th>
                            <th className="px-4 py-2">Quantidade</th>
                            <th className="px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="px-4 py-2">Produto Exemplo</td>
                            <td className="px-4 py-2">Descrição exemplo</td>
                            <td className="px-4 py-2">R$ 100</td>
                            <td className="px-4 py-2">Categoria A</td>
                            <td className="px-4 py-2">15</td>
                            <td className="px-4 py-2 flex gap-2">
                                <Button variant="outline">Editar</Button>
                                <Button variant="destructive">Excluir</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div>


    );
}
