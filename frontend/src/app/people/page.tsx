'use client';

import { useState, useEffect } from 'react';
import { listPeople } from './people_service';
import { useRouter } from 'next/navigation'; // Usando o Router do Next.js 13

interface Person {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
  street: string;
  district: string;
  city: string;
  state: string;
  number: string;
  cep: string;
}

const PeopleList = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter(); // Usando o useRouter para navegar

  const fetchPeople = async () => {
    setLoading(true);
    try {
      console.log("-------")
      const response = await listPeople();
      console.log(response)
      setPeople(response.data);
    } catch (err) {
      setError('Erro ao carregar a lista de pessoas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      setLoading(true);
      try {
        await axios.delete(`/api/people/${id}`);
        fetchPeople(); // Recarregar a lista de pessoas após exclusão
      } catch (err) {
        setError('Erro ao excluir pessoa');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEdit = (id: number) => {
    router.push(`/people/form?id=${id}`); // Navegar para o formulário de edição
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Lista de Pessoas</h1>

        <div className="mb-4 text-right">
          <button
            onClick={() => router.push('/people/form')} // Navegar para o formulário de criação
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Criar Nova Pessoa
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="space-y-4">
          {people.map((person) => (
            <div key={person.id} className="p-4 border rounded-lg bg-white shadow-sm">
              <p><strong>Nome:</strong> {person.name}</p>
              <p><strong>CPF:</strong> {person.cpf}</p>
              <p><strong>Data de Nascimento:</strong> {person.birthDate}</p>
              <p><strong>Endereço:</strong> {person.street}, {person.district}, {person.city} - {person.state}, {person.cep}</p>
              <div className="mt-4">
                <button
                  onClick={() => handleEdit(person.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(person.id)}
                  className="ml-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeopleList;
