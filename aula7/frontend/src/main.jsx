import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import axios from 'axios'; 

function App() {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        category: '',
    });
    const [editingProduct, setEditingProduct] = useState(null);

    // Função para buscar produtos
    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Erro ao buscar produtos', error);
        }
    };

    // Função para adicionar ou editar produto
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, description, price, stock, category } = formData;

        if (editingProduct) {
            // Editar produto
            try {
                await axios.put(`http://localhost:5000/api/products/${editingProduct._id}`, formData);
                fetchProducts(); // Atualiza a lista
                resetForm();
            } catch (error) {
                console.error('Erro ao atualizar produto', error);
            }
        } else {
            // Adicionar novo produto
            try {
                await axios.post('http://localhost:5000/api/products', { name, description, price, stock, category });
                fetchProducts(); // Atualiza a lista
                resetForm();
            } catch (error) {
                console.error('Erro ao criar produto', error);
            }
        }
    };

    // Função para excluir um produto
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            fetchProducts(); // Atualiza a lista
        } catch (error) {
            console.error('Erro ao excluir produto', error);
        }
    };

    // Função para preencher o formulário para edição
    const handleEdit = (product) => {
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category,
        });
        setEditingProduct(product);
    };

    // Função para resetar o formulário
    const resetForm = () => {
        setFormData({
            name: '',
            description: '',
            price: '',
            stock: '',
            category: '',
        });
        setEditingProduct(null);
    };

    // Buscar produtos ao carregar
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Gestão de Produtos</h1>

            {/* Formulário de Adicionar/Editar Produto */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nome do Produto"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descrição"
                />
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="Preço"
                    required
                />
                <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    placeholder="Estoque"
                />
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="Categoria"
                />
                <button type="submit">{editingProduct ? 'Salvar' : 'Adicionar'}</button>
            </form>

            {/* Listagem de Produtos */}
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <strong>{product.name}</strong>
                        <p>{product.description}</p>
                        <p>Preço: R${product.price}</p>
                        <p>Estoque: {product.stock}</p>
                        <p>Categoria: {product.category}</p>
                        <button onClick={() => handleEdit(product)}>Editar</button>
                        <button onClick={() => handleDelete(product._id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);