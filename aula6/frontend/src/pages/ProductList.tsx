import axios from "axios";
import { useState, useEffect } from "react";

// 1. Defina a interface para o TypeScript não reclamar
interface IProduct {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    createdAt: Date;
}

export default function ProductList() {
    const [products, setProducts] = useState<IProduct[]>([]);

    // 2. O useEffect dispara a função assim que a página abre
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                // A URL deve ser a do seu servidor Node (ex: porta 5000)
                const response = await axios.get('http://localhost:8080/api/product/products');
                setProducts(response.data); // Guarda os dados do Mongo no estado
            } catch (err) {
                console.error("Erro ao conectar com o banco:", err);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div>
            {products.map(p => (
                <div key={p.price} className="p-2 border-b">
                    {p.name} - R$ {p.price}
                </div>
                
            ))}
        </div>
    );
}