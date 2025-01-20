'use client';

import React from 'react';
import axios from 'axios';

interface PeopleCardProps {
  person: any;
  onEdit: (person: any) => void;
  onDelete: (id: number) => void;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ person, onEdit, onDelete }) => {
  const handleDelete = async () => {
    if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
      try {
        await onDelete(person.id);
      } catch (error) {
        console.error('Erro ao excluir pessoa', error);
      }
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <p><strong>Nome:</strong> {person.name}</p>
      <p><strong>CPF:</strong> {person.cpf}</p>
      <p><strong>Data de Nascimento:</strong> {person.birthDate}</p>
      <p><strong>Endereço:</strong> {person.street}, {person.district}, {person.city} - {person.state}, {person.cep}</p>
      <div className="mt-2 flex space-x-2">
        <button onClick={() => onEdit(person)} className="btn bg-blue-500 text-white hover:bg-blue-600">Editar</button>
        <button onClick={handleDelete} className="btn bg-red-500 text-white hover:bg-red-600">Deletar</button>
      </div>
    </div>
  );
};

export default PeopleCard;
