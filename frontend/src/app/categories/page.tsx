import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CategoriesPage() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Categorias</h2>

            <div className="mb-4">
                <Button>Adicionar Categoria</Button>
            </div>

            <Card className="p-4">
                <ul className="list-disc pl-6">
                    <li>Categoria A</li>
                    <li>Categoria B</li>
                    <li>Categoria C</li>
                </ul>
            </Card>
        </div>
    );
}
